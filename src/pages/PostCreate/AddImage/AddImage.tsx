import { useRef } from 'react'
import PostPageButton from '@/components/PostPageButton/PostPageButton'
import './AddImage.css'

interface AddImageProps {
  isUpload: boolean
  onChangeUpload: (isUpload: boolean) => void
  onChangeImgDelete : (isImgDelete : boolean) => void
  postImage: File | null
  onChangeImage: (postImage: File | null) => void
}

const AddImage = (props: AddImageProps) => {
  const { isUpload, onChangeUpload, onChangeImgDelete, postImage, onChangeImage } = props

  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const handleAddImage = () => {
    imageInputRef.current?.click()
  }

  const handleDeleteImage = () => {
    onChangeImage(null)
    onChangeUpload(false)
    onChangeImgDelete(true)
    if (imageInputRef.current) {
      imageInputRef.current.value = ''
    }
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0] || null
    if (imgFile) {
      onChangeImage(imgFile)
      onChangeUpload(true)
    }
  }
  return (
    <div className='add-image'>
      <div className='add-image-container'>
        <p className='add-image-name'>{postImage?.name}</p>
        <PostPageButton
          onClick={isUpload ? handleDeleteImage : handleAddImage}
          title={isUpload ? '사진삭제' : '사진추가'}
        />
        <input
          type='file'
          ref={imageInputRef}
          accept='image/*'
          onChange={handleChangeImage}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  )
}

export default AddImage

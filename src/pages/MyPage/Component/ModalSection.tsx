import BottomModal from '@/components/BottomModal/BottomModal'
import '../MyPage.css'

interface ModalSectionProps {
  isOpen: boolean
  onClose: () => void
  buttonText: string
  instruction: string
  inputFields: {
    label: string
    value: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
  }[]
}

const ModalSection = ({
  isOpen,
  onClose,
  buttonText,
  instruction,
  inputFields,
}: ModalSectionProps) => {
  return (
    <>
      {isOpen && (
        <BottomModal
          onClick={onClose}
          buttonText={buttonText}
        >
          <div className='modal-section'>
            <p className='instruction'>{instruction}</p>
            <div className='inner-section'>
              {inputFields.map((field, index) => (
                <div key={index}>
                  <p className='label'>{field.label}</p>
                  <input
                    type={field.type || 'text'}
                    className='input'
                    value={field.value}
                    onChange={field.handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
        </BottomModal>
      )}
    </>
  )
}

export default ModalSection

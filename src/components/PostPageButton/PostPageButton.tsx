import './PostPageButton.css'

interface PostPageButtonProps {
  title: string
  onClick: () => void
}

const PostPageButton = ({ title, onClick }: PostPageButtonProps) => {
  return (
    <button className='post-page-button' onClick={onClick}>
      {title}
      </button>
  );
};

export default PostPageButton
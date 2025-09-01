import '../ShinnyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ 
        animationDuration,
      }}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default ShinyText;
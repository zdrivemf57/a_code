export default function AlertButton({ label, message, type, additionalClass }) {
  const handleClick = () => {
    alert(message);
  };
  
  return (
    <button
      className={`btn btn-${type} ${additionalClass}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

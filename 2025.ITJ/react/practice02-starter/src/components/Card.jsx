export default function Card ({ children }) {
  const cardStyle = {
    border: "1px solid #555",
    borderRadius: "5px",
    width: "320px",
    padding: "15px"
  };
  return <div style={cardStyle}>{children}</div>;
}

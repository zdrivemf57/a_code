import AlertButton from "./AlertButton";

export default function ButtonList () {
  const buttonProps = [
    { label: "おはよう", message: "Good Morning!", type: "primary" },
    { label: "こんにちは", message: "Good Afternoon!", type: "success" },
    { label: "こんばんは", message: "Good Evening!", type: "danger" }
  ];

  return (
    <>
      <h2 className="mb-3">クリックイベント</h2>
      {buttonProps.map((props, index) => (
        <AlertButton
          key={index}
          label={props.label}
          message={props.message}
          type={props.type}
          additionalClass="me-2"
        />
      ))}
    </>
  );
}

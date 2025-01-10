import classes from "./LoadingMotion.module.css";

export default function LoadingMotion ({ marginTop, marginBottom }) {
  const margins = {
    marginTop,
    marginBottom
  };

  return (
    <div style={margins}>
      <div className={classes.loader}></div>
    </div>
  );
}

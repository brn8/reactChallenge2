import "./styles.css";
export default function ProgressBar(props) {
  return (
    <div
      style={{
        height: "35px",
        width: "115px",
        border: "2px solid",
        borderRadius: "10px",
      }}
    >
      {props.width <= 100 && props.width >= 0 ? (
        <div
          style={{
            width: `${props.width}px`,
            background: "red",
            borderRadius: "10px",
          }}
        >
          {props.width}%
        </div>
      ) : (
        alert("Enter number in ranger from 0 to 100")
      )}
    </div>
  );
}

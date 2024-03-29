/* eslint-disable react/prop-types */
import "./style.scss";

const ColorButton = ({
  title = "",
  color = "orange",
  onClick = () => null,
}) => {
  return (
    <button style={{ backgroundColor: `#${color}` }} onClick={() => onClick()}>
      {title}
    </button>
  );
};

export default ColorButton;

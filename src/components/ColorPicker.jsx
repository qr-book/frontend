import React from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = React.memo(function ColorPicker({
  onClickColor,
  defaultColor,
}) {
  const [color, setColor] = React.useState(defaultColor);
  const [pickerView, setPickerView] = React.useState(false);
  const pickerRef = React.useRef();

  const setVisiblePicker = () => {
    setPickerView(!pickerView);
  };

  const handleChangeColor = (e) => {
    setColor(e);
    onClickColor(e);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(pickerRef.current)) {
      setPickerView(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={pickerRef} className="picker-block">
      <div
        className="color-bar"
        style={{ backgroundColor: color }}
        onClick={setVisiblePicker}
      ></div>
      {pickerView && (
        <div className="color-picker">
          <HexColorPicker color={color} onChange={handleChangeColor} />
        </div>
      )}
    </div>
  );
});

export default ColorPicker;

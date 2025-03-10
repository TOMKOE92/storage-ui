import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { SketchPicker } from "react-color";

const DraggableElement = ({ id, type, defaultText, imageUrl }) => {
  const savedState = JSON.parse(localStorage.getItem(id)) || {
    width: type === "image" ? 150 : 200,
    height: type === "image" ? 150 : 60,
    x: 50,
    y: 50,
    bgColor: type === "text" ? "transparent" : "#3498db",
    textColor: "#ffffff",
    fontSize: 16,
    borderColor: "#000000",
    numberValue: 1,
  };

  const [elementState, setElementState] = useState(savedState);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(elementState));
  }, [elementState, id]);

  return (
    <Rnd
      size={{ width: elementState.width, height: elementState.height }}
      position={{ x: elementState.x, y: elementState.y }}
      onDragStop={(e, d) => setElementState({ ...elementState, x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) =>
        setElementState({
          ...elementState,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: position.x,
          y: position.y,
        })
      }
      bounds="parent"
      style={{
        background: type === "text" || type === "image" ? "transparent" : elementState.bgColor,
        color: elementState.textColor,
        border: `2px solid ${elementState.borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `${elementState.fontSize}px`,
        position: "absolute",
        cursor: "move",
        padding: "5px",
      }}
    >
      {type === "image" ? (
        <img src={imageUrl} alt={id} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : type === "input" ? (
        <input type="number" value={elementState.numberValue} onChange={(e) => setElementState({ ...elementState, numberValue: e.target.value })} style={{ width: "100%", height: "100%", background: elementState.bgColor, color: elementState.textColor, fontSize: elementState.fontSize, textAlign: "center", border: `2px solid ${elementState.borderColor}` }} />
      ) : (
        <div onClick={() => setShowPicker(!showPicker)}>
          {defaultText}
        </div>
      )}

      {showPicker && type !== "image" && (
        <SketchPicker color={elementState.bgColor} onChange={(color) => setElementState({ ...elementState, bgColor: color.hex })} />
      )}
    </Rnd>
  );
};

export default DraggableElement;

import { useState } from "react";

function RangeSlider({ title, value, onSliderChange }) {
  const handleSliderChange = event => {
    const newValue = parseInt(event.target.value);
    const titleProp = title;
    onSliderChange(newValue, titleProp);
    // Değer değiştiğinde yapılacak işlemler
  };
  return (
    <div className="items-center justify-center ">
      <label
        htmlFor="steps-range"
        className="block mb-2 text-sm  text-white font-medium"
      >
        {title}
      </label>
      <input
        min={1}
        max={5}
        type="range"
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default RangeSlider;

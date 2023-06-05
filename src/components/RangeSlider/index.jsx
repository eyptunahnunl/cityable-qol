function RangeSlider() {
  return (
    <div>
      <label
        htmlFor="steps-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Energy
      </label>
      <input
        id="steps-range"
        type="range"
        min="0"
        max="5"
        value="2.5"
        step="0.5"
        className=" h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}

export default RangeSlider;

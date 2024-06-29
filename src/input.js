import React, { useRef } from "react";

const InputWithFocusButton = () => {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  // Function to focus the input element
  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} className="border p-2" />
      <button onClick={inputFocus} className="bg-blue-500 text-white p-2 ml-2">
        Focus Input
      </button>
    </div>
  );
};

export default InputWithFocusButton;

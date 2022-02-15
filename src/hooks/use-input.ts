import React, { useEffect, useRef, useState } from "react";

const useInput = (
  initialValue: string,
  validate?: (value: string) => boolean
) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  let isValid = validate? validate(value): true;
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

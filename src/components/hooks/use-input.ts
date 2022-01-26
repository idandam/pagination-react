import React, { useState } from "react";

const useInput = (
  validate: (value: string) => boolean,
  initialValue: string
) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(value);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return { value, isValid, hasError, valueChangeHandler, inputBlurHandler };
};

export default useInput;

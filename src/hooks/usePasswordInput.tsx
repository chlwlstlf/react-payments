import { useState } from "react";
import validators from "../utils/newCardInputValidator";

interface PasswordState {
  value: string;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

interface PasswordInputResult {
  PasswordState: PasswordState;
  handlePasswordChange: (value: string) => void;
}

function usePasswordInput(): PasswordInputResult {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    value: "",
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handlePasswordChange = (value: string) => {
    const isPasswordValid = /^[0-9]*$/.test(value);

    const errorMessage = [validators.password(value)];
    const isValid = !!value && errorMessage[0] === "";
    const isNextVisible = passwordState.isNextVisible || isValid;

    setPasswordState((prevState) => ({
      ...prevState,
      value: isPasswordValid ? value : prevState.value,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return { PasswordState: passwordState, handlePasswordChange };
}

export default usePasswordInput;

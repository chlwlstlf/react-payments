import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface UserNameState {
  value: string;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useUserNameInput(): [UserNameState, (value: string) => void, (e: React.KeyboardEvent<HTMLInputElement>) => void] {
  const [userNameState, setUserNameState] = useState<UserNameState>({
    value: "",
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handleUserNameChange = (value: string) => {
    const userNameValid = /^[a-zA-Z\s]*$/.test(value);
    const errorMessage = [validators.userName(value)];

    setUserNameState((prevState) => ({
      ...prevState,
      errorMessage,
    }));

    if (!userNameValid) return;

    setUserNameState((prevState) => ({
      ...prevState,
      value: value.toUpperCase(),
      errorMessage,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const isValid = !!userNameState.value && !userNameState.errorMessage[0];
      const isNextVisible = userNameState.isNextVisible || isValid;

      setUserNameState((prevState) => ({
        ...prevState,
        isValid,
        isNextVisible,
      }));
    }
  };

  return [userNameState, handleUserNameChange, handleKeyDown];
}

export default useUserNameInput;

import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const valueBlurHandler = (e) => {
        setIsTouched(true)
        if (!isValid){
            return
        }
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        hasError,
        isValid,
        valueChangeHandler,
        valueBlurHandler,
        reset}
}
export default useInput

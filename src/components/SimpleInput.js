import useInput from '../hooks/use-input';
import './SimpleInput.css'

function SimpleInput(props) {
    // const nameInputRef = useRef();

    const {value:enteredName,
        isTouched:isTouchedName,
        isValid: isValidName,
        hasError: notValidAndTouched,
        valueChangeHandler: nameInputChangeHandler,
        valueBlurHandler: nameInputBlurHandler,
        reset: resetName
    } = useInput(value => value !== '');
    
    const {value:enteredLast,
        isTouched:isTouchedLast,
        isValid: isValidLast,
        hasError: notValidAndTouchedLast,
        valueChangeHandler: lastInputChangeHandler,
        valueBlurHandler: lastInputBlurHandler,
        reset: resetLast,
    } = useInput(value => value !== '');

    const {value:enteredEmail,
        isTouched:isTouchedEmail,
        isValid: isValidEmail,
        hasError: notValidAndTouchedEmail,
        valueChangeHandler: emailInputChangeHandler,
        valueBlurHandler: emailInputBlurHandler,
        reset: resetEmail,
    } = useInput(value => value.includes('@'));

    

    let isFormValid = false;
    // const [isFormValid, setIsFormValid] = useState(false)

    // useEffect(() => {
    //     if (isValidName)
    //     setIsFormValid(true)
    //     else
    //     setIsFormValid(false)
    // },[isValidName])

    if(isValidName && isValidEmail && isValidLast)
    isFormValid = true;

    

    const formSubmissionHandler = (e) => {
        e.preventDefault()
        

        if (!isFormValid){
            return
        }

        console.log(enteredName)
        console.log(enteredLast)
        console.log(enteredEmail)
        
        // console.log(nameInputRef.current.value)
        resetName();
        resetLast();
        resetEmail();
    }

    const inputNameClass = !notValidAndTouched
    ? 'form-control'
    : 'form-control invalid'

    const inputLastClass = !notValidAndTouchedLast
    ? 'form-control'
    : 'form-control invalid'
    
    const inputEmailClass = !notValidAndTouchedEmail
    ? 'form-control'
    : 'form-control invalid'

  return (
    <form  className='center-container' onSubmit={formSubmissionHandler}>
        <p><b>Form Page In React Js</b></p>
        <div className={inputNameClass}>
            <label htmlFor='first-name'> First Name</label>
            <input 
                type='text' 
                id='first-name' 
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                // ref={nameInputRef}
                value={enteredName}
            />
            {notValidAndTouched && <p>Your First Name Must Be NOt Empty!</p>}
        </div>

        <div className={inputLastClass}>
            <label htmlFor='last-name'>Last Name</label>
            <input 
                type='text' 
                id='last-name' 
                onChange={lastInputChangeHandler}
                onBlur={lastInputBlurHandler}
                // ref={nameInputRef}
                value={enteredLast}
            />
            {notValidAndTouchedLast && <p>Your Last Name Must Be NOt Empty!</p>}
        </div>

        <div className={inputEmailClass}>
            <label htmlFor='email'>Your Email</label>
            <input 
                type='text' 
                id='email' 
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                // ref={nameInputRef}
                value={enteredEmail}
            />
            {notValidAndTouchedEmail && <p>Please Enterd a Valid Email!</p>}
        </div>

        <div className='form-actions'>
            <button disabled = {!isFormValid} >Submit</button>
        </div>
    </form>
  )
}

export default SimpleInput
export const reducer = (state, action) => {
  switch (action.type) {
    case 'setSubmitted':
      return { ...state, submitted: action.value };
    case 'setReady':
      return { ...state, ready: action.value };
    case 'setUsername':
      return { ...state, username: action.value, usernameLength: action.value.length };
    case 'setPassword':
      return { ...state, password: action.value, passwordLength: action.value.length };
    case 'setUsernameValid':
      return { ...state, usernameValid: action.value };
    case 'setPasswordValid':
      return { ...state, passwordValid: action.value };
    case 'setStep':
      return { ...state, step: action.value };
    default:
      throw new Error();
  }
}


export const initialState = {
  step: 0,
  submitted: false,
  ready: false,
  username: '',
  password: '',
  usernameValid: false,
  passwordValid: false,
  usernameLength: 0,
  passwordLength: 0
}



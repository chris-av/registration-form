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
    case 'setShowPass':
      return { ...state, showPass: !state.showPass };
    case 'setUsernameValid':
      return { ...state, usernameValid: action.value };
    case 'setPasswordValid':
      return { ...state, passwordValid: action.value };
    default:
      throw new Error();
  }
}


export const initialState = {
  submitted: false,
  ready: false,
  username: '',
  password: '',
  showPass: false,
  usernameValid: false,
  passwordValid: false,
  usernameLength: 0,
  passwordLength: 0
}



import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { reducer, initialState } from '../state/test.state';


const Form = ({ step }) => {

  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { username, password } = state;

  // handlers and functions
  const handler = (event) => {
    if (event.target.name === 'username') dispatch({ type: 'setUsername', value: event.target.value });
    if (event.target.name === 'password') dispatch({ type: 'setPassword', value: event.target.value });
  }

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      dispatch({ type: 'setReady', value: true });
    }
    if (username.length === 0 || password.length === 0) {
      dispatch({ type: 'setReady', value: false });
    }
  }, [username, password]);

  const toggleShow = () => dispatch({ type: 'setShowPass' });

  // don't need a manual check
  const handleSubmit = (event) => {
    event.preventDefault();
    const { ready } = state;
    if (ready) dispatch({ type: 'setSubmitted', value: true });
  }

  return (
    <Container>

      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="textb">
          <input type="text" required placeholder="username" onChange={handler} name="username"/>
        </div>

        <div className="textb">
          <input type={state.showPass ? 'text' : 'password' } required placeholder="password" onChange={handler} name="password"/>
          <div className={`show-password fas ${state.showPass ? "fa-eye" : "fa-eye-slash" }`} onClick={toggleShow}></div>
        </div>

        <div className="checkbox">
          <input type="checkbox"/>
          <div className="fas fa-check"></div>
          Stay signed in?
        </div>

        <button type="submit" className="btn fas fa-arrow-right" disabled={!state.ready}></button>
        <a href="/">Can't Sign In?</a>
        <a href="/">Create Account</a>
      </form>

    </Container>
  );
}



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .login-form {
    border: solid 1px black;
    border-radius: 10px;
    width: calc(100% - 20px);
    max-width: 500px;
    padding: 50px 40px;
    background-color: #22E0D6;

    a {
      display: block;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      color: #555;
      // text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 8px;
      transition: .2 linear;
      &:hover {
        color: #111;
      }
    }

    h1 {
      text-align: center;
      margin: 48px 0;
      font-size: 36px;
      color: #111;
      font-size: 36px;
    }

    .textb {
      margin-bottom: 12px;
      position: relative;

      input {
        width: 100%;
        height: 70px;
        border: none;
        background-color: #ededed;
        border-radius: 4px;
        color: #333;
        font-size: 18px;
        font-weight: 700;
        padding: 14px 60px 0 10px;


        &::placeholder {
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 700;
          position: absolute;
          line-height: 70px;
          top: 0;
          left: 20px;
          color: #9d9d9d;
          transition: top 0.3s ease, font-size 0.3s ease-in;
        }

        &:focus::placeholder, &:valid::placeholder {
          left: 10px;
          top: -16px;
          font-size: 10px;
        }

      }
    }

    .show-password {
      position: absolute;
      right: 20px;
      line-height: 70px;
      color: #9d9d9d;
      cursor: pointer;
      user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      position: relative;
      font-size: 18px;
      font-weight: 500;
      color: #333;
      margin: 20px 0;

      input {
        width: 24px;;
        height: 24px;;
        -webkit-appearance: none;
        background-color: #ededed;
        border-radius: 4px;
        margin-right: 10px;
        cursor: pointer;

        &:checked {
          background-color: #bc252a;
        }

        &:checked + .fa-check{
          opacity: 1;
        }

      }

    }

    .checkbox .fa-check {
      position: absolute;
      color: #fff;
      font-size: 14px;
      width: 24px;
      text-align: center;
      user-select: none;
      pointer-events: none;
      opacity: 0;
    }

    .btn {
      display: block;
      width: 100px;
      height: 100px;
      margin: 40px auto;
      background-color: #bc252a;
      color: #fff;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: font-size 0.3s ease-in;
    }

    .fa-arrow-right { font-size: 35px; }

    .fa-arrow-right:hover { font-size: 40px; }

    .btn:disabled {
      background-color: grey;
      color: #ddd;
      border: 2px solid;
    }

  }

  @media(max-width: 500px) {
    .login-form a { font-size: 14px; }
    .login-form h1 { font-size: 35px; }
    .textb input { font-size: 16px; }
    .login-form .fa-arrow-right { font-size: 30px; }
  }


`;


export default Form;


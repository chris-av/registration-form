import styled from 'styled-components';

const TextB = styled.div`
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
        top: 15px;
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
`;


export default TextB;


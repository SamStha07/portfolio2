import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  max-width: 500px;
  opacity: 0.8;
  margin-top: 2rem;

  input,
  textarea {
    width: 100%;
    height: 3em;
    padding: 1rem;
    margin-top: 1rem;
    border: 2px solid green;
    color: white;
    border-radius: 4px;
    background: black;

    &:focus {
      outline: none;
      box-shadow: 0 0 10px green;
    }
  }

  .errorMessage {
    color: red;
    opacity: 0.9;
    font-size: 0.8rem;
  }

  textarea {
    height: 20vh;
  }

  button {
    width: 100%;
    margin-top: 0.5rem;
    background: black;
    border: 2px solid green;
    border-radius: 4px;
    color: white;
    font-size: 1.3rem;
    padding: 0.25em;
    cursor: pointer;

    span {
      opacity: 0.5;

      &:hover {
        opacity: 0.8;
      }
    }

    &:hover {
      transition: 0.5s ease-in;
      opacity: 1;
    }
  }
`;

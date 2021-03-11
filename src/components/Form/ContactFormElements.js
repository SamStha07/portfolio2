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
    color: black;
    border: 2px solid black;
    border-radius: 4px;

    &:focus {
      outline: none;
      box-shadow: 0 0 10px #ffffffff;
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
    background: blue;
    border: 2px solid black;
    border-radius: 4px;
    color: white;
    font-size: 1.5rem;
    padding: 0.25em;
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      transition: 0.5s ease-in;
      opacity: 1;
    }
  }
`;

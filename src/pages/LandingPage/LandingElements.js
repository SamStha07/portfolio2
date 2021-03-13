import styled from 'styled-components';

export const Wrapper = styled.div`
  background: black;
  height: 100vh;
  transition: all 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;

  .right-items {
    padding: 0 20px 0 20px;
  }

  .left-items {
    padding: 0 20px 0 20px;
    p {
      color: white;
      font-family: 'Dancing Script', cursive;
      font-weight: 600;
      font-size: 1.3em;
      opacity: 0.8;
    }
    span {
      color: white;
      font-family: 'Dancing Script', cursive;
      font-weight: 600;
      font-size: 1.4em;
      opacity: 0.8;
    }
  }

  .btn-socialIcons {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    padding-top: 1rem;
    a {
      padding: 0.5rem;
      color: #413c69;
      transition: transform 1s;
    }
    a:hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }

  .btn {
    display: flex;
    justify-content: center;
  }

  .btn-work {
    background: #413c69;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    transition: transform 1s;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);

      i {
        transition: transform 0.8s;
        transform: rotate(90deg);
      }
    }
  }

  /* < 830px */
  @media (max-width: 830px) {
    flex-direction: column-reverse;
    .right-items {
      margin-top: -15%;
    }
    .left-items {
      margin-top: -10%;
    }
  }

  @media (max-width: 550px) {
    .right-items {
      display: none;
    }

    .left-items {
      p {
        font-size: 1.1em;
      }
    }

    .btn-work {
      font-size: 0.9em;
    }
  }
`;

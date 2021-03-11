import styled from 'styled-components';

export const Wrapper = styled.div`
  .project-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    height: 410px;
    width: 300px;
    margin: 0.7em;

    img {
      height: 300px;
      width: 100%;
      display: block;
      transition: 0.5s ease;
    }

    .project-name {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      opacity: 0.7;
    }

    .project-links {
      font-size: 1.4em;
      opacity: 0.6;

      .left {
        float: left;
      }
      .right {
        float: right;
      }

      button {
        cursor: pointer;
        font-size: 0.7em;
        margin: 0.6em;
        padding: 0.4em 1.2em;
        border-radius: 3px;
        color: white;
        /* opacity: 0.9; */
        border: transparent;
        background: #e6e6e6;

        a {
          color: black;
          /* opacity: 0.8; */
        }

        .btn-name {
          /* opacity: 0.8; */
        }
      }
      button:hover {
        transition: 1s ease;
        background: black;
        opacity: 1;
        a {
          color: white;
        }
      }
    }
  }

  .project-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

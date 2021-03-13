import styled from 'styled-components';

export const Wrapper = styled.div`
  .project-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    height: 470px;
    width: 330px;
    margin: 0em 2em 2em 2em;

    .static {
      height: 300px;
      width: 330px;
      display: block;
      transition: 0.5s ease;
      position: absolute;

      &:hover {
        opacity: 0;
        cursor: pointer;
      }
    }

    .active {
      height: 300px;
      width: 100%;
      display: block;
    }
    .active:hover {
      cursor: pointer;
    }

    .project-name {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      opacity: 0.7;
    }

    .description {
      margin: auto;
      margin-left: 20px;
      margin-right: 20px;
      padding: 0.4rem;
      opacity: 0.7;
      font-size: 0.7em;
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

        border: transparent;
        background: #e6e6e6;

        a {
          color: black;
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

  @media (max-width: 380px) {
    .project-card {
      width: 300px;

      .static {
        width: 300px;
      }
      .active {
        width: 300px;
      }
    }
  }

  @media (max-width: 300px) {
    .project-card {
      width: 250px;

      .static {
        width: 250px;
      }
      .active {
        width: 250px;
      }

      .project-links {
        button {
        font-size: 0.6em;
        margin: 0.7em;
        margin-top: 1.3em;
        padding: 0.4em 1.1em;
        
      }
      }

      
    }
`;

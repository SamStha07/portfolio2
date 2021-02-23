import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 5%;
  height: 200px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  overflow: hidden;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  @mixin white-gradient {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::before,
  &::after {
    @include white-gradient;
    content: '';
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll 20s linear infinite;
    display: flex;
    width: calc(140px * 12);
  }

  .slide {
    height: 180px;
    width: 170px;
  }

  img {
    height: 180px;
    width: 170px;
    padding: 30px;
  }

  /* < 830px */
  @media (max-width: 830px) {
    .slide {
      height: 160px;
      width: 150px;
    }

    img {
      height: 160px;
      width: 150px;
      padding: 20px;
    }
  }

  @media (max-width: 550px) {
    .slide {
      height: 140px;
      width: 130px;
    }

    img {
      height: 140px;
      width: 130px;
      padding: 20px;
    }
  }

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-140px * 6));
    }
  }
`;

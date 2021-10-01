import styled, {keyframes} from 'styled-components';

const LandingPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    background: #010101;
    justify-content: center;
    overflow: hidden;
`;
const rotate = keyframes`
  0%   {transform: rotate(0deg);}
  25%  {transform: rotate(90deg);}
  50%  {transform: rotate(180deg);}
  100% {transform: rotate(360deg);}
`;

const BatLogoWrapper = styled.div`
    // animation: ${rotate} .6s linear infinite;
    // animation-timing-function: linear, linear;
`;

export {
    LandingPageWrapper,
    BatLogoWrapper
}
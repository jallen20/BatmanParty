import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    width: 0;
    height: 0;
  }

  to {
    width: 300px;
    height: 244px;
  }
`;
const BatOuter = styled.path`
    fill: #f9ed29;
`;
const BatInner = styled.path`
    fill: #010101;
`;

const Bat = styled.svg`
    width: 150px;
    height: 94px;
    animation: ${rotate} 2s linear infinite;
    animation-direction: alternate; 
`;
export {
    BatOuter,
    BatInner,
    Bat
}
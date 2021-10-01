import styled from 'styled-components';

const BatLogoWrapper = styled.div`
    position: relative;
    display: flex;
    width:100vw;
    height:100vh;
    
    @media only screen and (max-width: 400px) {
        transform: scaleY(.4);
    }
`;

const InnerWrapper = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 2s ease-in;
`;
const InnerWrapperV = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 2s ease-in;
`;
const Logo = styled.img`
    margin: auto;
    width:100vw;
    height:100vh;
    transition: transform 2s ease-in;
`;
const LogoV = styled.img`
    margin: auto;
    width:100vw;
    height:100vh;
    transition: transform 2s ease-in;
    transform: translateX(-50%);
`;

export {
    BatLogoWrapper,
    InnerWrapper,
    Logo,
    LogoV,
    InnerWrapperV
}
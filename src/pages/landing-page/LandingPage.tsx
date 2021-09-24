import React, {useEffect, useState} from "react";
import {BatLogoWrapper, LandingPageWrapper} from "./LandingPage.styles";
import BatLogo from "../../components/assets/bat-logo";

const LandingPage = () => {
    const [x, setX] = useState('');
    const [logoWidth, setLogoWidth] = useState(150);
    const [logoHeight, setLogoHeight] = useState(94);
    const [viewBox, setViewBox] = useState(`0 0 ${logoWidth} ${logoHeight}`);
    
    const onBatLogoClick = () => {
        alert(`You're going to the party!`);
    }
    return (
        <LandingPageWrapper>
            <BatLogoWrapper>
                <BatLogo
                    width={logoWidth}
                    height={logoHeight}
                    viewBox={viewBox}
                    onClick={onBatLogoClick}/>
            </BatLogoWrapper>
        </LandingPageWrapper>
    )
};
export default LandingPage;
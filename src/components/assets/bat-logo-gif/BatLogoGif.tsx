import React, {useState} from 'react';
import {BatLogoWrapper, InnerWrapper, LogoLeft, LogoRight} from "./BatLogoGif.styles";

const BatLogoGif = (props: {
    url: string,
    onClick: any
}) => {
    const {url, onClick} = props;
    const [leftPosition, setLeftPosition] = useState('0');
    const [rightPosition, setRightPosition] = useState('0');

    const styleRight = {
        transform: `translateX(${rightPosition})`
    };
    const styleLeft = {
        transform: `translateX(${leftPosition})`
    };
    const setPosition = (leftPosition: string, rightPosition: string) => {
        setRightPosition(rightPosition);
        setLeftPosition(leftPosition);
    }
    
    const onBatClick = () => {
        setPosition('-100%', '100%');
        onClick();
        setTimeout(setPosition.bind(this, '0', '0'), 3000);
    };
    
    return (
        <BatLogoWrapper onClick={onBatClick}>
            <InnerWrapper style={styleLeft}>
                <LogoLeft alt='bat-logo' src={url}/>
            </InnerWrapper>
            <InnerWrapper style={styleRight}>
                <LogoRight alt='bat-logo' src={url}/>
            </InnerWrapper>
        </BatLogoWrapper>
    )
};
export default BatLogoGif;
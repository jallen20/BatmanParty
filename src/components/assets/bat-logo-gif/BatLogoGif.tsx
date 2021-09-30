import React, {useState} from 'react';
import {BatLogoWrapper, InnerWrapper, Logo, LogoV} from "./BatLogoGif.styles";

const BatLogoGif = (props: {
    url: string,
    onClick: any,
    eventBrightUrl: string
}) => {
    const {url, onClick, eventBrightUrl} = props;
    const [leftPosition, setLeftPosition] = useState('0');
    const [rightPosition, setRightPosition] = useState('0');

    const styleRight = {
        transform: `translateX(${rightPosition})`
    };
    const styleLeft = {
        transform: `translateX(${leftPosition})`
    };
    
    const onBatClick = () => {
        setRightPosition('100%');
        setLeftPosition('-100%');
        setTimeout(() => {
            window.location.href = eventBrightUrl;
        }, 2000);
    }
    
    return (
        <BatLogoWrapper onClick={onBatClick}>
            <InnerWrapper style={styleLeft}>
                <Logo alt='bat-logo' src={url}/>
            </InnerWrapper>
            <InnerWrapper style={styleRight}>
                <LogoV alt='bat-logo' src={url}/>
            </InnerWrapper>
        </BatLogoWrapper>
    )
};
export default BatLogoGif;
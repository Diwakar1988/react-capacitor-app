import { Capacitor } from '@capacitor/core';
import React from 'react';
interface HeadingProps {
    text: string;
}
const Heading: React.FunctionComponent<HeadingProps> = ({text}) => {
    return Capacitor.isNativePlatform() ? <h3>{text}</h3> : <h2>{text}</h2>
}

export default Heading;
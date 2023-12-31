'use client'
import React from 'react'
import { LogoWrapper } from '../styles/components/logo';


type Props = {
    firstName: string,
    lastName: string,
    color: string,
    infinite?: boolean,
}

const Logo: React.FC<Props> = ({ firstName, lastName, color, infinite }) => {
    const animationDelay = 0.08;
    return (
        <LogoWrapper $color={color} $infinite={infinite}>
            <div>
                {firstName.split('').map((letter, index) => (
                    <span key={index} style={{animationDelay: `${index*animationDelay}s`}}>{letter}</span>
                ))}
            </div>
            <div>
                {lastName.split('').map((letter, index) => (
                    <span key={index} style={{animationDelay: `${firstName.length * animationDelay + index*animationDelay}s`}}>{letter}</span>
                ))}
            </div>
        </LogoWrapper>
    )
}

export default Logo

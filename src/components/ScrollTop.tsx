import React, { useEffect, useState } from 'react'
import { ScrollButton } from '../styles/buttons/scrollbtn';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollTop = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const pos = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const value = Math.round((pos * 100) / calcHeight);
        setScrollValue(value);

        setVisible(pos > 100);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <ScrollButton
            onClick={handleClick}
            $visible={visible}
            $scrollValue={scrollValue}
        >
            <span className='progress-value'>
                <FaArrowUp />
            </span>
        </ScrollButton>
    )
}

export default ScrollTop

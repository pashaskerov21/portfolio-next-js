"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [cardStatus, setCardStatus] = useState(false);

    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>(
            ".service-card, .experience-card, .edu-card"
        );
        // Cursor hərəkəti
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener("mousemove", moveCursor);

        const handleHover = (e: Event) => {
            setCardStatus(true);
        };

        const handleOut = (e: Event) => {
            setCardStatus(false);
        };

        cards.forEach((card) => {
            card.addEventListener("mouseover", handleHover);
            card.addEventListener("mouseout", handleOut);
        });

        return () => {
            document.removeEventListener("mousemove", moveCursor);

            cards.forEach((card) => {
                card.removeEventListener("mouseover", handleHover);
                card.removeEventListener("mouseout", handleOut);
            });
        };
    }, []);

    const size = 30;

    return (
        <div className={`cursor ${cardStatus ? 'reverse' : ''}`}
            style={{
                top: position.y - size / 2,
                left: position.x - size / 2,
                width: size,
                height: size,
                opacity: hidden ? 0 : 1,
            }}
        >
            <span style={{width: size-10,height: size-10,}}>
                <span style={{width: size-20,height: size-20,}}></span>
            </span>
        </div>
    );
};

export default Cursor;

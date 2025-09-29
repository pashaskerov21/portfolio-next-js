"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
    value: number;
    title: string;
    speed: number;
}

export default function Counter({ value, title, speed }: CounterProps) {
    const [count, setCount] = useState(0);
    const counterItemRef = useRef<HTMLDivElement | null>(null);
    const startedRef = useRef(false);

    const startCounter = () => {
        if (startedRef.current) return;
        startedRef.current = true;

        let startValue = 0;
        let endValue = value;
        let remainder = 0;
        let step = 1;

        if (endValue <= 100) {
            step = 1;
        } else if (endValue > 100 && endValue <= 1000) {
            step = 10;
            remainder = value % 10;
            endValue = value - remainder;
        } else if (endValue > 1000 && endValue < 5000) {
            step = 25;
            remainder = value % 25;
            endValue = value - remainder;
        } else if (endValue >= 5000) {
            step = 50;
            remainder = value % 50;
            endValue = value - remainder;
        }

        const counter = setInterval(() => {
            startValue += step;
            if (startValue >= endValue) {
                clearInterval(counter);
                setCount(value);
            } else {
                setCount(startValue);
            }
        }, speed);
    };

    const onScroll = () => {
        if (!counterItemRef.current || startedRef.current) return;

        const offsetTop = counterItemRef.current.offsetTop;
        const triggerPoint = offsetTop - window.innerHeight + 200;

        if (window.scrollY > triggerPoint) {
            startCounter();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className="counter-item" ref={counterItemRef}>
            <span className="counter-value">
                {count}
                {title === "experience" && <span>+</span>}
            </span>
            <span className="counter-title">{title}</span>
        </div>
    );
}

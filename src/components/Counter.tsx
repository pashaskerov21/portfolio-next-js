import React from 'react'

const Counter: React.FC<{ value: number, title: string, speed: number }> = ({ value, title, speed }) => {
    const [count, setCount] = React.useState<number>(0);
    const [counterStatus, setCounterStatus] = React.useState<boolean>(false)
    let counterItem = React.useRef<HTMLDivElement | null>(null);

    const countFunction = React.useRef(() => {
        let startValue = 0;
        let endValue = value;
        let remainder = 0;
        let countSecond = speed;
        let step = 1;

        if (endValue <= 100) {
            step = 1;
        } else if (endValue > 100 && endValue <= 1000) {
            step = 10;
            remainder = endValue % 10;
            endValue = endValue - remainder;
        } else if (endValue > 1000 && endValue < 5000) {
            step = 25;
            remainder = endValue % 25;
            endValue = endValue - remainder;
        } else if (endValue >= 5000) {
            step = 50;
            remainder = endValue % 50;
            endValue = endValue - remainder;
        }

        let counter = setInterval(() => {
            startValue += step;

            if (startValue === endValue) {
                clearInterval(counter);
                setCount(value);
            } else {
                setCount(startValue);
            }
        }, countSecond);
    });


    const handleScroll = () => {
        const limit = window.innerWidth < 768 ? 150 : 45;
        if (window.scrollY > (counterItem.current?.offsetTop || 0) - limit) {
            setCounterStatus(true);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);



    React.useEffect(() => {
        if (counterStatus === true) {
            countFunction.current()
        }
    }, [counterStatus, countFunction])
    return (
        <div className="counter-item" ref={counterItem}>
            <span className="counter-value">{count}{title === 'experience' && '+'}</span>
            <span className='counter-title'>{title}</span>
        </div>
    )
}

export default Counter

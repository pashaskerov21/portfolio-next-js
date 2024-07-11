'use client'
import React, { useEffect, useState } from 'react'
import { TimerButton } from '../styles/buttons/TimerButton'
import { FaBell, FaXmark } from 'react-icons/fa6';
import { TimerModalItem } from '../styles/components/TimerModal';
import moment from 'moment';
import confetti from 'canvas-confetti';


const TimerModal = () => {
    const [timerShow, setTimerShow] = useState<boolean>(false);
    const [timerEnd, setTimerEnd] = useState<boolean>(false);
    const [timerDiff, setTimerDiff] = useState<number>(1);
    const toggleTimerModal = () => setTimerShow(prev => !prev);


    const [timerState, setTimerState] = useState<{
        day: string,
        hour: string,
        minute: string,
        second: string,
    }>({
        day: '00',
        hour: '00',
        minute: '00',
        second: '00',
    });
    

    useEffect(() => {
        const endDate = moment('2025-07-12T00:00');

        const x = setInterval(() => {
            let now = moment();
            let difference = endDate.diff(now);
            let duration = moment.duration(difference);
            setTimerDiff(difference);

            let days = Math.floor(duration.asDays()).toString().padStart(2, '0');
            let hours = duration.hours().toString().padStart(2, '0');
            let minutes = duration.minutes().toString().padStart(2, '0');
            let seconds = duration.seconds().toString().padStart(2, '0');

            setTimerState({
                day: days,
                hour: hours,
                minute: minutes,
                second: seconds,
            });

            if (difference < 0) {
                clearInterval(x);
                setTimerState({
                    day: '00',
                    hour: '00',
                    minute: '00',
                    second: '00',
                });
                
                setTimerDiff(0); 
                setTimerEnd(true);
            }

        }, 1000);

        return () => clearInterval(x);
    }, []);

    useEffect(() => {
        if (timerDiff === 0 && timerShow === true) {
            const intervalId = setInterval(() => {
                confetti({
                    particleCount: 500,
                    spread: 300,
                    origin: {
                        x: Math.random(),
                        y: Math.random()
                    },
                    zIndex: 999999 
                });
            }, 1000);

            return () => clearInterval(intervalId); 
        }
    }, [timerDiff, timerShow]);


    return (
        <>
            <TimerButton onClick={toggleTimerModal}>
                <FaBell />
            </TimerButton>
            <TimerModalItem className={`${timerShow ? 'active' : ''}`}>
                <div className="close-button" onClick={toggleTimerModal}><FaXmark /></div>
                <div className={`timer-wrapper ${timerEnd ? 'difference-0' : ''}`}>
                    <div className="timer-item">
                        <span>{timerState.day}</span>
                    </div>
                    <div className="timer-item">
                        <span>:</span>
                    </div>
                    <div className="timer-item">
                        <span>{timerState.hour}</span>
                    </div>
                    <div className="timer-item">
                        <span>:</span>
                    </div>
                    <div className="timer-item">
                        <span>{timerState.minute}</span>
                    </div>
                    <div className="timer-item">
                        <span>:</span>
                    </div>
                    <div className="timer-item">
                        <span>{timerState.second}</span>
                    </div>
                </div>
            </TimerModalItem>
        </>
    )
}

export default TimerModal

'use client'
import React, { useEffect, useState } from 'react'
import { TimerButton } from '../styles/buttons/TimerButton'
import { FaBell, FaXmark } from 'react-icons/fa6';
import { TimerModalItem } from '../styles/components/TimerModal';
import moment from 'moment';

const TimerModal = () => {
    const [timerShow, setTimerShow] = useState<boolean>(false);
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
        const endDate = moment('2025-06-01T00:00');

        const x = setInterval(() => {
            let now = moment();
            let difference = endDate.diff(now);
            let duration = moment.duration(difference);

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
            }

        }, 1000);

        return () => clearInterval(x);
    }, []);


    return (
        <>
            <TimerButton onClick={toggleTimerModal}>
                <FaBell />
            </TimerButton>
            <TimerModalItem className={`${timerShow ? 'active' : ''}`}>
                <div className="close-button" onClick={toggleTimerModal}><FaXmark /></div>
                <div className="timer-wrapper">
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

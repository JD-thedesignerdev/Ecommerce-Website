import React, { RefObject, useEffect, useRef } from 'react'

import './TouchSensor.css'

interface Props {
    elementRef: RefObject<HTMLElement>
    width?: number,
    height?: number,
    sensitivity?: number

}

const TouchSensor: React.FC<Props> = ({ elementRef, width, height, sensitivity }) => {

    const Sensitivity = sensitivity || 20;

    const sensorRef = useRef<HTMLDivElement | null>(null);

    const topLeftCorner = useRef<HTMLDivElement | null>(null);
    const topRightCorner = useRef<HTMLDivElement | null>(null);
    const topCenter = useRef<HTMLDivElement | null>(null);
    const bottomLeftCorner = useRef<HTMLDivElement | null>(null);
    const bottomRightCorner = useRef<HTMLDivElement | null>(null);
    const bottomCenter = useRef<HTMLDivElement | null>(null);
    const centerLeft = useRef<HTMLDivElement | null>(null);
    const centerRight = useRef<HTMLDivElement | null>(null);
    const center = useRef<HTMLDivElement | null>(null);

    const sensorArray = [topLeftCorner.current, topRightCorner.current, topCenter.current, bottomLeftCorner.current, bottomCenter.current, bottomRightCorner.current, centerLeft.current, centerRight.current, center.current];


    const handleTouch = (
        elementRef: RefObject<HTMLElement>,
        mouseX: number,
        mouseY: number,
        sensitivity: number
    ) => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            const rotationY = (deltaX / sensitivity) * -1;
            const rotationX = (deltaY / sensitivity) * -1;
            if (sensitivity > 0 && sensitivity <= 20) {

                elementRef.current.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            } else {
                elementRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
            }

        }
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        handleTouch(elementRef, event.clientX, event.clientY, Sensitivity);
    };

    const sizeSensor = () => {
        if (width && height && sensorRef.current && sensorArray) {
            sensorRef.current.style.width = `${width}px`;
            sensorRef.current.style.height = `${height}px`;

            const sensorWidth = width / 3;
            const sensorHeight = height / 3;
            sensorArray.forEach((sensor) => {
                if (sensor) {
                    sensor.style.width = `${sensorWidth}px`;
                    sensor.style.height = `${sensorHeight}px`;
                }
            })
        }
    }

    useEffect(() => {
        sizeSensor();
    }, [width, height]);
    // I don't need all them refs
    // I ain't need alllat, but I not fixing allat
    return (
        <div
            className="touchSensor"
            ref={sensorRef}>
            <div className="sensor-containers">
                <div
                    ref={topLeftCorner}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)}
                ></div>
                <div
                    ref={centerLeft}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)}            ></div>
                <div
                    ref={bottomLeftCorner}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)}
                ></div>

            </div>
            <div className="sensor-containers">
                <div
                    ref={topCenter}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)} ></div>
                <div
                    ref={center}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)}  ></div>
                <div
                    ref={bottomCenter}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)}  ></div>
            </div>
            <div className="sensor-containers">
                <div
                    ref={topRightCorner}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)}
                ></div>
                <div
                    ref={centerRight}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)} ></div>
                <div
                    ref={bottomRightCorner}
                    className="sensorBox"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => handleTouch(elementRef, 0, 0, 0)}
                ></div>

            </div>
        </div>
    )
}

export default TouchSensor
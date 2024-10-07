//
import React, { useState, useEffect } from "react";
import styles from "./DigitalClockStyles.module.css";

export default DigitalClock;

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  //useEffect(function, [dependencies]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //CLEANUP COMPONENTS
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <section className={styles.container}>
      <div className={styles.digitalClockContainer}>
        <div className={styles.clock}>
          <span>{formatTime()}</span>
        </div>
      </div>
    </section>
  );
}

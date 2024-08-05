import { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import PropTypes from "prop-types";


const NumberCounterUp = ({ end, duration }) => {
  const [isTriggering, setIsTriggering] = useState(false);
  const refElemenCountUp = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTriggering(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (refElemenCountUp.current) {
      observer.observe(refElemenCountUp.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={refElemenCountUp}>
      {isTriggering ? (
        <CountUp start={0} end={end} duration={duration} />
      ) : (
        0
      )}
    </span>
  );
}

NumberCounterUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default NumberCounterUp;
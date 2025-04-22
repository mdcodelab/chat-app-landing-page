import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './Layer.css';

const Layer = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [visible]);

  return (
    visible && (
      <div className="layer">
        <div className="number">
          <CountUp
            start={1}
            end={100}
            duration={2.5}
            onEnd={() => setVisible(false)}
          />
          <span>%</span>
        </div>
      </div>
    )
  );
};

export default Layer;

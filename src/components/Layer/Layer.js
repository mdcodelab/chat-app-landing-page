import React, { useState } from 'react';
import CountUp from 'react-countup';
import './Layer.css';

const Layer = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className="layer">
        <div className="number">
          <CountUp
            start={1}
            end={100}
            duration={10}
            onEnd={() => setVisible(false)}
          />
          <span>%</span>
        </div>
      </div>
    )
  );
};

export default Layer;


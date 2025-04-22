import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './Layer.css';

const Layer = () => {
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);
  const layerRef = useRef(null);

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

  useEffect(() => {
    if (visible) {
      const animationStartTimeout = setTimeout(() => {
        setAnimate(true);
      }, 2500);

      return () => {
        clearTimeout(animationStartTimeout);
      };
    }
  }, [visible]);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setVisible(false);
    };

    const layerElement = layerRef.current;
    if (layerElement) {
      layerElement.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (layerElement) {
        layerElement.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [animate]);

  if (!visible) return null;

  return (
    <div ref={layerRef} className={`layer ${animate ? 'shrink' : ''}`}>
      <div className="layer-container">
        <div className="number">
          <CountUp
            start={1}
            end={100}
            duration={2.5}
          />
          <span>%</span>
        </div>
      </div>
    </div>
  );
};

export default Layer;

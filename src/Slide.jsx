import React from 'react';
import styles from './css/Slide.module.css';

import anterior from '../assets/Svg/anterior.svg';
import proximo from '../assets/Svg/proximo.svg';

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(active * width));
  }, [active]);

  function slidePrev() {
    setActive(active > 0 ? active - 1 : slides.length - 1);
  }

  function slideNext() {
    setActive(active < slides.length - 1 ? active + 1 : 0);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.src} className={styles.item}>
            <img src={slide.src} alt={slide.titulo} />
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev} aria-label="Anterior">
          <img src={anterior} alt="anterior" />
        </button>
        <button onClick={slideNext} aria-label="Próximo">
          <img src={proximo} alt="proximo" />
        </button>
      </nav>
    </section>
  );
};

export default Slide;

import { useEffect, useState } from 'react';


const ScrollUpButton = () => {
  const [scrollUpButton, setScrollUpButton] = useState(false);
  useEffect(() => {
    const windowHeight = 75;
    window.addEventListener('scroll', () => {
      if (window.scrollY > windowHeight) {
        setScrollUpButton(true);
      } else {
        setScrollUpButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="ScrollUpButton">
      {scrollUpButton && (
        <button onClick={scrollTop}>Topo</button>
      )}
    </div>
  );
};

export default ScrollUpButton;
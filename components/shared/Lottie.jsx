import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
const LottieAnimation = ({ src, width, height }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: src, // Assuming src is the actual animation data
    });

    return () => anim.destroy(); // Optional clean-up for unmounting
  }, [src]);

  return (
    <div
      style={((width = { width }), (height = { height }))}
      ref={animationContainer}
    ></div>
  );
};

export default LottieAnimation;

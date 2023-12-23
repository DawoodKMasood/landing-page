'use client';
import Container from '@/components/shared/Container';
import PropTypes from 'prop-types';
import { useTranslation } from '@/i18n/client';
import { heroSlides } from '@/constants/home';
import { useState, useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

gsap.registerPlugin(TextPlugin);

const Hero = ({ language }) => {
  const { t } = useTranslation(language);
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideTitle = useRef('');

  useEffect(() => {
    gsap.to('#title', {
      duration: 2,
      text: heroSlides[currentSlide].title,
      ease: 'none',
    });
  }, [currentSlide]);

  const changeSlide = (direction) => {
    slideTitle.current.innerHTML = '';
    setCurrentSlide((prev) => {
      const newIndex = direction === 'next' ? prev + 1 : prev - 1;
      return (newIndex + heroSlides.length) % heroSlides.length;
    });
  };
  return (
    <Container className='h-[calc(100vh-85px)] overflow-x-hidden bg-gradient-to-b from-primary-100 to-primary-200 py-6 md:h-[calc(100vh-105px)]'>
      <div className='relative mx-auto h-full'>
        <div className='container relative mx-auto flex h-full flex-col items-center justify-center gap-4 md:flex-row'>
          <div className='w-full text-center md:w-8/12 md:text-left'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              {heroSlides[currentSlide].heading}
              <span ref={slideTitle} id='title'></span>
            </h1>
            <p className='mt-6  text-lg leading-8 text-gray-600'>
              {heroSlides[currentSlide].description}
            </p>
            <button className='btn-primary mt-6'>Request Quote</button>
          </div>

          <div className='hidden w-full md:block md:w-4/12'>
            <Player
              autoplay
              loop
              src={heroSlides[currentSlide].src}
              style={{
                height: '350px',
                width: '350px',
                borderRadius: '2rem',
                boxShadow: 'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
              }}
            ></Player>
          </div>
        </div>
        {/* Left right icons */}
        <button
          onClick={() => changeSlide('prev')}
          className='absolute bottom-0 left-0 flex h-16 w-16  -translate-y-1/2 items-center justify-center rounded-full border  border-primary-950 transition-all delay-150  md:-left-24 md:top-2/4  md:h-48  md:w-48 md:hover:h-60 md:hover:w-60'
        >
          <ArrowLeftIcon className='h-6 w-6 text-black' />
        </button>
        <button
          onClick={() => changeSlide('next')}
          className='absolute bottom-0 right-0 flex h-16 w-16  -translate-y-1/2 items-center justify-center rounded-full border  border-primary-950 transition-all delay-150 md:-right-24 md:top-2/4  md:h-48  md:w-48 md:hover:h-60 md:hover:w-60'
        >
          <ArrowRightIcon className='h-6 w-6 text-black' />
        </button>
      </div>
    </Container>
  );
};

Hero.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Hero;

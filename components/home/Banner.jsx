'use client';
import Container from '@/components/shared/Container';
import PropTypes from 'prop-types';
import { useTranslation } from '@/i18n/client';
import { bannerContent } from '@/constants';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useEffect } from 'react';
import BottomWaves from '@/assets/backgrounds/bottom-waves.svg';
import Monitor from '@/assets/backgrounds/monitor.jpg';
gsap.registerPlugin(ScrollTrigger);

const Banner = ({ language }) => {
  const { t } = useTranslation(language);
  const title = useRef(null); // Title Ref for animation
  const description = useRef(null); // Description Ref for animation
  const quoteBtn = useRef(null); // Quote Button Ref for animation

  useEffect(() => {
    gsap.to(title.current, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title.current,
        start: 'top 100%',
        toggleActions: 'restart none restart none',
      },
    });
    gsap.to(description.current, {
      duration: 1.5,
      opacity: 1,
      x: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: description.current,
        start: 'top 100%',
        toggleActions: 'restart none restart none',
      },
    });
    gsap.to(quoteBtn.current, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: quoteBtn.current,
        start: 'top 100%',
        toggleActions: 'restart none restart none',
      },
    });
  }, []);
  return (
    <Container className=' !px-0 !py-28'>
      <div className='relative h-96 py-28'>
        <Image
          fill={true}
          className='absolute inset-0 h-full w-full bg-center object-cover'
          src={Monitor.src}
          alt='build your website image'
        ></Image>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-primary-900 to-primary-500 opacity-90'></div>
        <div className='px-md-0 px-5'>
          <div className='relative text-center'>
            <h2
              ref={title}
              className='-translate-y-44 text-2xl font-bold leading-none  text-white opacity-0 md:text-5xl'
            >
              {t(bannerContent.title)}
            </h2>
            <p
              ref={description}
              className='mb-12 mt-5 -translate-x-96 text-center text-gray-200/80 opacity-0 md:text-xl'
            >
              {t(bannerContent.description)}
            </p>

            <button
              ref={quoteBtn}
              className='btn-primary translate-y-44 border-2 border-white bg-transparent opacity-0 hover:bg-white hover:text-primary-900'
            >
              {t(bannerContent.quoteBtn)}
            </button>
          </div>
        </div>
        <div className='absolute inset-y-full bottom-0 left-0 right-0'>
          <Image
            width={100}
            height={100}
            src={BottomWaves.src}
            alt='bg-pattern'
            className='block w-full'
          />
        </div>
      </div>
    </Container>
  );
};

Banner.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Banner;

'use client';
import Container from '@/components/shared/Container';
import PropTypes from 'prop-types';
import { useTranslation } from '@/i18n/client';
import { whyUsContent } from '@/constants';

import LottieAnimation from '@/components/shared/Lottie';

const WhyUs = ({ language }) => {
  const { t } = useTranslation(language);

  return (
    <Container className=' !py-28'>
      <div className='relative mx-auto flex h-full flex-col items-center justify-center'>
        <div className='text-center'>
          <h2 className='flex items-end justify-center font-bold leading-none text-primary-700 md:text-5xl'>
            Why Choose Us
            <div className='bg-orange-500 h-2 w-2 rounded-full md:h-3 md:w-3'></div>
          </h2>
        </div>
        <p className='mb-20 mt-5 text-center md:text-xl'>
          Innovative Solutions for Modern Challenges
        </p>
        <div className='container flex items-center justify-center'>
          {whyUsContent.cards.map((card) => (
            <div key={card.key} className=' px-12 text-center'>
              <LottieAnimation
                src={card.animation}
                height='100px'
                width='100px'
              />

              <h3 className='mb-3 mt-5  text-2xl font-bold'>{card.heading}</h3>
              <p className='text-center'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

WhyUs.propTypes = {
  language: PropTypes.string.isRequired,
};

export default WhyUs;

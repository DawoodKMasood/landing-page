'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { navbarMenu, navbarActions } from '@/constants';

import { Bars3Icon } from '@heroicons/react/24/solid';
import Logo from '@/public/assets/images/logo.svg';

import { useTranslation } from '../../i18n/client';
import Container from './Container';

const Navbar = ({ language }) => {
  const { t } = useTranslation(language);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu((prevMenu) => !prevMenu);
  };

  return (
    <Container className='!absolute left-0 top-0 z-50 w-full py-6'>
      <div className='mx-auto'>
        <div className='relative flex items-center gap-4'>
          <div className='flex flex-1'>
            <Link href='/' className='max-w-[150px]'>
              <Image src={Logo} alt={t('navbar.logo-text')} />
            </Link>
          </div>
          <button
            onClick={toggleMobileMenu}
            className='flex cursor-pointer rounded-md border border-gray-200 p-1 hover:bg-gray-50 sm:hidden'
            aria-expanded={mobileMenu}
            aria-label='Toggle mobile menu'
          >
            <Bars3Icon className='h-6 w-6 text-black' />
          </button>
          <div className='hidden sm:flex'>
            <ul className='flex divide-x-2 divide-primary-100 px-3 text-sm font-medium'>
              {navbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    className='relative block px-3 text-base font-medium hover:text-primary-800'
                    href={menu.link}
                  >
                    {t(menu.langKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden flex-1 justify-end md:flex'>
            <ul className='flex'>
              {navbarActions.map((action) => (
                <li key={action.id}>
                  <Link href={action.link}>
                    <div className='btn-primary'>Request Quote</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {mobileMenu && (
          <div className='my-4 flex rounded border border-primary-100 px-2 py-2 sm:hidden'>
            <ul className='flex w-full flex-col divide-y-2 divide-primary-50 px-3 text-sm font-medium'>
              {navbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    className='relative flex w-full justify-center px-3 py-2 text-base font-medium hover:text-primary-800'
                    href={menu.link}
                  >
                    {t(menu.langKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Navbar;

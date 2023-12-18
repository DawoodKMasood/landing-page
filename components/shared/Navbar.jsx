'use client'

import Link from 'next/link';
import { useTranslation } from '../../i18n/client';

import Container from './Container';
import { navbarMenu, navbarActions } from '@/constants';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = ({ language }) => {
  const { t } = useTranslation(language);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = (_event) => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <Container className='py-6 border-b border-primary-100'>
      <div className='mx-auto'>
        <div className='relative flex items-center gap-4'>
          <div className='flex flex-1'>
            <Link href="/">
              <span className='text-lg font-medium'>{t('navbar.logo-text')}</span>
            </Link>
          </div>
          <button onClick={toggleMobileMenu} className='flex border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 p-1 sm:hidden'>
            <Bars3Icon className="h-6 w-6 text-black" />
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
          <div className='hidden md:flex flex-1 justify-end'>
            <ul className='flex'>
              {navbarActions.map((action) => (
                <li key={action.id}>
                  <Link href={action.link}>
                    <div className='bg-primary-700 hover:bg-primary-800 text-white p-2 rounded-lg'>
                      Request Quote
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {mobileMenu && (
          <div className='flex sm:hidden py-2 my-4 px-2 border border-primary-100 rounded'>
            <ul className='flex flex-col divide-y-2 w-full divide-primary-50 px-3 text-sm font-medium'>
              {navbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    className='flex justify-center relative px-3 py-2 text-base font-medium hover:text-primary-800 w-full'
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

export default Navbar;

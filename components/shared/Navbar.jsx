import Link from 'next/link';
import { useTranslation } from '../../i18n';

import Container from './Container';
import { navbarMenu, navbarActions } from '@/constants';

const Navbar = async ({ language }) => {
  const { t } = await useTranslation(language);

  return (
    <Container className='py-6'>
      <div className='mx-auto'>
        <div className='relative flex items-center gap-4'>
          <div className='flex flex-1'>
            <Link href="/">
              <span className='text-lg font-medium text-primary-900 hover:text-primary-800'>{t('navbar.logo-text')}</span>
            </Link>
          </div>
          <div className='flex'>
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
          <div className='flex flex-1 justify-end'>
            <ul className='flex'>
              {navbarActions.map((action) => (
                <li key={action.id}>
                  <Link href={action.link}>
                    <div className='bg-primary-700 text-white p-2 rounded-lg'>
                      Request Quote
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

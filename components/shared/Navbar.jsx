import Link from 'next/link';
import { useTranslation } from '../../i18n';

import Container from './Container';
import { navbarMenu } from '@/constants';

const Navbar = async ({ language }) => {
  const { t } = await useTranslation(language);

  return (
    <Container className='border-b border-primary-100'>
      <div className='mx-auto'>
        <div className='relative flex items-center gap-4'>
          <div className='flex flex-1'>{t('navbar.logo-text')}</div>
          <div className='flex flex-1 justify-end md:justify-center'>
            <ul className='flex px-3 text-sm font-medium'>
              {navbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    className='text-gray-400 hover:text-gray-800 relative block px-3 py-2 text-base transition'
                    href={menu.link}
                  >
                    {t(menu.langKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex justify-end md:flex-1'>Hello</div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

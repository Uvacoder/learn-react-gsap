import { Tween } from 'react-gsap';

import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';

export default function Fade() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <div className='space-y-4'>
              <Tween
                from={{ y: '50px', opacity: 0 }}
                to={{ y: 0, opacity: 1, visibility: 'visible' }}
                duration={0.5}
                ease='power2.out'
              >
                <div className='flex invisible space-x-4'>
                  <CustomLink href='/'>← Back</CustomLink>
                  <CustomLink href='/stagger'>To The Stagger Page →</CustomLink>
                </div>
                <p className='invisible'>
                  All elements will animate all at once
                </p>
              </Tween>
              <Tween
                from={{ rotate: '100' }}
                to={{ rotate: 0 }}
                duration={2}
                ease='power2.out'
              >
                <div className='w-5 h-5 bg-white'></div>
              </Tween>
              <Tween
                from={{ x: '100px' }}
                to={{ x: 0 }}
                duration={1}
                ease='elastic.out'
              >
                <div className='w-5 h-5 bg-white'></div>
              </Tween>
            </div>

            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

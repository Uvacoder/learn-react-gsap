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
                to={{ y: 0, opacity: 1 }}
                duration={0.5}
                ease='power2.out'
              >
                <h1>
                  <CustomLink href='/stagger'>To Stagger Page</CustomLink>
                </h1>
                <p>All elements will animate all at once</p>
              </Tween>
              <Tween
                from={{ rotate: '100' }}
                to={{ rotate: 0 }}
                duration={2}
                ease='power2.out'
              >
                <div className='w-5 h-5 bg-white'></div>
              </Tween>
            </div>

            <footer className='absolute text-gray-300 bottom-2'>
              © {new Date().getFullYear()}
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

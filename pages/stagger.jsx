import { Tween } from 'react-gsap';

import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';

export default function Stagger() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen space-y-4 text-white layout'>
            <Tween
              from={{ y: '50px', opacity: 0 }}
              to={{ y: 0, opacity: 1 }}
              duration={1}
              stagger={0.2}
              ease='power2.out'
            >
              <h1>
                <CustomLink href='/scroll-trigger'>To ScrollTrigger</CustomLink>
              </h1>
              <p className='text-gray-300'>I will run</p>
              <p className='text-gray-300'>individually</p>
              <div className='w-5 h-5 bg-white'></div>
              <div className='w-5 h-5 bg-white'></div>
              <div className='w-5 h-5 bg-white'></div>

              {/* Child Stagger */}
              <div className='flex space-x-1'>
                <Tween
                  from={{ y: '50px', opacity: 0 }}
                  to={{ y: 0, opacity: 1 }}
                  duration={1}
                  delay={0.5}
                  stagger={0.5}
                  ease='power2.out'
                >
                  <div className='w-5 h-5 bg-primary-400'></div>
                  <div className='w-5 h-5 bg-primary-400'></div>
                  <div className='w-5 h-5 bg-primary-400'></div>
                  <div className='w-5 h-5 bg-primary-400'></div>
                  <div className='w-5 h-5 bg-primary-400'></div>
                </Tween>
              </div>

              <div className='w-5 h-5 bg-white'></div>
              <div className='w-5 h-5 bg-white'></div>
              <div className='w-5 h-5 bg-white'></div>
            </Tween>

            <footer className='absolute text-gray-300 bottom-2'>
              © {new Date().getFullYear()}
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

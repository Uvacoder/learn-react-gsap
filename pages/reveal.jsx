import { Tween, Reveal } from 'react-gsap';

import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';

export default function Stagger() {
  return (
    <>
      <Seo />

      <main>
        <div
          className='fixed right-0 text-white transform -translate-y-full border-b border-white'
          style={{ top: '33vh' }}
        >
          Here is 33% of the viewport
        </div>
        <section className='bg-dark'>
          <div className='min-h-screen py-16 space-y-4 text-white layout'>
            <Tween
              from={{ y: '50px', opacity: 0 }}
              to={{ y: 0, opacity: 1 }}
              duration={1}
              stagger={0.2}
              ease='power2.out'
            >
              <div className='flex space-x-4'>
                <CustomLink href='/stagger'>← Back</CustomLink>
                <CustomLink href='/scroll-trigger'>
                  To The ScrollTrigger Page →
                </CustomLink>
              </div>
              <p>This section is not connected to reveal, will run on render</p>
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

              <p className='text-primary-400'>
                The default threshold of the intersection observer is 0.66 (if
                the top of the section takes 66% of the screen, then it will
                trigger)
              </p>
              <p className='text-primary-400'>
                Using reveal will utilize intersection observer so it is lighter
              </p>
            </Tween>

            <footer className='absolute text-gray-300 border-b border-white bottom-2'>
              Here is the top of the next section
            </footer>
          </div>
        </section>

        {/* One Time Trigger Only */}
        <section className='bg-dark' id='section-two'>
          {/* When top of trigger (section two) meets center of the viewport */}
          <Reveal
            trigger={
              <div className='min-h-screen py-16 space-y-4 text-white layout' />
            }
          >
            <Tween
              from={{
                y: '50px',
                opacity: 0,
              }}
              to={{
                y: 0,
                opacity: 1,
              }}
              duration={1}
              stagger={0.2}
              ease='power2.out'
            >
              <h1>
                <CustomLink href='/'>Animate On Scroll</CustomLink>
              </h1>
              <p>By </p>
              <p>
                <CustomLink href='https://theodorusclarence.com'>
                  Theodorus Clarence
                </CustomLink>
              </p>
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
          </Reveal>
        </section>
      </main>
    </>
  );
}

import { Tween, ScrollTrigger } from 'react-gsap';

import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';

export default function Stagger() {
  return (
    <>
      <Seo />

      <main>
        <div className='fixed right-0 text-white transform -translate-y-full border-b border-white top-1/2'>
          I'm center of the viewport
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
                <CustomLink href='/reveal'>← Back</CustomLink>
                <CustomLink href='/'>To The Home Page →</CustomLink>
              </div>
              <p>
                This section is not connected to scroll trigger, will run on
                render
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

              <p className='text-primary-400'>
                We can also achieve the previous Reveal Animate on Scroll with
                ScrollTrigger. But with ScrollTrigger we can do{' '}
                <strong>Animate with Scroll</strong>
              </p>
              <p className='text-primary-400'>
                Animate On Scroll Example: When top of the next section, meets
                center of viewport, Tween will trigger (this can be customized)
              </p>
            </Tween>

            <footer className='absolute text-gray-300 border-b border-white bottom-2'>
              Here is the top of the next section
            </footer>
          </div>
        </section>

        {/* One Time Trigger Only */}
        <section className='bg-dark' id='section-two'>
          <div className='min-h-screen py-16 space-y-4 text-white layout'>
            {/* When top of trigger (section two) meets center of the viewport */}
            <ScrollTrigger start='top center' trigger='#section-two'>
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
            </ScrollTrigger>
          </div>
        </section>

        {/* Animation Scrub */}
        <section className='bg-dark' id='section-three'>
          <div className='min-h-screen py-16 space-y-4 text-white layout'>
            {/* When top of trigger (section three) meets center of the viewport */}
            <ScrollTrigger
              start='top bottom'
              end='center center'
              trigger='#section-three'
              scrub={0.5}
              marker
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
                  <CustomLink href='/'>Animate With Scroll</CustomLink>
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
            </ScrollTrigger>
          </div>
        </section>

        {/* Animation Scrub */}
        <section className='bg-dark' id='section-three'>
          <div className='min-h-screen py-16 space-y-4 text-white layout'>
            <h1>Spare screen so animate with scroll can complete</h1>
          </div>
        </section>
      </main>
    </>
  );
}

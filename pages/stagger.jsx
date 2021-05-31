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
              <div className='flex space-x-4'>
                <CustomLink href='/fade'>← Back</CustomLink>
                <CustomLink href='/reveal'>To The Reveal Page →</CustomLink>
              </div>
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

              {/* Child Stagger */}
              <div className='grid grid-cols-4 gap-2'>
                <Tween
                  from={{ scale: 0.2, opacity: 0 }}
                  duration={1}
                  delay={0.7}
                  stagger={{ from: 'center', amount: 1, grid: [4, 4] }}
                  ease='power2.out'
                >
                  {[...Array(16)].map((e, i) => (
                    <div className='w-5 h-5 bg-primary-400' key={i}></div>
                  ))}
                </Tween>
              </div>
            </Tween>

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

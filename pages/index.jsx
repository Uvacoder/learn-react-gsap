import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import FadeUp from '@/components/FadeUp';

export default function Home() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <FadeUp stagger={1}>
              <h1>Learning React GSAP</h1>
              <p className='mt-2 text-gray-400'>
                Check out{' '}
                <CustomLink href='https://github.com/theodorusclarence/learn-react-gsap'>
                  my repository
                </CustomLink>{' '}
                for the code
              </p>
              <h2>
                <CustomLink className='mt-8' href='/fade'>
                  Start to the fade page
                </CustomLink>
              </h2>
            </FadeUp>
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

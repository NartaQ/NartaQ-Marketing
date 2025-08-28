import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-auto flex flex-col w-full gap-8 text-sm pt-[5%] pb-10 px-[10%] text-black dark:text-white max-md:flex-col'>
      <div className='flex max-md:flex-col max-md:gap-10 gap-10 w-full justify-between flex-wrap'>
        {/* Logo Section */}
        <div className='flex h-full w-[250px] flex-col items-center gap-6 max-md:w-full'>
          <Link href='/' className='w-full items-center flex flex-col gap-4'>
            <Image
              src='/logo/main-tr.svg'
              alt='NartaQ Logo'
              width={120}
              height={120}
              className='max-w-[120px]'
            />
            <div className='text-center'>
              <div className='text-sm font-medium text-[#a98b5d]'>
                Building the Future of Startup Funding
              </div>
              <div className='text-xs text-gray-500 mt-1'>
                France-Tunisia Corridor
              </div>
            </div>
          </Link>

          <div className='flex gap-4'>
            <a
              href='https://twitter.com/nartaq'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl hover:text-[#a98b5d] transition-colors'
              aria-label='Follow us on Twitter'
            >
              <i className='bi bi-twitter' />
            </a>
            <a
              href='https://linkedin.com/company/nartaq'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl hover:text-[#a98b5d] transition-colors'
              aria-label='Connect on LinkedIn'
            >
              <i className='bi bi-linkedin' />
            </a>
            <a
              href='https://discord.gg/nartaq'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl hover:text-[#a98b5d] transition-colors'
              aria-label='Join our Discord'
            >
              <i className='bi bi-discord' />
            </a>
            <a
              href='https://github.com/nartaq'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl hover:text-[#a98b5d] transition-colors'
              aria-label='View on GitHub'
            >
              <i className='bi bi-github' />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>Platform</h2>
          <div className='flex flex-col gap-3'>
            <Link href='/solutions/founders' className='footer-link hover:text-black dark:hover:text-white transition-colors'>For Founders</Link>
            <Link href='/solutions/investors' className='footer-link hover:text-black dark:hover:text-white transition-colors'>For Investors</Link>
            <Link href='/#how-it-works' className='footer-link hover:text-black dark:hover:text-white transition-colors'>How It Works</Link>
            <Link href='/faq' className='footer-link hover:text-black dark:hover:text-white transition-colors'>FAQ</Link>
          </div>
        </div>

        {/* About */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>About</h2>
            <div className='flex flex-col gap-3'>
              <Link href='/about' className='footer-link hover:text-black dark:hover:text-white transition-colors'>Our Story</Link>
              <Link href='/about#team' className='footer-link hover:text-black dark:hover:text-white transition-colors'>The Team</Link>
              <Link href='/about#corridor' className='footer-link hover:text-black dark:hover:text-white transition-colors'>Our Corridor</Link>
            </div>
        </div>

        {/* Legal */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>Legal</h2>
          <div className='flex flex-col gap-3'>
            <Link href='/legal/terms' className='footer-link hover:text-black dark:hover:text-white transition-colors'>Terms</Link>
            <Link href='/legal/privacy' className='footer-link hover:text-black dark:hover:text-white transition-colors'>Privacy</Link>
            <Link href='/legal/dmca' className='footer-link hover:text-black dark:hover:text-white transition-colors'>DMCA</Link>
          </div>
        </div>

        {/* Contact */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>Contact</h2>
          <div className='flex flex-col gap-3'>
            <div className='text-sm'>Email: <a href='mailto:contact@nartaq.com' className='underline hover:text-[#a98b5d]'>contact@nartaq.com</a></div>
          </div>
        </div>
      </div>

      <hr className='mt-8 border-gray-300 dark:border-gray-600' />

      <div className='mt-2 flex gap-2 flex-col text-gray-700 dark:text-gray-300 items-center text-[11px] w-full text-center'>
        <span>© {new Date().getFullYear()} NartaQ. All rights reserved.</span>
        <span>Pre-seed. Vision under active build. France–Tunisia corridor focus.</span>
      </div>
    </footer>
  )
}

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='mt-auto flex flex-col w-full gap-4 text-sm pt-[5%] pb-10 px-[10%] text-black dark:text-white max-md:flex-col'>
      <div className='flex max-md:flex-col max-md:gap-6 gap-3 w-full justify-around'>
        {/* Logo Section */}
        <div className='flex h-full w-[250px] flex-col items-center gap-6 max-md:w-full'>
          <a href='#' className='w-full items-center flex flex-col gap-6'>
            <Image
              src='/logo/main-tr.svg'
              alt='logo'
              width={120}
              height={120}
              className='max-w-[120px]'
            />
          </a>

          <div className='flex gap-4'>
            <a
              href='#'
              className='text-2xl hover:text-blue-500 transition-colors'
            >
              <i className='bi bi-twitter' />
            </a>
            <a
              href='#'
              className='text-2xl hover:text-blue-600 transition-colors'
            >
              <i className='bi bi-linkedin' />
            </a>
            <a
              href='#'
              className='text-2xl hover:text-pink-500 transition-colors'
            >
              <i className='bi bi-instagram' />
            </a>
            <a
              href='#'
              className='text-2xl hover:text-gray-700 transition-colors'
            >
              <i className='bi bi-github' />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div className='flex h-full w-[200px] flex-col gap-4'>
          <h2 className='text-xl'>Product</h2>
          <div className='flex flex-col gap-3'>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              API
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Playground
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Models
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Pricing
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className='flex h-full w-[200px] flex-col gap-4'>
          <h2 className='text-xl'>Company</h2>
          <div className='flex flex-col gap-3'>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              About
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Blog
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Careers
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Contact
            </a>
          </div>
        </div>

        {/* Resources Links */}
        <div className='flex h-full w-[200px] flex-col gap-4'>
          <h2 className='text-xl'>Resources</h2>
          <div className='flex flex-col gap-3'>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Documentation
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Tutorials
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Examples
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Community
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className='flex h-full w-[200px] flex-col gap-4'>
          <h2 className='text-xl'>Legal</h2>
          <div className='flex flex-col gap-3'>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Terms of service
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
            >
              DCMA - Content Takedown
            </a>
          </div>
        </div>
      </div>

      <hr className='mt-8 border-gray-300 dark:border-gray-600' />

      <div className='mt-2 flex gap-2 flex-col text-gray-700 dark:text-gray-300 items-center text-[12px] w-full text-center justify-around'>
        <span>Copyright © 2023-2025</span>
        <span>
          All trademarks and copyrights belong to their respective owners.
        </span>
      </div>
    </footer>
  )
}

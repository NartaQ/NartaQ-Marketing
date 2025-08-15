export default function NewsletterSection() {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-[10%] p-[5%] px-[10%] max-md:px-2'>
      <div className='flex w-full max-w-[80%] items-center justify-between gap-3 rounded-lg bg-[#F6F7FB] dark:bg-[#171717] p-6 max-md:max-w-full max-md:flex-col'>
        <div className='flex flex-col max-lg:text-center gap-1'>
          <h2 className='text-2xl text-gray-800 dark:text-gray-200 max-md:text-xl'>
            Join our newsletter
          </h2>
          <div className='text-gray-700 dark:text-gray-300'>
            Get product insights and updates.
          </div>
        </div>

        <div className='flex h-[60px] items-center gap-2 overflow-hidden p-2'>
          <input
            type='email'
            className='input h-full w-full !border-gray-600 p-2 outline-none bg-transparent border rounded'
            placeholder='email'
          />
          <a
            className='btn !rounded-full !border !text-black !border-solid !border-black dark:!text-white dark:!border-gray-300 !bg-transparent transition-colors duration-300'
            href='#'
          >
            Signup
          </a>
        </div>
      </div>
    </section>
  )
}

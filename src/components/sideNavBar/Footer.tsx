import Link from "next/link";

export default function index() {
  return (
    <div className='flex w-full justify-between text-xs gap-4 md:gap-10 flex-wrap'>
      <Link
        href='#'
        className='text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer'
      >
        Awwwards
      </Link>
      <Link
        href='#'
        className='text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer'
      >
        Instagram
      </Link>
      <Link
        href='#'
        className='text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer'
      >
        Dribble
      </Link>
      <Link
        href='#'
        className='text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer'
      >
        LinkedIn
      </Link>
    </div>
  )
}

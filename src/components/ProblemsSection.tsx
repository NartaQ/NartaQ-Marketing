export default function ProblemsSection() {
  return (
    <section className='relative flex w-full flex-col items-center justify-center p-[2%] overflow-hidden'>
      <div className='w-full items-center flex flex-col max-w-[900px] gap-4 p-4'>
        <div className='purple-bg-grad reveal-up absolute right-[20%] top-[20%] h-[200px] w-[200px]' />

        <h2 className='reveal-up text-6xl max-lg:text-4xl text-center leading-normal uppercase'>
          <span className='font-semibold'>The Real Problems</span>
          <br />
          <span className='font-serif'>Investors & Startups Face</span>
        </h2>

        <p className='reveal-up mt-8 max-w-[650px] text-gray-900 dark:text-gray-200 text-center max-md:text-sm'>
          Each day, billions in potential investments vanish due to poor
          connections between promising startups and the right investors.
        </p>
      </div>

      <div className='mt-6 flex flex-col max-w-[1150px] max-lg:max-w-full h-full p-4 max-lg:items-center gap-8'>
        <div className='max-xl:flex max-xl:flex-col items-center grid grid-cols-3 gap-8 justify-center auto-rows-auto'>
          {/* Problem 1: Finding Next Unicorns */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <div className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#dcd7ce] dark:bg-[#232428] rounded-3xl hover:scale-[1.02]'>
              <div className='w-full flex justify-center min-h-[180px] h-[180px] rounded-xl overflow-hidden bg-[#5c5d63] items-center'>
                <div className='text-6xl text-white'>🔍</div>
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium text-[#232428] dark:text-[#dcd7ce]'>
                Hard to Find the Next Google
              </h2>
              <p className='leading-normal text-[#3e3f44] dark:text-[#dcd7ce]'>
                Investors struggle to spot high-potential startups early. With
                thousands of new companies launching daily, finding the next
                Facebook or Google feels like finding a needle in a haystack.
              </p>
            </div>
          </div>

          {/* Problem 2: Funding Shortage */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <div className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#dcd7ce] dark:bg-[#232428] rounded-3xl hover:scale-[1.02]'>
              <div className='w-full flex justify-center min-h-[180px] h-[180px] rounded-xl overflow-hidden bg-[#a98b5d] items-center'>
                <div className='text-6xl text-white'>💸</div>
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium text-[#232428] dark:text-[#dcd7ce]'>
                Startups Lack Funding
              </h2>
              <p className='leading-normal text-[#3e3f44] dark:text-[#dcd7ce]'>
                95% of startups fail due to lack of funding. Great ideas die
                because founders cannot connect with the right investors who
                understand their vision and market potential.
              </p>
            </div>
          </div>

          {/* Problem 3: Time Wasted Searching */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <div className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#dcd7ce] dark:bg-[#232428] rounded-3xl hover:scale-[1.02]'>
              <div className='w-full min-h-[180px] h-[180px] overflow-hidden bg-[#3e3f44] flex items-center justify-center rounded-xl'>
                <div className='text-6xl text-white'>⏰</div>
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium text-[#232428] dark:text-[#dcd7ce]'>
                Wasting Time Searching
              </h2>
              <p className='leading-normal text-[#3e3f44] dark:text-[#dcd7ce]'>
                Both investors and startups spend months networking and
                searching through endless lists. They lose valuable time that
                could be spent building and growing instead of just looking.
              </p>
            </div>
          </div>
        </div>

        {/* Problem 4: Lack of Trust & Credibility */}
        <div className='reveal-up w-full md:h-[350px] max-md:min-h-[350px] flex'>
          <div className='relative p-10 transition-all duration-300 group/card gap-5 flex max-md:flex-col w-full h-full bg-[#dcd7ce] dark:bg-[#232428] rounded-3xl hover:scale-[1.02]'>
            <div className='w-1/2 max-md:w-full'>
              <h2 className='text-5xl max-md:text-3xl font-medium text-[#232428] dark:text-[#dcd7ce]'>
                Lack of Trust & Credibility
              </h2>
              <p className='mt-4 leading-normal text-[#3e3f44] dark:text-[#dcd7ce]'>
                Investors worry about scams and unvetted startups. Startups fear
                fake investors or predatory terms. Without proper verification
                and transparency, both sides hesitate to engage. They miss
                genuine opportunities.
              </p>
            </div>
            <div className='w-1/2 max-md:w-full flex justify-center items-center'>
              <div className='w-[200px] h-[200px] bg-[#5c5d63] rounded-full flex items-center justify-center'>
                <div className='text-8xl text-white'>🛡️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

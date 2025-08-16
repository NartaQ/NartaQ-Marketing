export default function FeaturesSection() {
  return (
    <section className='relative flex w-full flex-col items-center justify-center p-[2%] overflow-hidden'>
      <div className='w-full items-center flex flex-col max-w-[900px] gap-4 p-4'>
        <div className='purple-bg-grad reveal-up absolute right-[20%] top-[20%] h-[200px] w-[200px]' />

        <h2 className='reveal-up text-6xl max-lg:text-4xl text-center leading-normal uppercase'>
          <span className='font-semibold'>Why this works</span>
          <br />
          <span className='font-serif'>One corridor. Clear bounties. Trusted delivery.</span>
        </h2>

        <p className='reveal-up mt-8 max-w-[700px] text-gray-900 dark:text-gray-200 text-center max-md:text-sm'>
          We start narrow, define work as bounties with objective acceptance criteria, and add milestone protections.
          That combination drives reliable outcomes before we scale to adjacent corridors.
        </p>
      </div>

      <div className='mt-6 flex flex-col max-w-[1150px] max-lg:max-w-full h-full p-4 max-lg:items-center gap-8'>
        <div className='max-xl:flex max-xl:flex-col items-center grid grid-cols-1 md:grid-cols-3 gap-8 justify-center auto-rows-auto'>
          {/* Focused corridor */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <div className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#dcd7ce] dark:bg-[#232428] rounded-3xl hover:scale-[1.02]'>
              <div className='w-full flex justify-center min-h-[180px] h-[180px] rounded-xl overflow-hidden bg-[#5c5d63] items-center'>
                <div className='text-6xl text-white'>🎯</div>
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium text-[#232428] dark:text-[#dcd7ce]'>
                Start narrow to win
              </h2>
              <p className='leading-normal text-[#3e3f44] dark:text-[#dcd7ce]'>
                One initial corridor with verified demand and vetted supply. Tight feedback loops and playbooks before expansion.
              </p>
            </div>
          </div>

          {/* Bounty model */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <div className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#dcd7ce] dark:bg-[#232428] rounded-3xl hover:scale-[1.02]'>
              <div className='w-full flex justify-center min-h-[180px] h-[180px] rounded-xl overflow-hidden bg-[#a98b5d] items-center'>
                <div className='text-6xl text-white'>🏷️</div>
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium text-[#232428] dark:text-[#dcd7ce]'>
                Bounties with acceptance tests
              </h2>
              <p className='leading-normal text-[#3e3f44] dark:text-[#dcd7ce]'>
                Work is defined as scoped briefs with objective acceptance criteria, private bounties for sensitive needs, and payout on acceptance.
              </p>
            </div>
          </div>

          {/* Orchestration & protections */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <div className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#dcd7ce] dark:bg-[#232428] rounded-3xl hover:scale-[1.02]'>
              <div className='w-full min-h-[180px] h-[180px] overflow-hidden bg-[#3e3f44] flex items-center justify-center rounded-xl'>
                <div className='text-6xl text-white'>🛡️</div>
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium text-[#232428] dark:text-[#dcd7ce]'>
                Milestones, hybrid comp, optional mediation
              </h2>
              <p className='leading-normal text-[#3e3f44] dark:text-[#dcd7ce]'>
                Tri‑party orchestration with milestone‑based releases, support for cash + equity via partners, and fast dispute resolution when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

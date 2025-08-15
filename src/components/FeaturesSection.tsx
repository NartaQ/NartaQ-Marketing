import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className='relative flex w-full flex-col items-center justify-center p-[2%] overflow-hidden'>
      <div className='w-full items-center flex flex-col max-w-[900px] gap-4 p-4'>
        <div className='purple-bg-grad reveal-up absolute right-[20%] top-[20%] h-[200px] w-[200px]' />

        <h2 className='reveal-up text-6xl max-lg:text-4xl text-center leading-normal uppercase'>
          <span className='font-semibold'>Build your own AI Apps</span>
          <br />
          <span className='font-serif'>on top of Pixa APIs</span>
        </h2>

        <p className='reveal-up mt-8 max-w-[650px] text-gray-900 dark:text-gray-200 text-center max-md:text-sm'>
          Pixa&apos;s Playground is powered by Pixa&apos;s cutting-edge LLM API endpoints.
          Our powerful models simplify task automation, offering streamlined
          solutions for complex workflows.
        </p>

        <h2 className='reveal-up text-6xl font-medium max-md:text-3xl p-2'>
          Experience all the benefits of AI
        </h2>
      </div>

      <div className='mt-6 flex flex-col max-w-[1150px] max-lg:max-w-full h-full p-4 max-lg:items-center gap-8'>
        <div className='max-xl:flex max-xl:flex-col items-center grid grid-cols-3 gap-8 justify-center auto-rows-auto'>
          {/* Chat Interface Card */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <a
              href='#'
              className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#f6f7fb] dark:bg-[#171717] rounded-3xl hover:scale-[1.02]'
            >
              <div className='w-full flex justify-center min-h-[180px] h-[180px] rounded-xl overflow-hidden'>
                <Image
                  src='/images/home/unified.jpg'
                  alt='Chat interface'
                  width={300}
                  height={180}
                  className='w-full h-auto object-contain'
                />
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium'>
                Chat Interface
              </h2>
              <p className='leading-normal text-gray-800 dark:text-gray-200'>
                Pixa&apos;s chat interface provides seamless interaction with
                multiple AI models, enabling intuitive conversations and complex
                query handling across various domains.
              </p>
              <div className='flex items-center gap-2 mt-auto'>
                <span>Learn more</span>
                <i className='bi bi-arrow-right transform transition-transform duration-300 group-hover/card:translate-x-2' />
              </div>
            </a>
          </div>

          {/* Pre-built Tools Card */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <a
              href='#'
              className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#f6f7fb] dark:bg-[#171717] rounded-3xl hover:scale-[1.02]'
            >
              <div className='w-full flex justify-center min-h-[180px] h-[180px] rounded-xl overflow-hidden'>
                <Image
                  src='/images/home/integrations1.png'
                  alt='Prebuilt integrations'
                  width={300}
                  height={180}
                  className='w-full h-auto object-contain'
                />
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium'>
                Pre-built Tools
              </h2>
              <p className='leading-normal text-gray-800 dark:text-gray-200'>
                Pixa offers pre-built AI integrations for diverse creative tasks
                including image, video, music, and PDF generation, simplifying
                advanced feature integration into your apps.
              </p>
              <div className='flex items-center gap-2 mt-auto'>
                <span>Learn more</span>
                <i className='bi bi-arrow-right transform transition-transform duration-300 group-hover/card:translate-x-2' />
              </div>
            </a>
          </div>

          {/* API Access Card */}
          <div className='reveal-up w-[350px] h-[540px] flex max-md:w-full'>
            <a
              href='#'
              className='relative p-10 transition-all duration-300 group/card gap-5 flex flex-col w-full h-full bg-[#f6f7fb] dark:bg-[#171717] rounded-3xl hover:scale-[1.02]'
            >
              <div className='w-full min-h-[180px] h-[180px] overflow-hidden'>
                <Image
                  src='/images/home/api.png'
                  alt='API'
                  width={300}
                  height={180}
                  className='w-full h-auto object-contain'
                />
              </div>
              <h2 className='text-3xl max-md:text-2xl font-medium'>
                API Access
              </h2>
              <p className='leading-normal text-gray-800 dark:text-gray-200'>
                Pixa&apos;s LLM API offers advanced summarization, text generation,
                and question-answering. Easily integrate with support for JSON,
                HTML, Markdown, and plain text, enhancing your applications with
                powerful language tools.
              </p>
              <div className='flex items-center gap-2 mt-auto'>
                <span>Learn more</span>
                <i className='bi bi-arrow-right transform transition-transform duration-300 group-hover/card:translate-x-2' />
              </div>
            </a>
          </div>
        </div>

        {/* Full Width Feature Card */}
        <div className='reveal-up w-full md:h-[350px] max-md:min-h-[350px] flex'>
          <a
            href='#'
            className='relative p-10 transition-all duration-300 group/card gap-5 flex max-md:flex-col w-full h-full bg-[#f6f7fb] dark:bg-[#171717] rounded-3xl hover:scale-[1.02]'
          >
            <div className='w-1/2 max-md:w-full'>
              <h2 className='text-5xl max-md:text-3xl font-medium'>
                Multi-subscription plans
              </h2>
              <p className='mt-4 leading-normal text-gray-800 dark:text-gray-200'>
                Choose from flexible subscription plans that scale with your
                needs. From individual developers to enterprise teams, find the
                perfect plan for your AI-powered applications.
              </p>
              <div className='flex items-center gap-2 mt-8'>
                <span>Learn more</span>
                <i className='bi bi-arrow-right transform transition-transform duration-300 group-hover/card:translate-x-2' />
              </div>
            </div>
            <div className='w-1/2 max-md:w-full flex justify-center items-center'>
              <Image
                src='/images/home/multi-sub.png'
                alt='Multi subscription'
                width={400}
                height={300}
                className='w-full h-auto object-contain'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

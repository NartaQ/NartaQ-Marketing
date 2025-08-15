import Image from "next/image";

export default function AdditionalFeaturesSection() {
  return (
    <section className="relative flex w-full min-h-[110vh] max-md:min-h-[80vh] flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-lg:max-w-full items-center flex flex-col max-w-[80%] gap-4 p-4">
        <h3 className="reveal-up text-5xl font-medium max-md:text-3xl text-center leading-normal">
          Additional Features
        </h3>

        <div className="reveal-up mt-10 flex flex-wrap justify-center gap-10 max-lg:flex-col">
          
          {/* Image Generation Feature */}
          <div className="reveal-up w-[350px] max-md:w-[320px] border h-[400px] rounded-lg items-center p-4 bg-[#f2f3f4] dark:bg-[#141414] dark:border-[#1f2123] flex flex-col gap-3">
            <div className="w-full h-[250px] p-4 rounded-xl backdrop-blur-2xl overflow-hidden flex justify-center">
              <Image
                src="/images/home/image.png"
                alt="Image generation"
                width={300}
                height={250}
                className="w-auto h-full object-contain"
              />
            </div>
            <h3 className="text-2xl">Image Generation</h3>
            <p className="text-gray-700 dark:text-gray-300 px-4 text-center text-sm">
              Generate Image instantly from multiple models, create visuals from text descriptions or templates.
            </p>
          </div>

          {/* Web Search Feature */}
          <div className="reveal-up w-[350px] max-md:w-[320px] border h-[400px] rounded-lg items-center p-4 bg-[#f2f3f4] dark:bg-[#141414] dark:border-[#1f2123] flex flex-col gap-3">
            <div className="w-full h-[250px] p-4 rounded-xl backdrop-blur-2xl overflow-hidden flex justify-center">
              <Image
                src="/images/home/websearch.png"
                alt="Web search"
                width={300}
                height={250}
                className="w-auto h-full object-contain"
              />
            </div>
            <h3 className="text-2xl">Web Search</h3>
            <p className="text-gray-700 dark:text-gray-300 px-4 text-center text-sm">
              Real-time web search capabilities integrated with AI responses for up-to-date information.
            </p>
          </div>

          {/* Multilingual Support */}
          <div className="reveal-up w-[350px] max-md:w-[320px] border h-[400px] rounded-lg items-center p-4 bg-[#f2f3f4] dark:bg-[#141414] dark:border-[#1f2123] flex flex-col gap-3">
            <div className="w-full h-[250px] p-4 rounded-xl backdrop-blur-2xl overflow-hidden flex justify-center">
              <Image
                src="/images/home/multilingual.png"
                alt="Multilingual support"
                width={300}
                height={250}
                className="w-auto h-full object-contain"
              />
            </div>
            <h3 className="text-2xl">Multilingual</h3>
            <p className="text-gray-700 dark:text-gray-300 px-4 text-center text-sm">
              Communicate in multiple languages with seamless translation and natural conversation flow.
            </p>
          </div>
        </div>

        <a href="#" className="btn !mt-8 !bg-transparent !text-black !border !border-black dark:!border-white dark:!text-white">
          <span>Explore all features</span>
          <i className="bi bi-arrow-right duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

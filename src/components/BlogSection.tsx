import Image from "next/image";

export default function BlogSection() {
  const articles = [
    {
      title: "Latest AI tools",
      category: "Tools",
      date: "Dec, 15, 2024",
      image: "/images/home/article1.png"
    },
    {
      title: "Pixa Unveils new technology",
      category: "Announcement",
      date: "June, 22, 2024",
      image: "/images/home/article2.jpg"
    },
    {
      title: "Launching Pixa playground",
      category: "Announcement",
      date: "Apr, 27, 2024",
      image: "/images/home/article3.png"
    }
  ];

  return (
    <section className="mt-5 flex min-h-[80vh] w-full flex-col items-center justify-center p-[2%] max-lg:p-3">
      <h3 className="reveal-up text-4xl font-medium max-md:text-2xl">
        Read resources by experts ✨
      </h3>
      
      <div className="reveal-up mt-10 flex flex-wrap justify-center gap-10 max-lg:flex-col">
        {articles.map((article, index) => (
          <a
            key={index}
            href="#"
            className="flex h-[500px] w-[400px] flex-col gap-2 overflow-clip rounded-lg p-4 max-lg:w-[350px] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-[350px] min-h-[350px] w-full overflow-hidden rounded-2xl">
              <Image
                src={article.image}
                alt="article image"
                width={400}
                height={350}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.3]"
              />
            </div>

            <div className="text-gray-600 dark:text-gray-300 justify-between flex gap-2">
              <div className="text-gray-800 dark:text-gray-200">
                {article.category}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {article.date}
              </div>
            </div>
            
            <h3 className="mt-1 font-medium text-xl max-md:text-xl">
              {article.title}
            </h3>
          </a>
        ))}
      </div>

      <div className="mt-16 reveal-up">
        <a href="#" className="btn !rounded-full !p-4 font-medium">
          Launch Playground
        </a>
      </div>
    </section>
  );
}

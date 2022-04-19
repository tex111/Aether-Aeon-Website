import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  const pages = [{ title: "Alpha release" }, { title: "Patreon Launched" }];
  return (
    <>
      <Header pageName="Home" />
      <Navbar />
      <main>
        <section id="hero" className="bg-slate-800 pt-12">
          <div className="container mx-auto flex flex-col items-center py-12 md:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                Example Of A Website
                <br />
                <span className="text-indigo-700"> Hero </span>
                Section
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur posuere sapien vitae mi bibendum tempor. Vivamus
                blandit magna feugiat justo venenatis, sed vestibulum sapien
                vulputate.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
                Get Started
              </button>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Live Demo
              </button>
            </div>
          </div>
        </section>
        <section id="blog" className="bg-gray-100 dark:bg-slate-900 py-12">
          <div className="mx-auto container">
            <div
              tabIndex="0"
              aria-label="Group of cards"
              className="focus:outline-none mt-12 lg:mt-20"
            >
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div
                  tabIndex="0"
                  className="focus:outline-none"
                  aria-label="card 1"
                >
                  <img
                    role="img"
                    aria-label="code editor"
                    tabIndex="0"
                    className="focus:outline-none w-full"
                    src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                    alt="code editor"
                  />
                  <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Author
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      19TH APR, 2022
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider"
                    >
                      Article Title
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12"
                    >
                      Find the latest events updates or create events, concerts,
                      conferences, workshops, exhibitions, and cultural events
                      in all cities of the US. The aim of Eventistan is to
                      promote healthy and entertaining event.Find the latest
                      events updates or create events, concerts, conferences,
                      workshops, exhibitions, and cultural events in all cities
                      of the US. The aim of Eventistan is to promote healthy and
                      entertaining event.
                    </p>
                    <div className="w-full flex justify-end">
                      <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                        <span className=" text-base tracking-wide text-indigo-700">
                          Read more
                        </span>
                        <img
                          className="ml-3 lg:ml-6"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2-column-with-main-and-supporting-svg1.svg"
                          alt="arrow"
                        />
                      </button>
                    </div>
                    <div className="h-5 w-2"></div>
                  </div>
                </div>
                <div>
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div
                      tabIndex="0"
                      className="focus:outline-none "
                      aria-label="card 2"
                    >
                      <img
                        tabIndex="0"
                        role="img"
                        aria-label="gaming"
                        className="focus:outline-none w-full"
                        src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                        alt="games"
                      />
                      <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                        <p
                          tabIndex="0"
                          className="focus:outline-none  text-sm text-white font-semibold tracking-wide"
                        >
                          Author
                        </p>
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                        >
                          19TH APR, 2022
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                        <h1
                          tabIndex="0"
                          className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider"
                        >
                          Article Title
                        </h1>
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                        >
                          Find the latest events updates or create events,
                          concerts, conferences, workshops...
                        </p>
                      </div>
                    </div>
                    <div
                      tabIndex="0"
                      className="focus:outline-none"
                      aria-label="card 3"
                    >
                      <img
                        tabIndex="0"
                        role="img"
                        aria-label="gaming"
                        className="focus:outline-none focus:outline-none w-full"
                        src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                        alt="notes"
                      />
                      <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                        >
                          Author
                        </p>
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                        >
                          19TH APR, 2022
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                        <h1
                          tabIndex="0"
                          className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider"
                        >
                          Article Title
                        </h1>
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                        >
                          Find the latest events updates or create events,
                          concerts, conferences, workshops...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div
                      tabIndex="0"
                      className="focus:outline-none "
                      aria-label="card 4"
                    >
                      <img
                        tabIndex="0"
                        role="img"
                        aria-label="laptop"
                        className="focus:outline-none w-full"
                        src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                        alt="laptop"
                      />
                      <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                        >
                          Author
                        </p>
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                        >
                          19TH APR, 2022
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                        <h1
                          tabIndex="0"
                          className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider"
                        >
                          Article Title
                        </h1>
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                        >
                          Find the latest events updates or create events,
                          concerts, conferences, workshops...
                        </p>
                      </div>
                    </div>
                    <div
                      tabIndex="0"
                      className="focus:outline-none"
                      aria-label="card 5"
                    >
                      <img
                        tabIndex="0"
                        role="img"
                        aria-label="worker"
                        className="focus:outline-none w-full"
                        src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                        alt="worker"
                      />
                      <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                        >
                          Author
                        </p>
                        <p
                          tabIndex="0"
                          className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                        >
                          19TH APR, 2022
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                        <h1
                          tabIndex="0"
                          className="focus:outline-none  text-lg text-gray-900 dark:text-white font-semibold tracking-wider"
                        >
                          Article Title
                        </h1>
                        <p
                          tabIndex="0"
                          className="focus:outline-none  text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                        >
                          Find the latest events updates or create events,
                          concerts, conferences, workshops...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

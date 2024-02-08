import { useEffect, useRef, useState } from "react";
import "./App.css";

const myprods = [
  {
    title: "Sanchay.ai",
    url: "https://sanchay.ai",
  },
  {
    title: "MahaDev GPT",
    url: "https://youtu.be/o-uOSFk0ne4?si=kaLe75o-Uq_568UI",
  },
  {
    title: "Smart Gardening IoT",
    url: "https://youtu.be/fq2ZHWaMGNo?si=cri-lCsed7JpCEHJ",
  },
];

const projects = [
  {
    title: "Swiggy Spinoff",
    url: "https://swiggyspinoff.netlify.app/",
  },
  {
    title: "Youtube Spinoff",
    url: "https://youtubespinoff.netlify.app/",
  },
  {
    title: "Netlflix Spinoff",
    url: "https://cinemacentral.netlify.app/",
  },
  {
    title: "PayTM",
    url: "https://paytumkaro.netlify.app/",
  },
  {
    title: "Zerodha Landing page",
    url: "https://aadeshkulkarni.github.io/100x-01-zerodha-warmup/",
  },
  {
    title: "Dwellfox - ThreeJs",
    url: "https://aadeshkulkarni.github.io/dwellfox-wip/",
  },
];

const miniProjects = [
  {
    title: "Whack a mole",
    url: "https://whackit-aadesh.netlify.app/",
  },
  {
    title: "Fortune Teller",
    url: "https://aadeshkulkarni.github.io/fortune-teller/",
  },
  {
    title: "New Year countdown",
    url: "https://aadeshkulkarni.github.io/New-Year-Countdown/",
  },
  {
    title: "Memory Cards",
    url: "https://aadeshkulkarni.github.io/Memory-Cards/",
  },
  {
    title: "Lyrics Search",
    url: "https://aadeshkulkarni.github.io/Lyrics-Search/",
  },
  {
    title: "Sadhana",
    url: "https://aadeshkulkarni.github.io/sadhana/",
  },
  {
    title: "Hangman",
    url: "https://aadeshkulkarni.github.io/Hangman/",
  },
  {
    title: "Speed Typer",
    url: "https://aadeshkulkarni.github.io/Speed-Typer/",
  },
];

function App() {
  const [showSplashscreen, setShowSplash] = useState(true);

  if (showSplashscreen) return <Splash setShowSplash={setShowSplash} />;
  return (
    <div className="min-w-full w-screen h-full min-h-screen flex flex-col md:gap-8 justify-center items-center py-8 md:py-16 bg-gradient-to-tl from-cyan-500 to-teal-500 text-white">
      <ProfileCard />
      <Products title="Tech Products" products={myprods} />
      <Products title="Passion Projects" products={projects} />
      <Products title="Mini Projects" products={miniProjects} />
    </div>
  );
}
function Splash({ setShowSplash }) {
  const [muted, setMuted] = useState(true);
  const [enter, setEnter] = useState(false);
  const [playing, isPlaying] = useState(true);
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    if (playing) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    isPlaying(!playing);
  };

  useEffect(() => {
    setTimeout(() => {
      setEnter(true);
    }, 6000);
  }, []);
  return (
    <div className="relative m-0 p-0 flex justify-center items-center py-8 w-screen h-screen">
      {enter ? (
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl p-2 z-50 tracking-widest">
            Aadesh's Portfolio
          </h1>
          <button
            className="hover:animate-pulse px-4 py-3 border border-gray-400 z-50 text-white tracking-widest text-3xl uppercase bg-white bg-opacity-10"
            onClick={() => setShowSplash(false)}
          >
            Enter
          </button>
        </div>
      ) : (
        <button
          className=" px-4 py-3 border border-gray-400 z-50 text-white flex justify-center items-center gap-4 tracking-widest uppercase bg-black bg-opacity-20"
          onClick={() => setMuted(!muted)}
        >
         Music <img
            className="w-8 h-8 rounded-full"
            src={muted ? "./mute.svg" : "./unmute.svg" }
            alt="mute"
          />
        </button>
      )}

      {enter && (
        <button
          className="absolute bottom-4 left-4 p-2 border border-gray-400 z-50 text-white tracking-widest uppercase rounded-full bg-white bg-opacity-20"
          onClick={() => setMuted(!muted)}
        >
          <img
            className="w-8 h-8 rounded-full"
            src={muted ? "./mute.svg" : "./unmute.svg" }
            alt="mute"
          />
        </button>
      )}
      <button
        className="absolute bottom-4 right-4 px-4 py-3 border border-gray-400 z-50 text-white tracking-widest uppercase bg-white bg-opacity-20"
        onClick={() => handlePlayVideo()}
      >
        {playing ? "Pause" : "Play"}
      </button>
      <video
        ref={vidRef}
        autoPlay
        playsInline
        muted={muted}
        src={"./videos/splash.mp4"}
        className="fixed left-0 top-0 w-full h-full min-h-full min-w-full aspect-video object-cover md:object-fill"
      >
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="w-full md:w-1/2 p-4 md:border grid grid-cols-12 items-center gap-4 ">
      <div className="w-full flex justify-center col-span-12 items-center md:col-span-4">
        <img
          className="rounded-full border-2 m-4 md:m-8 w-[240px]"
          src="./aadesh-kulkarni.jpg"
          alt="aadesh kulkarni"
        />
      </div>
      <div className="w-full col-span-12 md:col-span-8 flex flex-col justify-center items-center md:items-start">
        <div className="text-4xl md:text-6xl font-bold">Aadesh Kulkarni</div>
        <div className="p-2 text-md md:text-lg font-light text-gray-100">
          Web Engineer | Frontend | Backend | Generative AI
        </div>
        <div className="w-full flex flex-wrap gap-4 p-4 flex-col md:flex-row justify-center items-center md:justify-start text-lg md:text-md tracking-wide uppercase font-semibold">
          <a
            className="w-full md:w-auto text-center px-4 py-3 md:py-2  border border-white hover:animate-pulse"
            href="https://www.linkedin.com/in/aadeshkulkarni/"
          >
            LinkedIn
          </a>
          <a
            className="w-full md:w-auto text-center px-4 py-3 md:py-2 border border-white hover:animate-pulse"
            href="https://www.youtube.com/@AadeshKulkarni"
          >
            Youtube
          </a>
          <a
            className="w-full md:w-auto text-center px-2 py-3 md:py-2 border border-white  hover:animate-pulse"
            href="https://stackoverflow.com/users/8389274/aadesh"
          >
            Stackoverflow
          </a>
          <a
            className="w-full md:w-auto text-center px-4 py-3 md:py-2 border border-white hover:animate-pulse"
            href="https://github.com/aadeshkulkarni"
          >
            Github
          </a>
          <a
            className="w-full md:w-auto text-center px-4 py-3 md:py-2 border border-white hover:animate-pulse"
            href="https://www.instagram.com/aadeshkulkarni/"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

function Products({ title, products }) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full md:w-1/2 p-4 border-t md:border border-gray-200 flex flex-col justify-center gap-4 ">
      <div
        className="py-4 px-4 text-2xl font-bold tracking-wide flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {title} <button>↡</button>
      </div>
      {show && (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          {products &&
            products.map((product) => (
              <div className="w-full p-4 flex justify-between items-center bg-white bg-opacity-20 ">
                <div className="tracking-wide font-normal text-xl">{product.title}</div>
                <a className="p-2 border border-white hover:animate-pulse" href={product.url}>
                  Visit app
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;

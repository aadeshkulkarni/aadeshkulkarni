import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaStackOverflow, FaYoutube } from "react-icons/fa6";
import "./App.css";

const myprods = [
  {
    title: "Figuringout.life",
    url: "https://figuringout.life",
  },
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
  const [showSplashscreen, setShowSplash] = useState(false);
  if (showSplashscreen) return <Splash setShowSplash={setShowSplash} />;
  return (
    <div className="min-w-full w-screen h-full min-h-screen flex flex-col md:gap-8 justify-center items-center py-8 md:py-16 bg-gradient-to-tr from-sky-900 to-sky-800 text-white md:bg-black md:bg-gradient-to-r md:from-slate-800 md:to-slate-900">
      <ProfileCard />
      <Products title="Tech Products" products={myprods} />
      <Products title="Passion Projects" products={projects} />
      <Products title="Mini Projects" products={miniProjects} />
    </div>
  );
}
function Splash({ setShowSplash }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, isPlaying] = useState(false);
  const vidRef = useRef(null);
  const btnRef = useRef(null);

  const handlePlayVideo = () => {
    if (playing) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    isPlaying(!playing);
  };
  useEffect(() => {
    const btn = document.getElementById("btnEnter");
    if (videoLoaded && btn) {
      btn.focus();
    }
  }, [videoLoaded]);

  return (
    <div className="relative m-0 p-0 flex justify-center items-center py-8 w-screen h-screen">
      {videoLoaded && (
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            id="btnEnter"
            tabIndex={0}
            className="focus:outline-none hover:animate-pulse px-4 py-3 border border-gray-700 z-50 text-white tracking-widest text-3xl uppercase bg-black bg-opacity-50"
            onClick={(e) => {
              setShowSplash(false);
            }}
          >
            Enter
          </button>
        </div>
      )}

      {videoLoaded && (
        <button
          className="absolute bottom-4 animate-pulse left-4 p-2 border border-gray-400 z-50 tracking-widest uppercase rounded-full bg-black bg-opacity-20"
          onClick={() => setMuted(!muted)}
        >
          <img
            className="w-8 h-8 rounded-full"
            src={muted ? "./mute.svg" : "./unmute.svg"}
            alt="mute"
          />
        </button>
      )}
      <button
        className="absolute bottom-4 right-4 px-4 py-3 border border-gray-400 z-50 text-white tracking-widest uppercase bg-black bg-opacity-20"
        onClick={() => handlePlayVideo()}
      >
        {playing ? "Pause" : "Play"}
      </button>
      <video
        ref={vidRef}
        autoPlay
        playsInline
        onLoadedData={() => {
          setVideoLoaded(true);
          isPlaying(true);
          handlePlayVideo();
        }}
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
    <div className="drop-shadow-sm w-full md:rounded-full md:w-2/3 p-4 px-8 grid grid-cols-12 items-center gap-4 md:bg-gradient-to-r md:from-sky-800 md:to-sky-700 md:shadow-lg md:shadow-gray-800  text-white">
      <div className="w-full flex justify-center col-span-12 items-center md:col-span-4">
        <img
          className="rounded-full border-2 m-4 md:m-8 w-[240px]"
          fetchpriority="high"
          src="./aadesh-kulkarni.jpg"
          alt="aadesh kulkarni"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "./aadesh-kulkarni.jpg";
          }}
        />
      </div>
      <div className="w-full col-span-12 md:col-span-8 flex flex-col justify-center items-center md:items-start">
        <div className="text-4xl md:text-5xl tracking-wide font-bold drop-shadow-lg">
          Aadesh Kulkarni
        </div>
        <div className="p-2 text-xs md:text-lg font-light  text-gray-100 text-center md:text-left">
          Web Engineering | Frontend | Backend | Generative AI
        </div>
        <div className="w-full flex gap-8 p-4 md:pr-16 justify-start items-center text-lg md:text-md tracking-wider">
          <a href="https://www.linkedin.com/in/aadeshkulkarni/" className="hover:animate-pulse">
            <FaLinkedin size={"32px"} />
          </a>
          <a href="https://www.youtube.com/@AadeshKulkarni" className="hover:animate-pulse">
            <FaYoutube size={"32px"} />
          </a>
          <a href="https://github.com/aadeshkulkarni" className="hover:animate-pulse">
            <FaGithub size={"32px"} />
          </a>
          <a href="https://www.instagram.com/aadeshkulkarni/" className="hover:animate-pulse">
            <FaInstagram size={"32px"} />
          </a>
          <a href="https://stackoverflow.com/users/8389274/aadesh" className="hover:animate-pulse">
            <FaStackOverflow size={"32px"} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Products({ title, products }) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full md:w-2/3 p-4 border-sky-600 md:rounded-lg flex flex-col justify-center  gap-4 md:bg-gradient-to-r md:from-sky-800 md:to-sky-700 text-white md:shadow-lg md:shadow-gray-800 md:bg-opacity-50">
      <div
        className="p-4 text-2xl font-bold tracking-wide flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {title} <button>↡</button>
      </div>
      {show && (
        <div className="flex flex-col justify-center items-center w-full">
          {products &&
            products.map((product) => (
              <div className="w-full p-4 pt-6 pb-2 flex justify-between items-center shadow-b-lg border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-900 text-gray-300">
                <a href={product.url} className="flex justify-between items-center w-full">
                  <div className="font-normal text-lg tracking-wider">{product.title}</div>
                  <div className="p-2 text-lg hover:animate-pulse">→</div>
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;

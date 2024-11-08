import { Github, Instagram, Layers, Linkedin, Youtube } from "lucide-react";
import Projects from "./components/Projects";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex justify-center w-screen h-screen md:p-4">
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 -top-50 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 opacity-20 blur-[100px]"></div>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0 }}
        src="/logo.svg"
        className="w-12 top-4 md:w-24 absolute md:top-8 md:left-8"
      />
      <div className="flex flex-col gap-8 py-20 px-4 max-w-[680px]">
        <Card className="rounded-3xl bg-opacity-50">
          <CardHeader>Hello, I am Aadesh</CardHeader>
          <CardContent className="text-gray-300">
            <p className="mb-4">
              I’m a passionate Full-stack Engineer with a love for building MVPs and prototypes. I
              thrive in creating user-friendly front-end experiences while being deeply curious
              about backend architecture. A strong advocate for open-source, I actively contribute
              to and maintain projects that drive innovation and collaboration.
            </p>
            <p>
              Currently working independently as a contract engineer, I specialize in the JavaScript
              ecosystem, crafting scalable solutions and empowering teams to bring their ideas to
              life.
            </p>
          </CardContent>
          <CardFooter className="p-4 md:px-20 flex w-full justify-between items-center border-t">
            <a href="https://www.linkedin.com/in/aadeshkulkarni/" className="w-fit h-fit">
              <Linkedin className="fill-primary border p-2 w-10 h-10 rounded-full" />
            </a>
            <a href="https://github.com/aadeshkulkarni">
              <Github className="border p-2 w-10 h-10 rounded-full" />
            </a>
            <a href="https://www.youtube.com/@AadeshKulkarni">
              <Youtube className="border p-2 w-10 h-10 rounded-full" />
            </a>
            <a href="https://www.instagram.com/aadeshkulkarni/">
              <Instagram className="border p-2 w-10 h-10 rounded-full" />
            </a>
            <a href="https://stackoverflow.com/users/8389274/aadesh-kulkarni">
              <Layers className="border p-2 w-10 h-10 rounded-full" />
            </a>
          </CardFooter>
        </Card>
        <Projects />
      </div>
    </div>
  );
}

export default App;

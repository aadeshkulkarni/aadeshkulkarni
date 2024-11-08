import { Github, Instagram, Layers, Linkedin, Youtube } from "lucide-react";
import Projects from "./components/Projects";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";

function App() {
  return (
    <div className="flex justify-center w-screen h-screen md:p-4">
      <img src="/logo.svg" className="w-12 top-4 md:w-24 absolute md:top-8 md:left-8"/>
      <div className="flex flex-col gap-4 pt-20 px-4 max-w-[680px]">
        <Card className="rounded-none md:rounded">
          <CardHeader>Hello, I am Aadesh</CardHeader>
          <CardContent>
            <p className="mb-4">
              I love building MVPs and Prototyping. I contribute and maintain open-source projects.
              A jack of all, master at none. Good at building user-friendly frontend applications
              and a curiously passionate backend engineer.
            </p>
            <p>
              Working as an Independent Full-stack Engineer on contract, specialising in the
              Javascript ecosystem.
            </p>
          </CardContent>
          <CardFooter className="p-8 md:px-20 flex w-full justify-between items-center border-t">
            <a href="https://www.linkedin.com/in/aadeshkulkarni/"><Linkedin className="fill-primary"/></a>
            <a href="https://github.com/aadeshkulkarni"><Github /></a>
            <a href="https://www.youtube.com/@AadeshKulkarni"><Youtube /></a>
            <a href="https://www.instagram.com/aadeshkulkarni/"><Instagram /></a> 
            <a href="https://stackoverflow.com/users/8389274/aadesh-kulkarni"><Layers /></a>

          </CardFooter>
        </Card>
        <Projects />
      </div>
    </div>
  );
}

export default App;

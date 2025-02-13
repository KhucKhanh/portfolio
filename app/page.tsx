import Nav from "@/components/page/nav";
import IndexPage from "@/components/page/indexpage";
import About from "@/components/page/about";

export default function Home() {
  return (
    <div className="flex  ">
      <div className="w-1/5">
      <Nav />
      </div>
      <div className="w-4/5 text-white flex justify-center items-center">
        <IndexPage />
        <About />
      </div>
      
    </div>
  
  );
}

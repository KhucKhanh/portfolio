import Nav from "@/components/page/nav";
import IndexPage from "@/components/page/indexpage";
import About from "@/components/page/about";

export default function Home() {
  return (
    <div className="flex z-20 ">

      <div className="w-1/5 hidden md:block">
        <Nav />
      </div>
      <div className="w-full md:w-4/5 flex flex-col  relative ">

      <div className="absolute inset-0 bg-slate-400 -z-10"></div>

        <div className="flex justify-center items-center flex-grow">
          <IndexPage />
        </div>
        <div className="flex-grow">
          <About />
        </div>
        <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      </div>
    </div>
  );
}

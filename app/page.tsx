import Nav from "@/components/page/nav";
import IndexPage from "@/components/page/indexpage";
import About from "@/components/page/about";
import Skill from "@/components/page/skill";

export default function Home() {
  return (
    <div className="relative ">
      {/* Nav được thêm vào từ component Nav */}
      <Nav />
      
      {/* Main content - giảm z-index để luôn nằm dưới nav */}
      <main className="relative z-0 md:ml-[20%] ">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-400 -z-10"></div>
        
        {/* Content sections với id khớp với nav */}
        <section id="home" className="relative z-0 flex justify-center items-center flex-grow min-h-screen ">
          <IndexPage />
        </section>
        
        <section id="about" className="relative z-0 flex-grow ">
          <About />
        </section>

        <section id="skill" className="relative z-0 flex-grow ">
          <Skill />
        </section>

        <section id="project" className="relative z-0 flex-grow ">
          <h2>Projects Section</h2>
        </section>

        <section id="contact" className="relative z-0 flex-grow ">
          <h2>Contact Section</h2>
        </section>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </main>
    </div>
  );
}

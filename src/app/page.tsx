import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Courses from "@/components/courses";
import Articles from "@/components/articles";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        {/* <Articles /> */}
      </main>
      <Footer />
    </>
  );
}

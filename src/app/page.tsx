
import CallToAction from "@/components/LandingPage/CallToAction";
import FAQ from "@/components/LandingPage/FAQ";
import Feature from "@/components/LandingPage/Feature";
import Footer from "@/components/LandingPage/Footer";
import Growth from "@/components/LandingPage/Growth";
import Header from "@/components/LandingPage/Header"
import HeroHeader from "@/components/LandingPage/HeroSection";
import HowItWork from "@/components/LandingPage/Howitwork";
import Price from "@/components/LandingPage/Price";
import Testimonials from "@/components/LandingPage/Testimonials";
import Track from "@/components/LandingPage/Track";

const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <HeroHeader />
      </div>
      <div className="bg-white">
        <Growth/>
        <Track/>
        <HowItWork/>
        <Feature/>
        <Price/>
        <Testimonials/>
        <FAQ/>
        <CallToAction />
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
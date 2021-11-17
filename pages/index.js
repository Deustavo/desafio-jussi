import HeroBanner from "../components/pages/home/heroBanner";
import LogoBar from "../components/pages/home/logoBar";
import OurSolutions from "../components/pages/home/ourSolutions";
import JussiSession from "../components/pages/home/jussiSession";
import ContactInfo from "../components/pages/home/contactInfo";
import NewLetter from "../components/pages/home/newLetter";

export default function Home() {
  return <>
    <section className="app">
      <HeroBanner />
      <LogoBar />
      <OurSolutions />
      <JussiSession />
      <ContactInfo />
      <NewLetter />
    </section>
  </>;
}

import HeroBanner from "../components/homePage/heroBanner";
import LogoBar from "../components/homePage/logoBar";
import OurSolutions from "../components/homePage/ourSolutions";
import JussiSession from "../components/homePage/jussiSession";
import ContactInfo from "../components/homePage/contactInfo";
import NewLetter from "../components/homePage/newLetter";

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

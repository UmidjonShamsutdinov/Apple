import "./page.scss"
import Hero from "./components/hero/Hero";
import HiWatch from "./components/hi-watch-section/HiWatch";
import Iphone15 from "./components/iphone-15-pro-section/Iphone15";
import Nav from "./layout/nav/Nav";
import { Container } from "./utils/Utils";
import Section3First from "./components/first-3-section/Section3First";
import Section3Second from "./components/second-3-section/Section3Second";
import Section4First from "./components/first-4-section/Section4First";
import Section4Second from "./components/second-4-section/Section4Second";
import Section5First from "./components/first-5-section/Section5First";
import Section5Second from "./components/second-5-section/Section5Second";


export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <HiWatch/>
      <Iphone15/>
      <div className="section3">
        <Section3First/>
        <Section3Second/>
      </div>
      <div className="section4">
        <Section4First/>
        <Section4Second/>
      </div>
      <div className="section5">
        <Section5First/>
        <Section5Second/>
      </div>
    </div>
  )
}

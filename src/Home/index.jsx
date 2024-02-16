import Navbar from '../components/Navbar'
import HeroSection from './Section/Hero section'
import HubSection from './Section/Hub section'
import Offering from './Section/Offering'
import Placement from './Section/Placement'
import Program from './Section/Programs'
import Appointment from './Section/appointment'
import MentorShip from './Section/Mentor ship'
import GoodByeSection from './Section/GoodBye section'
import Faculty from './Section/Faculty'
import Location from './Section/Location section'
import ContactUs from './Section/contact us section'
import Faq from './Section/faq section'
import StickyInformation from '../components/StickyInformation'
import { useEffect, useState } from 'react'


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HubSection />
        <Program />
        <Appointment />
        <Placement />
        <Offering />
        <GoodByeSection />
        <MentorShip/>
        <Faculty />
        <Location />
        <ContactUs />
        <Faq />
        {isScrolled && 
        <StickyInformation />
        
        }
    </div>
  )
}

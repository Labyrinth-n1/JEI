import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import gsap from "gsap";
import './css/Hero.css'

const Hero = () => {

  useEffect(() => {
    // Animation au chargement de la page
    const icons = document.querySelectorAll(".icon");
    
    gsap.fromTo(
      icons,
      { rotation: -360, x: -100, opacity: 0 },  // Position initiale
      {
        rotation: 360, 
        x: 0, 
        opacity: 1, 
        duration: 2, 
        stagger: 0.3, 
        ease: "back.out(2)"
      }
    );

    // Animation lors du scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      icons.forEach(icon => {
        gsap.to(icon, {
          rotation: scrollY > 100 ? 360 : 0, 
          y: scrollY > 100 ? 100 : 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
          style={{backgroundColor: ' #ffecd5'}}
          className="hero min-h-screen flex items-center justify-center relative overflow-hidden bg-white" id="accueil">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 
              style={{
                marginTop:'80px',
                fontSize:'40px'
              }}
              id="animated-title" 
              className="title">
              <span className="gradient">Journée de </span>
              <span className="gradient">l'Étudiant en Informatique 🎊</span>
          </h1>

          <div
            style={{marginTop: '30px'}} 
            className="flex flex-col sm:flex-row justify-center gap-4  ">

            <a href="#programme">
            <Button 
                  size="lg" 
                  className="gap-2 text-lg h-14 px-8"
                  style={{
                    backgroundColor: "#df8517", 
                    fontFamily:"Montserrat",
                    borderRadius: '40px', 
                    fontSize: '15px'
                  }}
                >
                  <Calendar className="w-5 h-5 icon" />
                  Voir le Programme
            </Button> </a>

            <a href="#inscription">
            <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 text-lg h-14 px-8"
                  style={{
                    fontFamily:"Montserrat",
                    borderRadius: '40px', 
                    fontSize: '15px',
                    border: '.5px solid #0e885a'
                  }}
            >
              <Users className="w-5 h-5 icon" />
              S'inscrire
            </Button>
            </a>
          </div>

          <div 
              style={{marginTop:'40px'}}
              className="flex justify-center gap-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>26-28 Février 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>400+ Participants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

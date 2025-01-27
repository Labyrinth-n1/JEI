import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import gsap from "gsap";
import './css/Hero.css'

const Hero = () => {

  
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
                fontSize:'40px',
                padding:'.5rem',
                position: 'relative',
                bottom:'-20px'

              }}
              id="animated-title" 
              className="title">
              <span className="gradient">Journée de </span>
              <span className="gradient">l'Étudiant en Informatique </span>
          </h1>

          <div
            style={{position:'relative', bottom:'-10px'}} 
            className="flex flex-col sm:flex-row justify-center gap-4  ">

            <a href="#programme">
            <Button 
                  size="lg" 
                  className="gap-2 text-lg h-14 px-8"
                  style={{
                    backgroundColor: "#0e885a", 
                    fontFamily:"Montserrat",
                    borderRadius: '40px', 
                    fontSize: '15px',
                    boxShadow:'0 2px 5px rgba(0,0,0,0.5)'
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
                    border: '.5px solid #0e885a',
                    boxShadow:'0 2px 5px rgba(0,0,0,0.5)'
                  }}
            >
              <Users className="w-5 h-5 icon" />
              S'inscrire
            </Button>
            </a>
          </div>

          <div 
              style={{marginTop:'50px'}}
              className="flex justify-center gap-12 text-sm text-black-500">
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

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Users, Music, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import "./css/About.css";

import aesth1 from '../assets/images/aesth.jpg';
import aesth2 from '../assets/images/aesth2.jpg';
import hackaton from '../assets/images/hackaton.png';
import basket from '../assets/images/basket.png';
import concert from '../assets/images/concert.png';
import caravane from '../assets/images/caravane.png'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const features = [
    {
      icon: Code,
      title: "Hackathon",
      description: "Développez vos compétences techniques",
      color: "#0e885a",
      icolor: " #fc7f07",
      bg: aesth1,
      img: hackaton,
    },
    {
      icon: Users,
      title: "Activités sportives",
      description: "Football et basketball inter-filières",
      color: " #fc7f07",
      icolor: "#0e885a",
      bg: aesth2,
      img: basket,
    },
    {
      icon: Music,
      title: "Mini-concerts",
      description: "Animations et prestations musicales",
      color: "#0e885a",
      icolor: "#fc7f07",
      bg: aesth1,
      img: concert,
    },
    {
      icon: MapPin,
      title: "Excursion",
      description: "Journée détente à Casa del Papa",
      color: " #fc7f07",
      icolor: " #0e885a",
      bg: aesth2,
      img: caravane,
    },
  ];

  useEffect(() => {
    // Animation pour les cartes
    const cards = sectionRef.current.querySelectorAll(".card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 }, // Départ : invisible, glissant depuis le bas
      {
        opacity: 1,
        y: 0, // Arrivée : visible, position normale
        duration: 0.7,
        stagger: 0.3, // Apparition séquentielle
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // Animation pour le titre (lettres une à une)
    const letters = titleRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.05, // Animation lettre par lettre
        ease: "bounce.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-gray-50" id="about" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Alors ....
          </span>
          <h2
            ref={titleRef}
            style={{
              fontFamily: "Montserrat",
              marginTop: "30px",
              color: "#0e885a",
            }}
            className="text-4xl font-bold mt-2 mb-4"
          >
            {Array.from("Qu'est-ce que la JEI 🤔?").map((char, index) => (
              <span
                key={index}
                className="letter inline-block"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <p
            style={{ padding: "1.3rem" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Juste... Un événement magique, extra, annuel où étudiants, experts
            et passionnés de technologie se rassemblent pour{" "}
            apprendre, créer et se détendre !!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              style={{
                backgroundImage: `url(${feature.bg})`,
                backgroundSize: 'cover',
                fontFamily: "Montserrat",
                cursor: "pointer",
                boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
                border: "none",
              }}
              key={index}
              className="card p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex h-100 w-100 items-center justify-center ">
                <img src={feature.img} alt="" />
              </div>
              <h3
                style={{
                  fontFamily: "Montserrat",
                  position:'relative',
                  top:'-30px',
                }}
                className="text-xl font-semibold mb-3"
              >
                {feature.title}
              </h3>
              <p
                  style={{
                    position:'relative',
                    top:'-50px',
                    padding:'1rem'
                  }}
                  className="text-gray-800 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

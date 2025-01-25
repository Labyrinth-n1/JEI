import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone } from "lucide-react";
import './css/RegisterForm.css';

const RegisterForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("concert"); // Valeur par défaut : "concert"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Inscription réussie !",
      description: `Vous avez choisi l'option : ${
        option === "all" ? "Je veux tout payer" : "Je veux juste venir au concert"
      }. Vous recevrez un email de confirmation.`,
    });
    
    setLoading(false);
  };

  return (
    <section className="py-24 bg-gray-50" id="inscription">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Inscription</span>
          <h2
            style={{ fontFamily: 'Montserrat', color: "#ff8c00" }} 
            className="text-4xl font-bold mt-2 mb-4"
          >
            Rejoignez l'aventure ✈️✨!!
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Réservez votre place pour trois jours d'innovation et de festivités
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card 
            style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}
            className="p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="inputGroup space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" className="h-12" required />
              </div>
              
              <div className="inputGroup space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="h-12" required />
              </div>
              
              <div className="inputGroup space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" className="h-12" required />
              </div>
              
              <div className="inputGroup space-y-4">
                <p className="font-medium">Options d'inscription</p>
                <div className="grid gap-4">
                  <Button
                    type="button"
                    variant={option === "all" ? "default" : "outline"}
                    className={`h-12 w-full ${
                      option === "all" ? "bg-primary text-white" : "hover:border-primary hover:text-primary"
                    }`}
                    onClick={() => setOption("all")}
                  >
                    Je veux tout payer : Concert + Excursion (7500 FCFA)
                  </Button>
                  <Button
                    type="button"
                    variant={option === "concert" ? "default" : "outline"}
                    className={`h-12 w-full ${
                      option === "concert" ? "bg-primary text-white" : "hover:border-primary hover:text-primary"
                    }`}
                    onClick={() => setOption("concert")}
                  >
                    Je veux juste venir au concert (2500 FCFA)
                  </Button>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="font-medium mb-4">Modes de paiement</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary hover:text-primary">
                    <Smartphone className="h-8 w-8" />
                    <span>Mobile Money</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary hover:text-primary">
                    <CreditCard className="h-8 w-8" />
                    <span>Carte bancaire</span>
                  </Button>
                </div>
              </div>
              
              <Button 
                  style={{fontFamily:'Montserrat'}}
                  type="submit" 
                  className="w-full h-12 text-lg" 
                  disabled={loading}>
                  {loading
                    ? "Inscription en cours..."
                    : `S'inscrire (${option === "all" ? "7500" : "2500"} FCFA)`}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;

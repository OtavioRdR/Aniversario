import React, { useState, useEffect } from 'react';
import { MapPin, Wine, Clock, PartyPopper, Calendar, Navigation, Utensils, Camera, Heart, Mail, Phone, User } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Confetti from './components/Confetti';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2024-04-26T16:00:00-03:00').getTime(); // Convertendo para timestamp
      const now = new Date().getTime(); // Convertendo para timestamp
      const difference: number = eventDate - now; // Definindo explicitamente como number
  
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
  
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleGetDirections = () => {
    const address = "Estrada do Capanema, Rua do Servidão, 13, Araçoiaba da Serra, SP";
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-600 text-white relative overflow-hidden">
      <Confetti />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-12">
            <div className="relative">
              <PartyPopper className="w-20 h-20 mx-auto mb-4 text-yellow-300 animate-bounce" />
              <div className="absolute top-0 right-1/4 -rotate-12">
                <PartyPopper className="w-12 h-12 text-pink-400" />
              </div>
              <div className="absolute top-0 left-1/4 rotate-12">
                <PartyPopper className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
              Tio Bada faz 50 Anos!
            </h1>
            <p className="text-2xl mb-2">Uma celebração mais que especial!</p>
            <p className="text-xl text-yellow-200">Venha fazer parte desse momento único!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <div className="bg-purple-900/30 p-6 rounded-xl border border-white/10 hover:bg-purple-900/40 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <Calendar className="w-8 h-8 text-yellow-300" />
                  <div>
                    <h2 className="text-2xl font-semibold">Quando</h2>
                    <p className="text-lg">26 e 27 de Abril de 2025</p>
                    <p className="text-lg">A partir das 18:00</p>
                  </div>
                </div>
                <div className="pl-12 text-yellow-200">
                  <p>• Sábado: Início da celebração em família</p>
                  <p>• Domingo: Continuação da celebração</p>
                </div>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-xl border border-white/10 hover:bg-purple-900/40 transition-all">
  <div className="flex items-center space-x-4 mb-4">
    <MapPin className="w-8 h-8 text-yellow-300" />
    <div>
      <h2 className="text-2xl font-semibold">Localização</h2>
      <p className="text-lg">Estrada do Capanema</p>
      <p className="text-lg">Rua do Servidão, Nº 13</p>
      <p className="text-lg">Araçoiaba da Serra, SP</p>
    </div>
  </div>
  <button 
  onClick={() => window.open("https://www.google.com/maps/@-23.5263716,-47.7126949,3a,75y,99.23h,85.13t/data=!3m7!1e1!3m5!1sZziiqGxk2ixUDbOS-dh-YA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D4.86994214560076%26panoid%3DZziiqGxk2ixUDbOS-dh-YA%26yaw%3D99.23229907995524!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D", "_blank")}
  className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg border border-yellow-500 mt-4"
>
  <Navigation className="w-5 h-5" />
  <span>Ver no Google Maps</span>
</button>
</div>
            </div>

            <div className="space-y-8">
              <div className="bg-purple-900/30 p-6 rounded-xl border border-white/10 hover:bg-purple-900/40 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <Heart className="w-8 h-8 text-yellow-300" />
                  <div>
                    <h2 className="text-2xl font-semibold">O Que Esperar</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-yellow-300" />
                    <span>Família Reunida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-yellow-300" />
                    <span>Churrasco</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-yellow-300" />
                    <span>Fotos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wine className="w-5 h-5 text-yellow-300" />
                    <span>Bebidas</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-xl border border-white/10 hover:bg-purple-900/40 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <Wine className="w-8 h-8 text-yellow-300" />
                  <div>
                    <h2 className="text-2xl font-semibold">O Que Levar</h2>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Sua bebida favorita para compartilhar</li>
                  <li>Muita disposição para festejar</li>
                  <li>Seu melhor sorriso</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
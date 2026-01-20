import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pastorVinho from "@/assets/pastor-vinho.jpg";
import pastorAzul from "@/assets/pastor-azul.jpg";
import oracaoGrupo from "@/assets/oracao-grupo.jpg";
import adoracaoJovem from "@/assets/adoracao-jovem.jpg";
import louvorGeral from "@/assets/louvor-geral.jpg";
import adoracaoMaos from "@/assets/adoracao-maos.jpg";

const images = [
  { src: pastorVinho, alt: "Pastor pregando" },
  { src: pastorAzul, alt: "Culto na igreja" },
  { src: oracaoGrupo, alt: "Momento de oração" },
  { src: adoracaoJovem, alt: "Adoração comunitária" },
  { src: louvorGeral, alt: "Louvor e adoração" },
  { src: adoracaoMaos, alt: "Comunidade em adoração" },
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Carousel indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gold w-6"
                : "bg-cream/50 hover:bg-cream/80"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

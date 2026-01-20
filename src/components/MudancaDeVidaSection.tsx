import { motion } from "framer-motion";
import { Flame, Sparkles, Heart, Clock } from "lucide-react";
import oracaoFila from "@/assets/oracao-fila.jpg";
import adoracao1 from "@/assets/adoracao-1.jpg";
import foto1 from "@/assets/foto1.jpg";

const highlights = [
  { icon: Clock, text: "3 dias de imersão" },
  { icon: Flame, text: "Libertações" },
  { icon: Heart, text: "Curas" },
  { icon: Sparkles, text: "Milagres" },
];

export const MudancaDeVidaSection = () => {
  return (
    <section id="mudanca" className="py-20 md:py-32 bg-gradient-to-b from-secondary to-navy-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold font-medium rounded-full text-sm mb-6">
            Projeto Especial
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Mudança de <span className="text-gradient-gold">Vida</span>
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Uma experiência transformadora de 3 dias de imersão no poder de Deus, 
            onde acontecem libertações, curas e milagres.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-2 px-6 py-3 bg-cream/10 backdrop-blur-sm rounded-full border border-gold/30"
            >
              <item.icon className="w-5 h-5 text-gold" />
              <span className="text-cream font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[oracaoFila, adoracao1, foto1].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt={`Mudança de Vida ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-12 h-1 bg-gradient-gold rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/igrejacanadeouro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-navy-deep font-semibold rounded-full shadow-gold hover:shadow-lg transition-all hover:scale-105"
          >
            <Flame className="w-5 h-5" />
            Saiba mais sobre o Mudança de Vida
          </a>
        </motion.div>
      </div>
    </section>
  );
};

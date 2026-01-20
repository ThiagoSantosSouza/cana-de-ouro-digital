import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Membro há 5 anos",
    content:
      "Minha vida foi completamente transformada. Encontrei paz, propósito e uma família espiritual que me acolheu nos momentos mais difíceis. Deus opera milagres aqui!",
    image: null,
  },
  {
    name: "João Santos",
    role: "Membro há 3 anos",
    content:
      "O Mudança de Vida foi o divisor de águas na minha história. Fui liberto de vícios e hoje sirvo a Deus com alegria. Sou grato eternamente por esta igreja.",
    image: null,
  },
  {
    name: "Ana Costa",
    role: "Membro há 7 anos",
    content:
      "Aqui encontrei mais do que uma igreja, encontrei uma família. O amor e o acolhimento que recebi me mostraram o verdadeiro significado de comunidade cristã.",
    image: null,
  },
  {
    name: "Pedro Oliveira",
    role: "Membro há 2 anos",
    content:
      "Depois de anos buscando, finalmente encontrei um lugar onde a presença de Deus é real e tangível. Minha família foi restaurada e hoje vivemos em paz.",
    image: null,
  },
  {
    name: "Carla Souza",
    role: "Membro há 4 anos",
    content:
      "Fui curada de uma enfermidade que os médicos diziam não ter solução. Deus usou este ministério para realizar um milagre na minha vida!",
    image: null,
  },
  {
    name: "Lucas Ferreira",
    role: "Membro há 1 ano",
    content:
      "Cheguei destruído, sem esperança. Hoje sou uma nova criatura. O poder de Deus manifesto nesta igreja transformou toda minha história.",
    image: null,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testemunhos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Vidas <span className="text-gold">Transformadas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que tiveram suas vidas tocadas pelo poder de Deus
            através do nosso ministério.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <Quote className="w-4 h-4 text-navy" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <span className="text-navy font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

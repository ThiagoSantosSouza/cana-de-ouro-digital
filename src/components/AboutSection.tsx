import { motion } from "framer-motion";
import { Heart, Users, BookOpen } from "lucide-react";
import abraco from "@/assets/abraco.jpg";

const features = [
  {
    icon: Heart,
    title: "Acolhimento",
    description: "Uma família que recebe você de braços abertos, independente de sua história.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Cresça espiritualmente junto a pessoas que compartilham a mesma fé e propósito.",
  },
  {
    icon: BookOpen,
    title: "Palavra de Deus",
    description: "Ensinamentos profundos baseados nas Escrituras para transformar sua vida.",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={abraco}
                alt="Abraço fraterno na igreja"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gold/10 text-gold font-medium rounded-full text-sm mb-6"
            >
              Sobre Nós
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Uma igreja que transforma{" "}
              <span className="text-gold">vidas</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              O Ministério Profético Cana de Ouro segue uma linha Neopentecostal, 
              prezando pelo acolhimento à comunidade e adoração a Deus. Somos uma 
              família que caminha junta em busca de crescimento espiritual e 
              transformação através do poder divino.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

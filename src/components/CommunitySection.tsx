import { motion } from "framer-motion";
import { Youtube, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  {
    icon: Youtube,
    name: "YouTube",
    url: "https://www.youtube.com/@igrejacanadeouro1227",
    color: "bg-red-600 hover:bg-red-700",
    description: "Assista nossos cultos e pregações",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/igrejacanadeouro/",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500",
    description: "Acompanhe nosso dia a dia",
  },
  {
    icon: Facebook,
    name: "Facebook",
    url: "https://www.facebook.com/MPCANADEOURO/?locale=pt_BR",
    color: "bg-blue-600 hover:bg-blue-700",
    description: "Conecte-se com nossa comunidade",
  },
];

export const CommunitySection = () => {
  return (
    <section id="comunidade" className="py-20 md:py-32 bg-card">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-medium rounded-full text-sm mb-6">
            Conecte-se
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Faça parte da nossa <span className="text-gold">comunidade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Siga-nos nas redes sociais e acompanhe tudo o que acontece no Ministério Profético Cana de Ouro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 text-center shadow-elegant border border-border transition-all group-hover:border-gold/30">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${social.color} mb-6 transition-transform group-hover:scale-110`}
                >
                  <social.icon className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {social.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {social.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

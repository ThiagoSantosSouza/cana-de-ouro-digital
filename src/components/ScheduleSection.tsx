import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const schedule = [
  { day: "Terça-feira", time: "19:00", icon: "🙏" },
  { day: "Quinta-feira", time: "19:00", icon: "🔥" },
  { day: "Domingo", time: "09:00", icon: "☀️" },
  { day: "Domingo", time: "18:00", icon: "🌙" },
];

export const ScheduleSection = () => {
  return (
    <section id="agenda" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-gold" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Agenda de <span className="text-gradient-gold">Cultos</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venha nos visitar e fazer parte da nossa comunidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <motion.div
              key={`${item.day}-${item.time}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-elegant hover:shadow-gold transition-all"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {item.day}
              </h3>
              <div className="flex items-center justify-center gap-2 text-gold">
                <Clock className="w-5 h-5" />
                <span className="font-body text-lg font-medium">{item.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-muted-foreground mt-8"
        >
          📍 Rua Thomaz Gonzaga, 219, Pernambués, Salvador - BA
        </motion.p>
      </div>
    </section>
  );
};

'use client';
import { motion } from "framer-motion";

const schedule = [
  {
    day: "Dinsdag",
    slots: [
      "09u30 – 10u20 · Karolina",
      "10u30 – 11u20 · Karolina",
      "11u30 – 12u20 · Karolina",
      "12u30 – 13u20 · Karolina",
      "18u15 – 19u05 · Anaëlle",
      "19u15 – 20u05 · Anaëlle",
      "20u15 – 21u05 · Anaëlle",
    ],
  },
  {
    day: "Woensdag",
    slots: [
      "09u30 – 10u20 · Karolina",
      "10u30 – 11u20 · Karolina",
      "11u30 – 12u20 · Karolina",
    ],
  },
  {
    day: "Vrijdag",
    slots: [
      "12u30 – 13u20 · Karolina",
      "13u30 – 14u20 · Karolina",
      "14u30 – 15u20 · Karolina",
      "15u30 – 16u20 · Karolina",
    ],
  },
  {
    day: "Zondag",
    slots: [
      "09u00 – 09u50 · Anaëlle",
      "10u00 – 10u50 · Anaëlle",
      "11u00 – 11u50 · Anaëlle",
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Planning
          </p>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light text-foreground mb-6">
            Uurrooster
          </h2>
          <div className="w-16 h-px line-gold mx-auto mb-6" />
          <p className="font-sans-body text-sm text-muted-foreground max-w-md mx-auto">
            Dit is een voorlopig uurrooster en wordt regelmatig bekeken om meerdere uren te kunnen aanbieden.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {schedule.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card border border-gold p-6"
            >
              <h3 className="font-serif-display text-2xl text-primary mb-4">{day.day}</h3>
              <div className="w-8 h-px line-gold mb-5" />
              <ul className="space-y-3">
                {day.slots.map((slot) => (
                  <li
                    key={slot}
                    className="font-sans-body text-sm text-muted-foreground leading-relaxed"
                  >
                    {slot}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;

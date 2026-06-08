'use client';
import { motion } from "framer-motion";

const schedule = [
  {
    day: "Dinsdag",
    slots: [
      { time: "09u30 – 10u20", instructor: "Karolina" },
      { time: "10u30 – 11u20", instructor: "Karolina" },
      { time: "11u30 – 12u20", instructor: "Karolina" },
      { time: "12u30 – 13u20", instructor: "Karolina" },
      { time: "18u15 – 19u05", instructor: "Anaëlle" },
      { time: "19u15 – 20u05", instructor: "Anaëlle" },
      { time: "20u15 – 21u05", instructor: "Anaëlle" },
    ],
  },
  {
    day: "Woensdag",
    slots: [
      { time: "09u30 – 10u20", instructor: "Karolina" },
      { time: "10u30 – 11u20", instructor: "Karolina" },
      { time: "11u30 – 12u20", instructor: "Karolina" },
    ],
  },
  {
    day: "Donderdag",
    slots: [
      { time: "18u15 – 19u05", instructor: "Sanaa" },
      { time: "19u15 – 20u05", instructor: "Sanaa" },
      { time: "20u15 – 21u05", instructor: "Sanaa" },
    ],
  },
  {
    day: "Vrijdag",
    slots: [
      { time: "12u30 – 13u20", instructor: "Karolina" },
      { time: "13u30 – 14u20", instructor: "Karolina" },
      { time: "14u30 – 15u20", instructor: "Karolina" },
      { time: "15u30 – 16u20", instructor: "Karolina" },
    ],
  },
  {
    day: "Zaterdag",
    slots: [
      { time: "09u15 – 10u05", instructor: "Sanaa" },
      { time: "10u15 – 11u05", instructor: "Sanaa" },
      { time: "11u15 – 12u05", instructor: "Sanaa" },
    ],
  },
  {
    day: "Zondag",
    slots: [
      { time: "09u00 – 09u50", instructor: "Anaëlle" },
      { time: "10u00 – 10u50", instructor: "Anaëlle" },
      { time: "11u00 – 11u50", instructor: "Anaëlle" },
    ],
  },
];

const instructorColors: { [key: string]: string } = {
  "Karolina": "#D4A574", // warm gold
  "Anaëlle": "#C19A6B", // darker gold
  "Sanaa": "#B8956F", // bronze/tan
};

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {schedule.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gold p-6"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            >
              <h3 className="font-serif-display text-2xl text-primary mb-4">{day.day}</h3>
              <div className="w-8 h-px line-gold mb-5" />
              <ul className="space-y-2">
                {day.slots.map((slot) => (
                  <li
                    key={`${slot.time}-${slot.instructor}`}
                    className="font-sans-body text-xs text-muted-foreground leading-relaxed px-3 py-2 rounded"
                    style={{
                      backgroundColor: `${instructorColors[slot.instructor]}20`,
                      borderLeft: `3px solid ${instructorColors[slot.instructor]}`,
                    }}
                  >
                    <span style={{ color: instructorColors[slot.instructor], fontWeight: "500" }}>
                      {slot.time}
                    </span>
                    <br />
                    <span className="text-xs" style={{ color: instructorColors[slot.instructor] }}>
                      {slot.instructor}
                    </span>
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

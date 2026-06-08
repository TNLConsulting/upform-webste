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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid #D4A574" }}>
                <th className="font-serif-display text-lg text-primary text-left py-4 px-4">Dag</th>
                <th className="font-serif-display text-lg text-primary text-left py-4 px-4">Uur</th>
                <th className="font-serif-display text-lg text-primary text-left py-4 px-4">Lesgever</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((day) =>
                day.slots.map((slot, idx) => (
                  <tr
                    key={`${day.day}-${slot.time}-${slot.instructor}`}
                    style={{
                      borderBottom: "1px solid rgba(212, 165, 116, 0.2)",
                      backgroundColor: idx % 2 === 0 ? "rgba(255, 255, 255, 0.01)" : "transparent",
                    }}
                  >
                    <td className="font-sans-body text-sm text-muted-foreground py-3 px-4">
                      {idx === 0 ? day.day : ""}
                    </td>
                    <td className="font-sans-body text-sm py-3 px-4" style={{ color: instructorColors[slot.instructor], fontWeight: "500" }}>
                      {slot.time}
                    </td>
                    <td className="font-sans-body text-sm py-3 px-4" style={{ color: instructorColors[slot.instructor] }}>
                      {slot.instructor}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;

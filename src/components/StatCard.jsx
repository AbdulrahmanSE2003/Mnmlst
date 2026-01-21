import { motion } from "framer-motion";
import { Counter } from "./Stats";

function StatCard({ stat, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.8 }}
      className={`
                relative group overflow-hidden p-10 rounded-2xl
                bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600
                flex flex-col items-center justify-center text-center
                hover:border-red-light/50 transition-all duration-500
                ${i === 0 ? "md:col-span-2 md:row-span-2 py-16" : ""}
                ${i === 3 ? "md:col-span-2" : ""}
              `}
    >
      {/* Background Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-light/5 rounded-full blur-3xl group-hover:bg-red-light/10 transition-colors" />

      <span className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#121212] dark:text-white group-hover:text-red-light transition-colors duration-500">
        <Counter target={stat.number} />
      </span>

      <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mt-4">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default StatCard;

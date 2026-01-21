import { motion } from "framer-motion";

export default function TestimonialCard({ t, i, highlightText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.2, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className="relative group p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Quote Icon Background */}
      <span className="absolute top-4 right-6 text-6xl text-gray-300 dark:text-zinc-800 font-serif select-none group-hover:text-red-light transition-colors duration-300 delay-300">
        “
      </span>

      <div className="relative z-10">
        <p className="text-lg leading-normal text-zinc-800 dark:text-zinc-300 italic mb-8">
          {highlightText(t.text)}
        </p>

        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={t.avatar || `https://ui-avatars.com/api/?name=${t.name}`}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 dark:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-full border-2 border-red-light opacity-0 group-hover:opacity-100 scale-110 transition-all duration-500" />
          </div>

          <div>
            <h4 className="font-bold text-lg dark:text-white">{t.name}</h4>
            <p className="text-sm text-gray-400 font-medium">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

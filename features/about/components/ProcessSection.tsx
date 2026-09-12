import { steps } from "@/lib/constants";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section className="">
      <h4 className="font-plus-jakarta-sans font-bold text-6xl capitalize -ml-3 tracking-tight">
        how I work
      </h4>
      <p className="font-light leading-relaxed max-w-lg text-md text-secondary-foreground mt-3 mb-12">
        A straightforward process built around clarity, collaboration, and
        shipping things that actually work.
      </p>

      {/* Grid with explicit rows and gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 shadow-xl">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`rounded-3xl p-8 ${step.bg || ""} ${step.text || "text-white"} ${step.span} overflow-hidden relative`}
          >
            {step.image ? (
              <Image
                src={step.image}
                alt="Process visual"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col justify-between h-full">
                <span className={`text-5xl font-bold opacity-30 ${step.text}`}>
                  {step.id}
                </span>
                <div>
                  <h4 className="text-xl font-plus-jakarta-sans font-medium mb-2">
                    {step.title}
                  </h4>
                  <p className="font-light opacity-70 text-sm max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;

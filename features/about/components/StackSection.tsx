import { stack } from "@/lib/constants";
import Image from "next/image";

const StackSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-plus-jakarta-sans font-bold text-6xl capitalize -ml-3 text-sidebar-foreground/85 tracking-tight">
        what I work with
      </h4>
      <p className="font-light leading-relaxed md:w-3/4 text-md text-secondary-foreground">
        The tools and technologies I reach for when building — chosen for
        reliability, not resume padding.
      </p>

      <div className="flex flex-col mt-2">
        {stack.map((item) => (
          <div
            key={item.name}
            className={`grid grid-cols-5 gap-2 border-t border-foreground/8 last:border-b `}
          >
            {/* Image */}
            <div
              className={`col-span-2 sm:col-span-1 relative overflow-hidden p-3 flex-center`}
            >
              <Image
                src={item.image}
                alt={item.name}
                className={`object-cover w-[65%]  rounded-xl`}
              />
            </div>
            {/* Info */}
            <div className="col-span-3 sm:col-span-4 group flex items-start gap-6 py-5 cursor-default">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-plus-jakarta-sans font-medium text-foreground/85 group-hover:text-foreground transition-colors duration-300">
                  {item.name}
                </span>
                <span className="text-sm font-light text-foreground/75 leading-relaxed group-hover:text-foreground/60 transition-colors duration-300">
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackSection;

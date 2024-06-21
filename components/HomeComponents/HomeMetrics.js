import React from "react";

const simpleMetrics = [
  { value: "200+", label: "Available offers" },
  { value: "100%", label: "Escrowed transaction" },
  { value: "5 sec", label: "Payout speed" },
];

function HomeMetrics() {
  return (
    <div className="w-full px-4 py-8 md:py-12 xl:py-16 bg-[#272D31]">
      <div className="w-full mx-auto max-w-[1010px] md:px-8 items-center justify-between lg:justify-evenly flex">
        {simpleMetrics.map((metric, key) => (
          <div key={metric.label + key} className="flex flex-col items-center">
            <p className="text-gradient text-[30px] md:text-[45px] xl:text-[64px] font-bold font-rubik">
           {metric.value}
            </p>
            <p className="text-sm md:text-xl xl:text-2xl font-normal font-rubik text-lightGray">
            {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeMetrics;

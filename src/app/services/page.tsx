import ServiceDetail from "@/components/ui/service-detail";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import services from "@/lib/constants/services";
import React from "react";

function Service() {
  return (
    <div className="pt-16 md:pt-28 mx-6 md:mx-10 xl:mx-32 ">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <h3 className="text-center md:text-start">
          <TextGenerateEffect
            className="text-2xl md:text-4xl xl:text-5xl font-medium text-primary"
            filter={false}
            words={"Nos Prestations"}
          />
        </h3>

        <span className="text-sm md:max-w-lg lg:self-end">
          De la conception à l&apos;achèvement Dévoiler notre gamme de services
          experts Services - Construire une vision, brique par brique
        </span>
      </div>

      <TracingBeam className="mt-10 ml-0 md:ml-12">
        <div className="flex flex-col divide-y border-y">
          {services.map((service, idx) => (
            <ServiceDetail
              key={`service-${service.id}`}
              service={service}
              index={idx + 1}
            />
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

export default Service;

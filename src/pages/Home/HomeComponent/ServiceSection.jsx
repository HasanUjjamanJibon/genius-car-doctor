import React, { useEffect, useState } from "react";

import ServiceCard from "../../../comopnents/ServiceCard";
import SectionHeader from "../../../comopnents/SectionHeader";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" space-y-5">
      <SectionHeader
        title="services"
        subtitle="Our service area"
        description="the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable."
      ></SectionHeader>
      <div className="grid-container-3-2-1 gap-6">
        {services &&
          services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
    </div>
  );
};

export default ServiceSection;

import React from "react";
import config from "@/config.json";
import FourOhFour from "@/components/layout/404";
import DestinationPage from "./DestinationPage";

const Destination = ({ params }: { params: { destination: string } }) => {
  const destination = params.destination;
  for (const states of config.popularDestinations) {
    if (states.slug === destination) {
      return <DestinationPage destination={states} />;
    }
  }
  return <FourOhFour />;
};

export default Destination;

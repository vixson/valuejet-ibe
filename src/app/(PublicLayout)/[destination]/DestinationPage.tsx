import Image from "next/image";
import React from "react";

type Props = {
  slug: string;
  state: string;
  image: string;
  slogan: string;
};

const DestinationPage = ({ destination }: { destination: Props }) => {
  return (
    <section className="sm:p-10 lg:p-2 mb-10">
      <div className="container mx-auto">
        <div className="sm:columns-2">
          <Image
            width={500}
            height={500}
            alt=""
            // className="sm:w-1/2 mb-10 sm:mb-0"
            src={destination.image}
          />
          <div>
            <h2 className="text-bold text-2xl mb-3">{destination.state}</h2>
            <p className="mb-5 text-sm text-gray-400">{destination.slogan}</p>
            <p className="text-gray-500 text-justify leading-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
              dolorem, hic aliquid eligendi eos quos odio sit adipisci,
              consequatur ducimus perferendis. Neque, quidem repellat impedit
              accusamus nemo qui veniam, numquam quisquam optio ipsam officiis!
              Magnam nihil, voluptatibus expedita nam maxime dolorum similique
              repudiandae nobis reprehenderit nisi eveniet numquam inventore
              molestias accusantium laboriosam eligendi nulla ut sequi
              blanditiis officia id nemo alias cum quisquam! Atque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;

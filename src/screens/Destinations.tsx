"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import config from "@/config.json";
import Image from "next/image";
import Link from "next/link";

const Destinations = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-36 text-center">
        <h4 className="text-6xl font-bold">
          <span className="text-wine">Popular</span> Destinations
        </h4>
        <div className="mt-10">
          <Carousel
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {config.popularDestinations.map((destination) => (
                <CarouselItem
                  key={destination.slug}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Link href={destination.slug}>
                      <Card className="hover:bg-gray-100">
                        <CardContent className="flex flex-col items-start justify-center p-0">
                          <Image
                            width={460}
                            height={460}
                            src={destination.image}
                            className="object-cover aspect-video"
                            alt=""
                          />
                          <div className="flex-1 space-y-1 p-4 text-left">
                            <p className="text-md font-medium leading-none">
                              {destination.state}
                            </p>
                            <p className="text-lg text-muted-foreground">
                              {destination.slogan}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Destinations;

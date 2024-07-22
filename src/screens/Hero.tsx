import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden" data-testid="hero-section">
      <div className=" flex-col container relative z-10 gap-5 bg-gr flex min-h-screen justify-center items-center">
        <h4 className="text-2xl sm:text-4xl font-semibold">Value Jet</h4>
        <h1 className="text-5xl md:text-9xl font-extrabold">Luxury.</h1>
        <h1 className="text-5xl md:text-9xl font-extrabold">Affordable</h1>
        <p
          className="text-2xl text-secondary font-bold text-center"
          style={{ textShadow: "2px 2px 4px #000" }}
        >
          We beleive loyalty should be rewarded
        </p>
        <div className="flex gap-4">
          <Button className="bg-gray-400 rounded-3xl">Learn more</Button>
          <Button className="rounded-3xl">Let&apos;s Fly</Button>
        </div>
      </div>
      <Image
        src="/assets/airplane-wings.png"
        width={1500}
        height={1500}
        alt="Airplane"
        className="absolute hidden md:block md:w-[1500px] -left-20 -bottom-44 rotate-12 z-0 pointer-events-none"
      />
    </div>
  );
};

export default Hero;

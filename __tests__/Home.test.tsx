import Providers from "@/Providers";
import { render, screen } from "@testing-library/react";

import Destinations from "@/screens/Destinations";
import Hero from "@/screens/Hero";

import config from "@/config.json";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("Renders hero section", () => {
    render(
      <Providers>
        <Hero />
      </Providers>
    );
    const myElem = screen.getByTestId("hero-section");
    expect(myElem).toBeInTheDocument();
  });

  it("Checks number of Carousel", () => {
    render(
      <Providers>
        <Destinations />
      </Providers>
    );

    const groups = screen.getAllByRole("group");

    const carousels = groups.filter(
      (group) => group.getAttribute("aria-roledescription") === "slide"
    );

    expect(carousels).toHaveLength(config.popularDestinations.length);
  });
});

import React from "react";
import Navbar from "../components/fragments/Navbar";
import Hero from "../components/fragments/Hero";
import About from "../components/fragments/About";
import ProductGrid from "../components/fragments/ProductGrid";
import NewReleaseText from "../components/fragments/NewReleaseText";
import Footer from "../components/fragments/Footer";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Hero HeroTitle="NEW ARRIVAL!" img="foto-hero1.png">
        WMNS AIR JORDAN 3 RETRO <br />
        LUCKY GREEN
      </Hero>
      <About AboutTitle="OUR COLLECTION">
        Welcome to our exclusive sneaker collection, where each pair is a
        tribute to sneaker culture's rich heritage and bold future. <br />{" "}
        Designed for the true aficionado, our selection not only resonates with
        style but also narrates a story of innovation and passion. <br />{" "}
        Whether you're looking to stand out with a rare find or appreciate the
        finest craftsmanship, our collection promises something <br /> special
        for every sneakerhead. Dive into a world where each step is about making
        a statement. Start your journey with us today!
      </About>
      <NewReleaseText />
      <ProductGrid numberOfProducts="8" numberOfCols="4" />
      <Hero HeroTitle="NEW ARRIVAL!" img="foto-hero1.png">
        WMNS AIR JORDAN 3 RETRO <br />
        LUCKY GREEN
      </Hero>
      <NewReleaseText />
      <ProductGrid numberOfProducts="8" numberOfCols="4" />
      <Footer />
    </div>
  );
}

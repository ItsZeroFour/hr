import About from "@/widgets/About/About";
import Advantages from "@/widgets/Advantages/Advantages";
import Brands from "@/widgets/Brands/Brands";
import Contacts from "@/widgets/Contacts/Contacts";
import Head from "@/widgets/Head/Head";
import News from "@/widgets/News/News";
import Results from "@/widgets/Results/Results";
import Reviews from "@/widgets/reviews/Reviews";
import Services from "@/widgets/Services/Services";
import Zifrs from "@/widgets/Zifrs/Zifrs";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Head />
      <Brands />
      <About />
      <Advantages />
      <Zifrs />
      <News />
      <Services />
      <Results />
      <Reviews />
      <Contacts />
    </React.Fragment>
  );
}

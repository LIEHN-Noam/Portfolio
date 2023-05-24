import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Une proposition de stage est la bienvenue... J'en ai BESOIN!" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;

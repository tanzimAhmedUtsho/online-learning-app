import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-primary">
      <Container className="mx-auto  ">
        <div className="text-center text-white bg-neutral pb-10">
          © Copyright 2022 Quality Learning Website. All Rights Reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-info">
            <Container className="mx-auto  ">
                <div className="footer mt-5  d-flex align-items-center justify-content-between p-10 bg-neutral text-neutral-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <p className="link link-hover">Branding</p>
                        <p className="link link-hover">Design</p>
                        <p className="link link-hover">Marketing</p>
                        <p className="link link-hover">Advertisement</p>
                    </div>
                    <div>
                        <p className="footer-title">Company</p>
                        <p className="link link-hover">About Us</p>
                        <p className="link link-hover">Contact</p>
                        <p className="link link-hover">Jobs</p>
                        <p className="link link-hover">Press kit</p>
                    </div>
                    <div>
                        <p className="footer-title">Legal</p>
                        <p className="link link-hover">Terms of use</p>
                        <p className="link link-hover">Privacy policy</p>
                        <p className="link link-hover">Cookie policy</p>
                    </div>
                </div>
                <div className="text-center text-white bg-neutral pb-10">
                    © Copyright 2022 Quality Learning Website. All Rights
                    Reserved.
                </div>
            </Container>
        </div>
    );
};

export default Footer;

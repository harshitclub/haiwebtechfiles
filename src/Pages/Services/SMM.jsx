import React, { useState } from "react";
import "../../Styles/Services/SMMService.css";
import { GrFacebook } from "react-icons/gr";
import {
  BsArrowRightCircleFill,
  BsLinkedin,
  BsMessenger,
  BsPinterest,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { AiFillCheckCircle, AiFillInstagram } from "react-icons/ai";
import { FaQuora } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { ImUsers } from "react-icons/im";
import { BiRocket } from "react-icons/bi";
import { MdOutlineContentPaste } from "react-icons/md";

import socialHero from "../../assets/social1.png";

import social1 from "../../assets/socialservice.png";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SMM = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const [smmService, setSMMService] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  let name, value;

  const smmServiceInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setSMMService({ ...smmService, [name]: value });
  };

  const smmServicePostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, website, message } = smmService;

    if (name && email && phone && message) {
      const res = await fetch(
        "https://hai-web-tech-database-default-rtdb.firebaseio.com/smm-service.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            website,
            message,
          }),
        }
      );

      const data = await res.json();
      if (!data) {
        window.alert("Fill All the Fields");
        console.log("Fill all the details");
      } else {
        setSMMService({
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
        window.alert("Success");
        console.log("Success");
      }
    } else {
      alert("fill all the data");
    }
  };

  return (
    <>
      <Helmet>
        <title>SMM (Social Media Marketing) Service - Hai WebTech</title>
        <meta
          name="description"
          content="SMM (Social Media Marketing) Service - All information of our SMM (Social Media Marketing) Service on this Page. You can easily contact us if you want our SMM (Social Media Marketing) Service for your website."
        />
        <meta
          name="keywords"
          content="Hai WebTech, SMM (Social Media Marketing) Service, Social Media Marketing, Message Us, Connect, Service, SEO, SEM, PPC, Website Design, Email, Phone, Name, Message"
        />
        <link rel="canonical" href="/smm-service" />
      </Helmet>
      <div className="smmService">
        <ScrollToTopOnMount />
        <div className="smmServiceHeader">
          <h2>Get SMM Service & Generate More Leads</h2>
          <h4>Social Media Marketing</h4>
        </div>
        <div className="smmServiceHero">
          <div className="smmServiceHeroLeft">
            <div className="smmContent">
              <h2>More Lead With Social Media Marketing</h2>
              <p>
                Looking For SMM (Social Media Marketing) Service, so you are at
                the right place.
              </p>
              <img src={socialHero} alt="" />
            </div>
          </div>
          <div className="smmServiceHeroRight">
            <div className="smmServiceForm">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={smmService.name}
                    onChange={smmServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={smmService.email}
                    onChange={smmServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Number"
                    name="phone"
                    value={smmService.phone}
                    onChange={smmServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Website (Optional)"
                    name="website"
                    value={smmService.website}
                    onChange={smmServiceInputs}
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Any Message"
                    rows="8"
                    cols="50"
                    name="message"
                    value={smmService.message}
                    onChange={smmServiceInputs}
                  />
                </div>
                <div className="smmSubmit">
                  <input
                    type="submit"
                    value="Lets Connect Now"
                    onClick={smmServicePostData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="smmServiceImage">
          <div className="smmServiceILeft">
            <img src={social1} alt="" />
          </div>
          <div className="smmServiceIRight">
            <h2>Why Social Media Marketing?</h2>
            <p>
              <AiFillCheckCircle className="checkIcon" /> Improved Brand
              Awareness
            </p>
            <p>
              <AiFillCheckCircle className="checkIcon" /> Cost Effective
            </p>
            <p>
              <AiFillCheckCircle className="checkIcon" /> Engage With Your
              Customers
            </p>
            <p>
              <AiFillCheckCircle className="checkIcon" /> Improve Brand Loyalty
            </p>
            <p>
              <AiFillCheckCircle className="checkIcon" /> Healthier Customer
              Satisfaction
            </p>
            <p>
              <AiFillCheckCircle className="checkIcon" /> Marketplace Awareness
            </p>
            <p>
              <AiFillCheckCircle className="checkIcon" /> More Brand Authority
            </p>
            <p>
              <AiFillCheckCircle className="checkIcon" /> Enhanced SEO Ranking
            </p>
          </div>
        </div>

        <div className="smmPlatforms">
          <h2>We Do Social Media Marketing (SMM) for All Platforms</h2>
          <div className="smmServiceTabs">
            <div className="smmServiceTab">
              <GrFacebook className="smmServiceIcons" />
              <h4>Facebook</h4>
            </div>
            <div className="smmServiceTab">
              <BsMessenger className="smmServiceIcons" />
              <h4>Messenger</h4>
            </div>
            <div className="smmServiceTab">
              <AiFillInstagram className="smmServiceIcons" />
              <h4>Instagram</h4>
            </div>
            <div className="smmServiceTab">
              <BsTwitter className="smmServiceIcons" />
              <h4>Twitter</h4>
            </div>
          </div>

          <div className="smmServiceTabs">
            <div className="smmServiceTab">
              <BsLinkedin className="smmServiceIcons" />
              <h4>LinkedIn</h4>
            </div>
            <div className="smmServiceTab">
              <BsPinterest className="smmServiceIcons" />
              <h4>Pinterest</h4>
            </div>
            <div className="smmServiceTab">
              <FaQuora className="smmServiceIcons" />
              <h4>Quora</h4>
            </div>
            <div className="smmServiceTab">
              <BsWhatsapp className="smmServiceIcons" />
              <h4>Whatsapp</h4>
            </div>
          </div>
        </div>

        <div className="smmTarget">
          <h2>OUR STRATEGY</h2>
          <p>
            The best location to sell your goods and services is where your
            potential clients are, which is currently social media. This is a
            common adage in the field of marketing.
          </p>
          <div className="smmTargetTabs">
            <div className="smmTargetTab1">
              <IoMdAnalytics className="smmServiceIcons" />
              <h4 className="smmHeading">
                Analyse <BsArrowRightCircleFill className="checkIcon" />
              </h4>
            </div>
            <div className="smmTargetTab2">
              <MdOutlineContentPaste className="smmServiceIcons" />
              <h4 className="smmHeading">
                Plan <BsArrowRightCircleFill className="checkIcon" />
              </h4>
            </div>
            <div className="smmTargetTab3">
              <ImUsers className="smmServiceIcons" />
              <h4 className="smmHeading">
                Audience <BsArrowRightCircleFill className="checkIcon" />
              </h4>
            </div>
            <div className="smmTargetTab4">
              <BiRocket className="smmServiceIcons" />
              <h4 className="smmHeading">
                Launch <AiFillCheckCircle className="checkIcon" />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMM;

import React, { useState } from "react";
import "../../Styles/Services/PPCService.css";
import seoService from "../../assets/seoService.png";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PayPerClick = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const [ppcService, setPPCService] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  let name, value;

  const ppcServiceInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setPPCService({ ...ppcService, [name]: value });
  };

  const ppcServicePostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, website, message } = ppcService;

    if (name && email && phone && message) {
      const res = await fetch(
        "https://hai-web-tech-database-default-rtdb.firebaseio.com/ppc-service.json",
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
        setPPCService({
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
        <title>PPC (Pay Per Click) Service - Hai WebTech</title>
        <meta
          name="description"
          content="PPC (Pay Per Click) Service - All information of our PPC (Pay Per Click) Service on this Page. You can easily contact us if you want our PPC (Pay Per Click) Service for your website."
        />
        <meta
          name="keywords"
          content="Hai WebTech, PPC (Pay Per Click) Service, Pay Per Click, Message Us, Connect, Service, SEO, SEM, PPC, Website Design, Email, Phone, Name, Message"
        />
        <link rel="canonical" href="/ppc-service" />
      </Helmet>
      <div className="ppcService">
        <ScrollToTopOnMount />
        <div className="ppcServiceHeader">
          <h2>Get PPC Service & Generate More Leads</h2>
          <h4>Pay Per Click</h4>
        </div>
        <div className="ppcServiceHero">
          <div className="pshLeft">
            <div className="pshContent">
              <h2>Generate More Leads For Your Business Now</h2>
              <p>
                Looking For PPC (Pay Per Click) Service, so you are at the right
                place. Fill Form To Get Service
              </p>
              <div className="pshImage">
                <img src={seoService} alt="" />
              </div>
            </div>
          </div>
          <div className="pshRight">
            <div className="ppcServiceForm">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ppcService.name}
                    onChange={ppcServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ppcService.email}
                    onChange={ppcServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Number"
                    name="phone"
                    value={ppcService.phone}
                    onChange={ppcServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Website (Optional)"
                    name="website"
                    value={ppcService.website}
                    onChange={ppcServiceInputs}
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Any Message"
                    rows="8"
                    cols="50"
                    name="message"
                    value={ppcService.message}
                    onChange={ppcServiceInputs}
                  />
                </div>
                <div className="psSubmit">
                  <input
                    type="submit"
                    value="Let Connect Now"
                    onClick={ppcServicePostData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="ppcServiceProcess">
          <h4>Our PPC Process</h4>
          <h2>PPC Services We Provide & Our Main Targeted Brands</h2>
          <div className="ppcServiceTabs">
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" /> GOOGLE
                ADWORDS
              </h4>
              <p>
                Advertise on Google Search, YouTube, Gmail, & More. Increase
                your calls, website visits, and shoppers to your store.
              </p>
            </div>
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" /> FACEBOOK
                ADS
              </h4>
              <p>
                Advertise on Facebook & Instagram Feed Stories, Messenger,
                Partner Networks & More. Get leads and sales with a 5X ROAS or
                20X ROAS Retargeting Audience.
              </p>
            </div>
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" /> LINKEDIN
                ADS
              </h4>
              <p>
                To reach over 630 million professionals around the world,
                advertise on Linkedln. You can create sponsored posts, InMai
                Ads, and Text & Dynamics Ads.
              </p>
            </div>
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" />{" "}
                PININTEREST ADS
              </h4>
              <p>
                With Promoted Pins and Video Pins, Carousels Carousels, App Pins
                & Shoppable Pins, you can create awareness and get consideration
                from Pinterest's 250,000,000 users.
              </p>
            </div>
          </div>

          <div className="ppcServiceTabs">
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" /> TWITTER
                ADS
              </h4>
              <p>
                Twitter Ads can increase engagement, grow followers and increase
                website traffic. It can also generate leads & sales, install
                apps & engage with users.
              </p>
            </div>
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" /> REDDIT
                ADS
              </h4>
              <p>
                To reach 234M unique monthly Internet users, advertise on the
                "front page" of the Internet to reach these communities.
              </p>
            </div>
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" /> SNAPCHAT
                ADS
              </h4>
              <p>
                Snapchat advertising targeting the mobile-first generation will
                drive sales to your website, in your store, or downloads of your
                app.
              </p>
            </div>
            <div className="ppcServiceTab">
              <h4>
                <BsFillBookmarkCheckFill className="ppcServiceIcon" /> QUORA ADS
              </h4>
              <p>
                Quora is a platform that allows you to advertise and reach
                millions of people looking for answers to questions related to
                your industry or business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayPerClick;

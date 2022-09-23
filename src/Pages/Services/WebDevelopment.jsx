import React, { useState } from "react";
import seoService from "../../assets/seoService.png";
import "../../Styles/Services/WebService.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const WebDevelopment = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const [webService, setWEBService] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  let name, value;

  const webServiceInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setWEBService({ ...webService, [name]: value });
  };

  const webServicePostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, website, message } = webService;

    if (name && email && phone && message) {
      const res = await fetch(
        "https://hai-web-tech-database-default-rtdb.firebaseio.com/website-service.json",
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
        setWEBService({
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
        <title>Website Design & Development Service - Hai WebTech</title>
        <meta
          name="description"
          content="Website Design & Development Service - All information of our Website Design & Development Service on this Page. You can easily contact us if you want our Website Design & Development Service for your website."
        />
        <meta
          name="keywords"
          content="Hai WebTech, Website Design & Development Service, Website, Message Us, Connect, Service, SEO, SEM, PPC, Website Design, Email, Phone, Name, Message"
        />
        <link rel="canonical" href="/website-service" />
      </Helmet>
      <div className="webService">
        <ScrollToTopOnMount />
        <div className="webServiceHeader">
          <h2>Take Your Business Online With Website Now</h2>
          <h4>Website Development & Design</h4>
        </div>
        <div className="webServiceHero">
          <div className="webshLeft">
            <div className="webshContent">
              <h2>Get Website For Your Offline Business</h2>
              <p>
                Looking For Website (Design & Development) Service, so you are
                at the right place. Fill Form To Get Service
              </p>
              <div className="webshImage">
                <img src={seoService} alt="" />
              </div>
            </div>
          </div>
          <div className="webshRight">
            <div className="webServiceForm">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={webService.name}
                    onChange={webServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={webService.email}
                    onChange={webServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Number"
                    name="phone"
                    value={webService.phone}
                    onChange={webServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Website (Optional)"
                    name="website"
                    value={webService.website}
                    onChange={webServiceInputs}
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Any Message"
                    rows="8"
                    cols="50"
                    name="message"
                    value={webService.message}
                    onChange={webServiceInputs}
                  />
                </div>
                <div className="websSubmit">
                  <input
                    type="submit"
                    value="Let Connect Now"
                    onClick={webServicePostData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="webImpact">
          <h4>CHANGE IS INEVITABLE</h4>
          <h2>And We Change Your Digital Experiences For A Better ROI!</h2>
          <div className="webITabs">
            <div className="webITab">
              <h4>
                <AiFillCheckCircle className="webSIcon" /> CREATING THE FIRST
                IMPRESSION
              </h4>
              <p>
                Never risk your company's reputation by using unprofessional
                websites. Hai Web Tech guarantees to build your website with the
                strongest and most captivating firs t impression.
              </p>
            </div>
            <div className="webITab">
              <h4>
                <AiFillCheckCircle className="webSIcon" /> INCREASES CREDIBILITY
              </h4>
              <p>
                To persuade customers to come in and perform the necessary
                action, all it needs is a great website with the newest designs
                and compelling online copy. With Hai Web Tech, you can stand out
                from the competition.
              </p>
            </div>
            <div className="webITab">
              <h4>
                <AiFillCheckCircle className="webSIcon" /> IMPROVED RANKING ON
                SERP
              </h4>
              <p>
                A website that doesn't wow its visitors also doesn't wow the
                search engines. Hai Web Tech assists you in creating websites
                and content that have excellent designs and have a positive
                effect on readers.
              </p>
            </div>
          </div>
          <div className="webITabs">
            <div className="webITab">
              <h4>
                <AiFillCheckCircle className="webSIcon" /> INCREASED MOBILE
                TRAFFIC
              </h4>
              <p>
                The website development and design teams at Hai web Tech
                guarantee a layout that works on both desktop and mobile
                devices. The readers benefit from higher adaptability at a
                lesser cost of development.
              </p>
            </div>
            <div className="webITab">
              <h4>
                <AiFillCheckCircle className="webSIcon" /> MINIMIZED BOUNCE
                RATES
              </h4>
              <p>
                The website design services provided by Hai Web Tech are
                expertly crafted to pique readers interest. We guarantee that
                readers won't abandon your website after viewing the home page.
              </p>
            </div>
            <div className="webITab">
              <h4>
                <AiFillCheckCircle className="webSIcon" /> INCREASED REVENUE
              </h4>
              <p>
                Your website's visitors will be impressed by its clever design,
                which will help you turn them into prospects. Every potential
                customer will undoubtedly increase returns and revenue for your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;

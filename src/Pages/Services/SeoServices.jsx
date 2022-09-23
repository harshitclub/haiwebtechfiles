import React, { useState } from "react";
import "../../Styles/Services/SEOService.css";
import seoImage from "../../assets/seoService.png";

import { ImUserCheck } from "react-icons/im";
import { RiPagesLine, RiRhythmFill } from "react-icons/ri";
import { TbMapSearch } from "react-icons/tb";
import { HiOutlineLink } from "react-icons/hi";
import { VscSymbolKeyword } from "react-icons/vsc";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import {
  MdAnalytics,
  MdOutlineDomainVerification,
  MdSpeakerPhone,
} from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SeoServices = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const [seoService, setSEOService] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  let name, value;

  const seoServiceInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setSEOService({ ...seoService, [name]: value });
  };

  const seoServicePostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, website, message } = seoService;

    if (name && email && phone && message) {
      const res = await fetch(
        "https://hai-web-tech-database-default-rtdb.firebaseio.com/seo-service.json",
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
        setSEOService({
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
        <title>SEO (Search Engine Optimization) Service - Hai WebTech</title>
        <meta
          name="description"
          content="SEO (Search Engine Optimization) Service - All information of our SEO (Search Engine Optimization) Service on this Page. You can easily contact us if you want our SEO (Search Engine Optimization) Service for your website."
        />
        <meta
          name="keywords"
          content="Hai WebTech, SEO (Search Engine Optimization) Service, Search Engine Optimization, Message Us, Connect, Service, SEO, SEM, PPC, Website Design, Email, Phone, Name, Message"
        />
        <link rel="canonical" href="/seo-service" />
      </Helmet>
      <div className="seoService">
        <ScrollToTopOnMount />
        <div className="seoServiceHeader">
          <h2>Get SEO Service & Optimize Your Website</h2>
          <h4>Search Engine Optimization</h4>
        </div>
        <div className="seoServiceHero">
          <div className="sshLeft">
            <div className="sshContent">
              <h2>Drive More Traffic To Your Website Now</h2>
              <p>
                Looking For SEO (Search Engine Optimization) Service, so you are
                at the right place.
              </p>
              <div className="sshImage">
                <img src={seoImage} alt="" />
              </div>
            </div>
          </div>
          <div className="sshRight">
            <div className="seoServiceForm">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={seoService.name}
                    onChange={seoServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={seoService.email}
                    onChange={seoServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Number"
                    name="phone"
                    value={seoService.phone}
                    onChange={seoServiceInputs}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Website (Optional)"
                    name="website"
                    value={seoService.website}
                    onChange={seoServiceInputs}
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Any Message"
                    rows="8"
                    cols="50"
                    name="message"
                    value={seoService.message}
                    onChange={seoServiceInputs}
                  />
                </div>
                <div className="ssSubmit">
                  <input
                    type="submit"
                    value="Let Connect Now"
                    onClick={seoServicePostData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="whySeoService">
          <h4>WHY SEARCH ENGINE OPTIMIZATION (SEO)?</h4>
          <h2>Because A Greate Website Deserves To Be In The Limelight!</h2>
          <h4>
            Let the SEO Experts get your website ranking on top search sites
            like Google, Yahoo and Bing!
          </h4>
        </div>
        <div className="seoServiceTabs">
          <div className="seoServiceTab">
            <ImUserCheck className="seoServiceIcons" />
            <h4>Dedicated SEO Manager</h4>
            <p>
              Every SEO campaign has a dedicated project coordinator who keeps
              in touch with the Managed SEO customer on the campaign's progress
              and results.
            </p>
          </div>
          <div className="seoServiceTab">
            <RiPagesLine className="seoServiceIcons" />
            <h4>Keyword Targeting</h4>
            <p>
              We focus on keywords that are appropriate for your company,
              product, or service and those that align with the intent of your
              clients.
            </p>
          </div>
          <div className="seoServiceTab">
            <TbMapSearch className="seoServiceIcons" />
            <h4>Content Relevancy</h4>
            <p>
              Help from a professional SEO assistance to improve ranks with
              material that is optimised for the most profitable keywords.
            </p>
          </div>
        </div>

        <div className="seoServiceTabs">
          <div className="seoServiceTab">
            <HiOutlineLink className="seoServiceIcons" />
            <h4>Link Building</h4>
            <p>
              To increase authority and subsequently rankings, our SEO
              specialists will post original content to blogs, directories,
              submission platforms, and social bookmarking sites.
            </p>
          </div>
          <div className="seoServiceTab">
            <VscSymbolKeyword className="seoServiceIcons" />
            <h4>Keyword Tracking</h4>
            <p>
              We offer quarterly and monthly ranking reports so you can track
              improvements in your SEO keyword rankings.
            </p>
          </div>
          <div className="seoServiceTab">
            <TbDeviceDesktopAnalytics className="seoServiceIcons" />
            <h4>Website Analytics</h4>
            <p>
              Find out precisely how many individuals are visiting your website
              and whether they are brand-new or recurring visitors.
            </p>
          </div>
        </div>

        <div className="seoServiceQuote">
          <div className="seoQuote">
            <p>“Don’t optimize for conversions, optimize for revenue.”</p>
          </div>
        </div>

        <div className="seoBenefits">
          <div className="seoBContent">
            <h3>What Our SEO Service Do To Your Website?</h3>
          </div>
          <div className="seoBTabs">
            <div className="seoBTab">
              <MdSpeakerPhone className="seoServiceIcons" />
              <h4>Increased Brand Awareness</h4>
              <p>With the right SEO services, your visibility will increase.</p>
            </div>
            <div className="seoBTab">
              <TbDeviceDesktopAnalytics className="seoServiceIcons" />
              <h4>Conversion</h4>
              <p>
                You will see an increase in conversions if your website ranks
                highly in search engines.
              </p>
            </div>
            <div className="seoBTab">
              <MdAnalytics className="seoServiceIcons" />
              <h4>Quality Traffic</h4>
              <p>
                A search on the search engine is the starting point of 90% of
                all online experiences. Capture The Traffic!
              </p>
            </div>
          </div>
          <div className="seoBTabs">
            <div className="seoBTab">
              <RiRhythmFill className="seoServiceIcons" />
              <h4>FREE Traffic & Higher Conversion</h4>
              <p>
                When you rank higher for the relevant terms and get higher
                conversion, you receive FREE organic traffic.
              </p>
            </div>
            <div className="seoBTab">
              <AiFillEye className="seoServiceIcons" />
              <h4>Better Online Visibility</h4>
              <p>
                When your brand appears at the top of the first page of search
                results, you gain increased brand exposure.
              </p>
            </div>
            <div className="seoBTab">
              <MdOutlineDomainVerification className="seoServiceIcons" />
              <h4>Higher Domain Authority</h4>
              <p>
                Your website's domain authority and reputation can be improved
                with the use of an effective SEO plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoServices;

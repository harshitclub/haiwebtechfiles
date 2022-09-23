import React, { useState } from "react";
import "./ContactUs.css";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";

import contact1 from "../../assets/contact1.png";
import contact2 from "../../assets/contact2.png";
import contact3 from "../../assets/contact3.png";
import contact4 from "../../assets/contact4.png";
import contactpage from "../../assets/contactpage.png";
import { useEffect } from "react";

const ContactUs = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    message: "",
  });

  let name, value;

  const contactHandleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setContact({ ...contact, [name]: value });
  };

  const contactPostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, company, website, service, message } = contact;

    if (name && email && phone && service && message) {
      const res = await fetch(
        "https://hai-web-tech-database-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            company,
            website,
            service,
            message,
          }),
        }
      );

      const data = await res.json();
      if (!data) {
        window.alert("Fill All the Fields");
        console.log("Fill all the details");
      } else {
        setContact({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          service: "",
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
        <title>Contact</title>
        <meta
          name="description"
          content="Contact Us Page of Hai Web Tech, If anyone want our services like SEO, SEM, PPC, Website Design, Etc. so they can easily contact us."
        />
        <meta
          name="keywords"
          content="Hai WebTech, Contact, Contact Us, Message Us, Connect, Services, SEO, SEM, PPC, Website Design, Email, Phone, Name, Message"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="contactContainer">
        <ScrollToTopOnMount />
        <div className="seoServiceHeader">
          <h2>Hai Web Tech | Contact Us</h2>
          <h4>Let's Connect Now!</h4>
        </div>
        <div className="contactPageForm">
          <div className="cpLeft">
            <div className="cpLeftContent">
              <img src={contactpage} alt="" />
            </div>
          </div>
          <div className="cpRight">
            <form>
              <div>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={contactHandleInputs}
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={contactHandleInputs}
                />
              </div>
              <div>
                <input
                  placeholder="Phone"
                  type="number"
                  name="phone"
                  value={contact.phone}
                  onChange={contactHandleInputs}
                />
              </div>
              <div>
                <input
                  placeholder="Company (Optional)"
                  type="text"
                  name="company"
                  value={contact.company}
                  onChange={contactHandleInputs}
                />
              </div>
              <div>
                <input
                  placeholder="Website (Optional)"
                  type="text"
                  name="website"
                  value={contact.website}
                  onChange={contactHandleInputs}
                />
              </div>
              <div>
                <select
                  name="service"
                  id="service-contact"
                  value={contact.service}
                  onChange={contactHandleInputs}
                >
                  <option>Choose a Service:</option>
                  <option value="website">Website Design & Development</option>
                  <option value="SEO">Search Engine Optimization (SEO)</option>
                  <option value="SMM">Social Media Marketing (SMM)</option>
                  <option value="PPC">Pay Per Click (PPC)</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Any Message"
                  type="text"
                  rows="5"
                  cols="50"
                  name="message"
                  value={contact.messsage}
                  onChange={contactHandleInputs}
                />
              </div>
              <div className="cpSubmit">
                <input
                  type="submit"
                  value={`Let's Connect Now`}
                  onClick={contactPostData}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="contactEmail">
          <div className="cEmailBox">
            <p>
              <a href="mailto: info@haiwebtech.com">
                <MdEmail className="cEIcon" /> info@haiwebtech.com
              </a>
            </p>
          </div>
        </div>

        <div className="contactTabs">
          <div className="contactTab">
            <img src={contact4} alt="" />
            <h4>Website</h4>
          </div>
          <div className="contactTab">
            <img src={contact2} alt="" />
            <h4>SEO</h4>
          </div>
          <div className="contactTab">
            <img src={contact3} alt="" />
            <h4>SMM</h4>
          </div>
          <div className="contactTab">
            <img src={contact1} alt="" />
            <h4>PPC</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

import React, {useState} from "react";
import "../Styles/components/Hero.css";
import car from '../assets/heroCar.png'
import { Link } from "react-router-dom";

const Hero = () => {
  const [proposal, setProposal] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    message: "",
  });

  let name, value;

  const proposalHandleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setProposal({ ...proposal, [name]: value });
  };

  const proposalPostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, website, company, message } = proposal;

    if (name && email && phone && website && message) {
      const res = await fetch(
        "https://hai-web-tech-database-default-rtdb.firebaseio.com/proposal.json",
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
            company,
            message,
          }),
        }
      );

      const data = await res.json();
      if (!data) {
        window.alert("Fill All the Fields");
        console.log("Fill all the details");
      } else {
        setProposal({
          name: "",
          email: "",
          phone: "",
          website: "",
          company: "",
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
      <div className="heroContainer">
        <div className="heroLeft">
            <div className="heroContent">
                <img src={car} alt=''/>
                <h2>Without Digital Marketing Your Business Resemble This Car</h2>
                <h4>WEBSITE | SEO | SOCIAL MEDIA | PPC ADS</h4>
                <p id="contactBtn"><Link to='/contact'>Contact</Link></p>
            </div>
            
        </div>
        <div className="heroRight">
          <h4>Get Free Proposal Now!</h4>
          <div className="heroForm">
            <form>
              <div>
                <input type="text" name='name' placeholder="Name" className='heroInput' value={proposal.name} onChange={proposalHandleInputs}/>
              </div>
              <div>
                <input type="text" name='email' placeholder="Email" className='heroInput' value={proposal.email} onChange={proposalHandleInputs}/>
              </div>
              <div>
                <input type="number" name='phone' placeholder="Phone" className='heroInput' value={proposal.phone} onChange={proposalHandleInputs}/>
              </div>
              <div>
                <input type="url" name='website' placeholder="Website" className='heroInput' value={proposal.website} onChange={proposalHandleInputs}/>
              </div>
              <div>
                <input type="text" name='company' placeholder="Company (Optional)" className='heroInput' value={proposal.company} onChange={proposalHandleInputs}/>
              </div>
              <div>
                <textarea rows="8" cols="50" type="text" name='message' placeholder="Message" className='heroInputText' value={proposal.message} onChange={proposalHandleInputs}/>
              </div>
              <div className="heroSubmit">
                <input type="submit" onClick={proposalPostData}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

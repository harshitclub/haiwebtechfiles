import React from 'react'
import '../Styles/components/AboutSection.css'
import digital from '../assets/digital2.png'

const AboutSection = () => {
  return (
    <>
    <div className="aboutSectionContainer">
    <div className="aboutSectionRight">
           <div className="aboutSectionImage">
            <img src={digital} alt=""/>
           </div>
        </div>
        <div className="aboutSectionLeft">
            <div className="aboutSectionContent">
                <h2>Creation & Innovation</h2>
                <p>Digital marketing tactics developed and implemented by Hai Web Tech have been successful for companies in a variety of industries. We take satisfaction in the variety of clients we have been able to service, ranging from sustainable food items, real estate, clothes, and lifestyle to steel engineering, steam engineering, road technology, etc.</p>
                <p>In order to provide you with a solution that not only meets your business needs but also significantly boosts the value of your brand, we combine the forces of design excellence with cutting-edge innovation</p>
                <p>
                Everything we deliver is packed with both long-term and short-term financial rewards, assisting you in carving out a leadership position in the market.</p>
                <p>A group of imaginative thinkers, creators, and designers, Hai Web Tech thrives on new information and fresh concepts. This refers to the fact that when you work with us, your digital communication will include the newest content, designs, and marketing techniques that will not only help your brand stand out in the minds of your audience but also help you sell goods and services.</p>
                <p>By providing the highest organic and paid reach for their businesses together with high-quality content and communication designs, our team is dedicated to realising the goal of our clients.</p>

            </div>
        </div>
       
    </div>
    </>
  )
}

export default AboutSection
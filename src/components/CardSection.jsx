import React from 'react'
import '../Styles/components/cardSection.css'
import { TbView360, TbFileDollar, TbFileChart } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";


const cardSection = () => {
  return (
    <>
    <div className="cardSection">
    <div class="container">

    <div class="card">
            <div class="face face1">
                <div class="content">
                    <RiLightbulbFlashFill className='cardIcon'/>
                    <h3>Website</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Whether you own a small or large business, whether it’s a product or service that you offer, a website is necessary as long as you are a part of this digital world.</p>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <TbView360 className='cardIcon'/>
                    <h3>SEO</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>SEO is crucial because it makes your website more visible, and that means more traffic and more opportunities to convert prospects into customers. </p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <TbFileChart className='cardIcon'/>
                    <h3>SMM</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Social media marketing is all about getting your products and services in front of new and existing customers using some of the world’s largest platforms.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <TbFileDollar className='cardIcon'/>
                    <h3>PPC</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Pay-per-click advertising is most common in search engine results pages, like Google or Bing, but is also used on social channels in today's time.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default cardSection
import React from 'react';
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import SEOPackage from './Pages/Packages/SEOPackage'
import PPCPackage from './Pages/Packages/PPCPackage'
import SMMPackage from './Pages/Packages/SMMPackage'
import WebsitePackage from './Pages/Packages/WebsitePackage'

import ContactPage from './Pages/Contact/ContactUs'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './Pages/TermsConditions/TermsCondition'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

import SEOService from './Pages/Services/SeoServices'
import PPCService from './Pages/Services/PayPerClick'
import SMMService from './Pages/Services/SMM'
import WEBService from './Pages/Services/WebDevelopment'
import { Helmet } from 'react-helmet-async';


function App() {
  return (
   <>
   {/* <TopBar/> */}
   <Helmet>
        <title>Hai WebTech - Digital Marketing Company</title>
        <meta
          name="description"
          content="Hai Web Tech is a Digital Marketing Company, we offer Website Development & Design, SEO, SEM, SMM, PPC, etc. services and packages."
        />
        <meta
          name="keywords"
          content="Hai WebTech, ppc, seo, sem, smm, social media, search engine optimization, website design, website development, digital marketing, digital"
        />
        <link rel="canonical" href="/" />
      </Helmet>
   <Navbar/>
   <Routes>
   <Route path="/" element={ <Home/> } />
   <Route path="/seo-packages" element={ <SEOPackage/> } />
   <Route path="/smm-packages" element={ <SMMPackage/> } />
   <Route path="/ppc-packages" element={ <PPCPackage/> } />
   <Route path="/website-package" element={ <WebsitePackage/> } />

   <Route path="/seo-service" element={ <SEOService/> } />
   <Route path="/ppc-service" element={ <PPCService/> } />
   <Route path="/smm-service" element={ <SMMService/> } />
   <Route path="/website-service" element={ <WEBService/> } />

   <Route path="/contact" element={ <ContactPage/> } />
   <Route path="/privacy-policy" element={ <PrivacyPolicy/> } />
   <Route path="/terms-conditions" element={ <TermsCondition/> } />
   <Route path="*" element={<ErrorPage/>}/>
   </Routes>
    <Footer/>
   </>
  );
}

export default App;

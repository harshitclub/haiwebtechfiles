import React from 'react';
import Home from './Pages/Home.jsx'
// import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import SEOPackage from './Pages/Packages/SEOPackage'
import PPCPackage from './Pages/Packages/PPCPackage'
import SMMPackage from './Pages/Packages/SMMPackage'
import WebsitePackage from './Pages/Packages/WebsitePackage'

import ContactPage from './Pages/ContactUs.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import TermsCondition from './Pages/TermsCondition'
import ErrorPage from './Pages/ErrorPage'

import SEOService from './Pages/Services/SeoServices'
import PPCService from './Pages/Services/PayPerClick'
import SMMService from './Pages/Services/SMM'
import WEBService from './Pages/Services/WebDevelopment'
// import Social from './components/Social.jsx';



function App() {
  return (
   <>
   {/* <TopBar/> */}
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

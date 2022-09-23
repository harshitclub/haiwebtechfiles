import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FcOk, FcCancel } from "react-icons/fc";
import "../../Styles/Packages/PPCPackage.css";

const PPCPackage = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <>
      <Helmet>
        <title>Pay Per Click (PPC) Package - Hai WebTech</title>
        <meta
          name="description"
          content="PPC (Pay Per Click) - All information of our PPC packages on this Page. You can easily contact us if you want our PPC package for your business."
        />
        <meta
          name="keywords"
          content="Hai WebTech, PPC, Pay Per Click, Message Us, Connect, Package, SEO, SEM, PPC, Website Design, Email, Phone, Name, Message"
        />
        <link rel="canonical" href="/ppc-packages" />
      </Helmet>
      <div className="ppcPackages">
        <ScrollToTopOnMount />
        <div className="ppcServiceHeader">
          <h2>Get PPC Package & Generate More Leads</h2>
          <h4>Pay Per Click</h4>
        </div>
        <div className="ppcPackagesContainer">
          <div className="ppcPackage">
            <table>
              <tr>
                <th>Basic</th>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Campaign – 1
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> AD Groups – 2
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Ad Copies – Maximum 6
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> No. of Keywords-50
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Search Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Display Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Gmail Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Video Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Shopping Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> App Promotion Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Remarketing List
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Conversion Tracking
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;PPC CAMPAIGN MANAGEMENT</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Competitor Analysis – Yes
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Keyword Optimization – Yes
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Ad Copy Optimization – Yes
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;VALUE ADDS</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcCancel className="tickIcon" /> ROI Analysis
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcCancel className="tickIcon" /> Landing Page Optimization
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;REPORTING</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Reports – Monthly
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Dedicated Account Manager
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Support – Email, Chat
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <p className="ppcBtn">Get Started</p>
                </td>
              </tr>
              <br />
            </table>
          </div>
          <div className="ppcPackage">
            <table>
              <tr>
                <th>Advance</th>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Campaign – 3
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> AD Groups – 10
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Ad Copies – Maximum 15
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> No. of Keywords-100
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Search Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Display Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Gmail Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Video Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcCancel className="tickIcon" /> Shopping Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> App Promotion Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Remarketing List
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Conversion Tracking
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;PPC CAMPAIGN MANAGEMENT</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Competitor Analysis – Yes
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Keyword Optimization – Yes
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Ad Copy Optimization – Yes
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;VALUE ADDS</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> ROI Analysis
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Landing Page Optimization
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;REPORTING</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Reports – Monthly
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcCancel className="tickIcon" /> Dedicated Account Manager
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Support – Email, Chat
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <p className="ppcBtn">Get Started</p>
                </td>
              </tr>
              <br />
            </table>
          </div>
          <div className="ppcPackage">
            <table>
              <tr>
                <th>Enterprise</th>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Campaign – 10
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> AD Groups – 20
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Ad Copies – Maximum 50
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> No. of Keywords-150
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Search Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Display Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Gmail Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Video Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Shopping Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> App Promotion Ads
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Remarketing List
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Conversion Tracking
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;PPC CAMPAIGN MANAGEMENT</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Competitor Analysis – Yes
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Keyword Optimization – Yes
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Ad Copy Optimization – Yes
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;VALUE ADDS</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> ROI Analysis
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Landing Page Optimization
                </td>
              </tr>
              <tr>
                <td>
                  <span>&nbsp;REPORTING</span>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Reports – Monthly
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Dedicated Account Manager
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                  <FcOk className="tickIcon" /> Support – Email, Chat
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <p className="ppcBtn">Get Started</p>
                </td>
              </tr>
              <br />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PPCPackage;

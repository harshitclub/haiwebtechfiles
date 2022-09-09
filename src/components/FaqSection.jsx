import React from 'react'
import '../Styles/components/FaqSection.css'
import digital from '../assets/digital.png'

import { styled } from '@mui/material/styles';
import {IoArrowForward} from 'react-icons/io5';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<IoArrowForward sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const FaqSection = () => {

    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="faqSection">
        <div className='faqLeft'>
            <h4>Bringing Action To Brands</h4>
            <h2>Choose What Matters To Your Business & Customers</h2>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Search Engine Optimization</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          SEO: What is it? Increasing your website's visibility in the organic search results of the major search engines is the essence of search engine optimization (SEO). Marketers successfully communicate with search engines what their website is about and why it should rank well in search engine results pages by using technical, on-page, and off-page SEO methods.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Social Media Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Connecting with your audience or clients and assisting them in better understanding your brand are the main goals of social media marketing. It is quite advantageous for the expansion of your business.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion'>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Pay Per Click</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pay-per-click, or PPC, is an internet marketing strategy where advertisers are charged a fee each time one of their adverts is clicked. In essence, it's a method of purchasing visitors to your website rather than making an effort to "win" those visitors naturally.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='accordion'>
        <AccordionSummary aria-controls="panel3d-content" id="panel4d-header">
          <Typography>Website For Business</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          One of the most intriguing benefits of having a website for your company is that it can boost lead generation and sales. When someone searches online and finds your organisation, they strive to learn more about your goods or services and the business overall.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <div className="faqRight">
        <img src={digital} alt=''/>
    </div>
    </div>
  )
}

export default FaqSection
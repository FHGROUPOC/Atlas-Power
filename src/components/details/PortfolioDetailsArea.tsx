"use client";
// src/components/PortfolioDetailsArea.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { ProjectDataType } from '@/data/portfolioData';

import protfolio_details_1 from "@/assets/img/protfolio_details_1.jpg"; 
import protfolio_details_2 from "@/assets/img/portfoliodetails_2.jpg"; 
import protfolio_details_3 from "@/assets/img/portfoliodetails_1.jpg"; 
import protfolio_details_4 from "@/assets/img/portfolio_solution_1.jpg"; 
import protfolio_details_5 from "@/assets/img/portfolio_solution_2.jpg"; 
import protfolio_details_6 from "@/assets/img/portfolio_solution_3.jpg"; 

interface PortfolioDetailsAreaProps {
  project: ProjectDataType;
}

const PortfolioDetailsArea: React.FC<PortfolioDetailsAreaProps> = ({ project }) => {
  // Local states for dates calendar, quantity and custom pricing hooks
  const [dateFrom, setDateFrom] = useState('2023-06-02');
  const [dateTo, setDateTo] = useState('2023-08-02');
  const [quantity, setQuantity] = useState('1');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false); // Processing state tracker

  // Handle button submission trigger via API
  const handleFormAction = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectTitle: project?.title,
          dateFrom,
          dateTo,
          quantity,
          price,
        }),
      });

      const resData = await response.json();

      if (resData.success) {
        alert('Email Sent Successfully! 🚀');
      } else {
        alert(`Failed to send email: ${resData.error}`);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong while dispatching mail network packets.');
    } finally {
      setLoading(false);
    }
  };

  // Safety Guard: Agar query parameter database object key se matching na ho
  if (!project) {
    return (
      <div className="container text-center text-white" style={{ padding: "200px 0" }}>
        <h2>Project Data Not Found</h2>
        <p className="text-white-50">Please check if the slug matches your portfolioDatabase keys exactly.</p>
      </div>
    );
  }

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                {project.title}
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <div className="cs_btn cs_style_2 anim_div_ShowZoom">
                <a target='_blank' rel="noreferrer" href={project.behanceLink || "https://behance.com"}   className="col cs_center">Behance</a>
                <a target='_blank' rel="noreferrer" href={project.dribbbleLink || "https://dribbble.com"}   className="col cs_center">Dribbble</a>
                <a target='_blank' rel="noreferrer" href={project.githubLink || "https://github.com"}   className="col cs_center">Github</a>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_100 cs_height_lg_60"></div>
 
      <section>
        <div className="container">
          <div className="anim_blog">
            <div className="cs_portfolio_details">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Client</p>
                    <h6 className="cs_title_text">
                      {project.client}
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Services</p>
                    <h6 className="cs_title_text">
                      {project.services}
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Date</p>
                    <h6 className="cs_title_text">
                      {project.date} <br /> {project.duration}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_75 cs_height_lg_45"></div>
 
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image src={protfolio_details_1} alt="protfolio_details_1" />
            </div>

            {/* ─── INPUT FORM SECTION WITH REAL CALENDARS & NODEMAILER TRIGGER ─── */}
            <div className="cs_height_50 cs_height_lg_30"></div>
            <div className="p-4 rounded-3 text-white" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="row gy-4 align-items-end">
                
                {/* 1. Single Box containing Dual Real Calendar Inputs */}
                <div className="col-md-6">
                  <label className="d-block mb-2 text-uppercase tracking-wider " style={{ fontSize: '12px', fontWeight: '600' ,color:'#ff6b00'}}>
                    Date Duration Range
                  </label>
                  <div className="d-flex align-items-center rounded p-2" style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.15)', height: '52px' }}>
                    <input 
                      type="date" 
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="bg-transparent border-0 text-white w-100 p-1 outline-none"
                      style={{ colorScheme: 'dark', cursor: 'pointer' }}
                    />
                    <span className="mx-2 text-muted" style={{ fontSize: '14px' }}>to</span>
                    <input 
                      type="date" 
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="bg-transparent border-0 text-white w-100 p-1 outline-none"
                      style={{ colorScheme: 'dark', cursor: 'pointer' }}
                    />
                  </div>
                </div>

                {/* 2. Quantity Input Box */}
                <div className="col-md-2">
                  <label className="d-block mb-2 text-uppercase tracking-wider " style={{ fontSize: '12px', fontWeight: '600',color:'#ff6b00' }}>
                    Quantity
                  </label>
                  <input 
                    type="number" 
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-100 p-3 rounded text-white"
                    style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.15)', outline: 'none', height: '52px' }}
                  />
                </div>

                {/* 3. Price Input Box */}
                {/* <div className="col-md-3">
                  <label className="d-block mb-2 text-uppercase tracking-wider " style={{ fontSize: '12px', fontWeight: '600',color:'#ff6b00' }}>
                    Price / Valuation
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter Price (e.g. $500)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-100 p-3 rounded text-white"
                    style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.15)', outline: 'none', height: '52px' }}
                  />
                </div> */}

                {/* 4. Submit Layout Link Styled as custom theme action */}
                <div className="col-md-3">
                  <Link href="#"
                    onClick={handleFormAction}
                    className={`cs_btn cs_style_1  ${loading ? 'disabled' : ''}`}
                    style={{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.6 : 1, textDecoration: 'none' }}
                  >
                    <span>{loading ? 'Sending...' : 'Submit Details'}</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
            {/* ──────────────────────────────────────────────────────── */}

            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">{project.challengesTitle}</h4>
                <p className="cs_text_style_body">
                  {project.challengesBody}
                </p>
              </div>
              <div className="cs_ul_ml">
                <ul>
                  {project.challengeList && project.challengeList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_75 cs_height_lg_45"></div>
 
      <div className="container">
        <div className="d-flex gap-2 gap-md-5">
          <div className="reveal">
            <Image src={protfolio_details_2} alt="portfoliodetails_2" />
          </div>
          <div className="reveal">
            <Image src={protfolio_details_3} alt="portfoliodetails_1" />
          </div>
        </div>
      </div> 
      <div className="cs_height_150 cs_height_lg_60"></div>
 
      <section>
        <div>
          <div className="container">
            <div className="cs_portfolio_details">
              <div className="cs_solutions_section anim_div_ShowDowns">
                <div>
                  <h4 className="cs_heading_text anim_heading_title">
                    Solutions
                  </h4>
                  <p className="cs_text_style_body">
                    {project.solutionsBody}
                  </p>
                </div>
                <div className="cs_solutions_section_img_show">
                  <div className="portfolio_solution_1 reveal">
                    <Image src={protfolio_details_4} alt="portfolio_solution_1" />
                  </div>
                  <div className="portfolio_solution_2 reveal">
                    <Image src={protfolio_details_5} alt="portfolio_solution_2" />
                  </div>
                  <div className="portfolio_solution_3 reveal">
                    <Image src={protfolio_details_6} alt="portfolio_solution_3" />
                  </div>
                </div>
                <div className="cs_img_footer_title cs_color_1 anim_text_upanddowns">
                  <p>The End - thank you stay with us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
 
      <div className="container">
        <div className="cs_portfolio_details">
          <div className="cs_section_next_prv anim_div_ShowZoom">
            <div className="cs_prv_btn">
              <a href="#">Previous</a>
            </div>
            <div>|</div>
            <div className="cs_next">
              <a href="#">Next Project</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
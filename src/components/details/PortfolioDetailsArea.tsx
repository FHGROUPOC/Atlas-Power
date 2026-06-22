"use client";
// src/components/PortfolioDetailsArea.tsx
import React, { useState } from "react";
// import img from 'next/img';
import Link from "next/link";
import { ProjectDataType } from "@/data/portfolioData";

import protfolio_details_1 from "@/assets/img/portfolio_solution_1.jpg";
import protfolio_details_2 from "@/assets/img/portfoliodetails_2.jpg";
import protfolio_details_3 from "@/assets/img/portfoliodetails_1.jpg";
import protfolio_details_4 from "@/assets/img/portfolio_solution_1.jpg";
import protfolio_details_5 from "@/assets/img/portfolio_solution_2.jpg";
import protfolio_details_6 from "@/assets/img/portfolio_solution_3.jpg";

interface PortfolioDetailsAreaProps {
  project: ProjectDataType;
}

const PortfolioDetailsArea: React.FC<PortfolioDetailsAreaProps> = ({
  project,
}) => {
  // Local states for dates calendar, quantity and custom pricing hooks
  const [dateFrom, setDateFrom] = useState("2023-06-02");
  const [dateTo, setDateTo] = useState("2023-08-02");
  const [quantity, setQuantity] = useState("1");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  // Helper functions to open system calendar automatically on wrapper click
  const openCalendarFrom = (e: React.MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget.querySelector(
      ".date-from-input",
    ) as HTMLInputElement;
    if (input && typeof input.showPicker === "function") {
      input.showPicker();
    }
  };

  const openCalendarTo = (e: React.MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget.querySelector(
      ".date-to-input",
    ) as HTMLInputElement;
    if (input && typeof input.showPicker === "function") {
      input.showPicker();
    }
  };

  // Handle button submission trigger via API
  const handleFormAction = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        alert("Email Sent Successfully! 🚀");
      } else {
        alert(`Failed to send email: ${resData.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while dispatching mail network packets.");
    } finally {
      setLoading(false);
    }
  };

  // Safety Guard: Agar query parameter database object key se matching na ho
  if (!project) {
    return (
      <div
        className="container text-center text-white"
        style={{ padding: "200px 0" }}
      >
        <h2>Project Data Not Found</h2>
        <p className="text-white-50">
          Please check if the slug matches your portfolioDatabase keys exactly.
        </p>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="date"]::-webkit-inner-spin-button { 
    cursor: pointer;
    transition: opacity 0.3s ease;
    filter: invert(53%) sepia(87%) saturate(2716%) hue-rotate(1deg) brightness(102%) contrast(106%);
  input[type="date"]::-webkit-calendar-picker-indicator:hover,
  input[type="date"]::-webkit-inner-spin-button:hover {
    opacity: 0.7;
  }
`}</style>
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.behanceLink || "https://behance.com"}
                  className="col cs_center"
                >
                  Behance
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.dribbbleLink || "https://dribbble.com"}
                  className="col cs_center"
                >
                  Dribbble
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.githubLink || "https://github.com"}
                  className="col cs_center"
                >
                  Github
                </a>
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
                    <h6 className="cs_title_text">{project.client}</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Services</p>
                    <h6 className="cs_title_text">{project.services}</h6>
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
              <img
                src={project.protfolio_details_1}
                alt="protfolio_details_1"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* ─── PREMIUM GLASSMORPHISM FORM CARD ─── */}
            <div className="cs_height_50 cs_height_lg_30"></div>
            <div
              className="p-4 p-md-5 rounded-4  position-relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="mb-4">
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Request Project Deployment
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    maxWidth: "560px",
                    margin: 0,
                  }}
                >
                  Please specify your preferred timeline and required capacity
                  units. Our team will review the parameters and dispatch a
                  finalized confirmation directly to your inbox.
                </p>
              </div>

              <div className="row gy-4 align-items-end">
                {/* 1. Date Range Split Boxes (Clickable full area) */}
                <div className="col-md-6">
                  <label
                    className="d-block mb-2 text-uppercase tracking-wider"
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#ff6b00",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Date Duration Range
                  </label>
                  <div className="row g-2">
                    {/* Date From Interactive Half */}
                    <div className="col-6">
                      <div
                        onClick={openCalendarFrom}
                        className="d-flex align-items-center rounded-3 px-3"
                        style={{
                          border: "1px solid #ff6b00",
                          height: "56px",
                          cursor: "pointer",
                          background: "transparent",
                          color: "var(--heading-color)",
                        }}
                      >
                        <input
                          type="date"
                          value={dateFrom}
                          onChange={(e) => setDateFrom(e.target.value)}
                          className="bg-transparent border-0 w-100  outline-none date-from-input"
                          style={{
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "500",
                            outline: "none",
                            color: "var(--heading-color)",
                          }}
                        />
                      </div>
                    </div>
                    {/* Date To Interactive Half */}
                    <div className="col-6">
                      <div
                        onClick={openCalendarTo}
                        className="d-flex align-items-center rounded-3 px-3"
                        style={{
                          border: "1px solid #ff6b00",
                          height: "56px",
                          cursor: "pointer",
                          background: "transparent",
                        }}
                      >
                        <input
                          type="date"
                          value={dateTo}
                          onChange={(e) => setDateTo(e.target.value)}
                          className="bg-transparent border-0 w-100  outline-none date-to-input "
                          style={{
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "500",
                            outline: "none",
                            color: "var(--heading-color)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Quantity Box */}
                <div className="col-md-3">
                  <label
                    className="d-block mb-2 text-uppercase tracking-wider"
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#ff6b00",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-100 px-3 rounded-3 "
                    style={{
                      border: "1px solid #ff6b00",
                      outline: "none",
                      height: "56px",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      background: "transparent",
                      color: "var(--heading-color)",
                    }}
                  />
                </div>

                {/* 3. Action Submit Button */}
                <div className="col-md-3">
                  <Link
                    href="#"
                    onClick={handleFormAction}
                    className={`w-100 d-flex justify-content-between align-items-center px-4 rounded-3`}
                    style={{
                      pointerEvents: loading ? "none" : "auto",
                      opacity: loading ? 0.6 : 1,
                      textDecoration: "none",
                      height: "56px",
                      background: loading ? "#333" : "#ff6b00",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      border: "none",
                    }}
                  >
                    <span>{loading ? "Sending..." : "Submit Details"}</span>
                    <svg
                      width="19"
                      height="13"
                      viewBox="0 0 19 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transition: "transform 0.3s ease" }}
                    >
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
                <h4 className="cs_heading_text anim_heading_title">
                  {project.challengesTitle}
                </h4>
                <p className="cs_text_style_body">{project.challengesBody}</p>
              </div>
              <div className="cs_ul_ml">
                <ul>
                  {project.challengeList &&
                    project.challengeList.map((item, idx) => (
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
            <img
              src={project.protfolio_details_2}
              style={{ width: "983px", height: "405px" }}
              alt="portfoliodetails_2"
            />
          </div>
          <div className="reveal">
            <img
              src={project.protfolio_details_3}
              style={{ width: "307px", height: "405px" }}
              alt="portfoliodetails_1"
            />
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
                  <p className="cs_text_style_body">{project.solutionsBody}</p>
                </div>
                <div className="cs_solutions_section_img_show">
                  <div className="portfolio_solution_1 reveal">
                    <img
                      src={project.protfolio_details_4}
                      alt="portfolio_solution_1"
                    />
                  </div>
                  <div className="portfolio_solution_2 reveal">
                    <img
                      src={project.protfolio_details_5}
                      alt="portfolio_solution_2"
                    />
                  </div>
                  <div className="portfolio_solution_3 reveal">
                    <img
                      src={project.protfolio_details_6}
                      alt="portfolio_solution_3"
                    />
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

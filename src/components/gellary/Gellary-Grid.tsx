'use client'; 

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Gallery.module.css';

const galleryData = {
  projects: [
    {
      id: "01",
      title: "Cozy Living Room",
      description: "Exploring Excellence in Every Meticulous Design Detail Exploring Excellence in Every Meticulous Design Detail",
      link: "/project-single",
      image: "https://architronix-nextjs.vercel.app/_next/static/media/gallery-1.db87de5d.jpg"
    },
    {
      id: "02",
      title: "Luxurious Living Room",
      description: "Exploring Excellence in Every Meticulous Design Detail Exploring Excellence in Every Meticulous Design Detail",
      link: "/project-single",
      image: "https://architronix-nextjs.vercel.app/_next/static/media/gallery-2.51858c6d.jpg"
    },
    {
      id: "03",
      title: "Elegant Bedroom",
      description: "Exploring Excellence in Every Meticulous Design Detail Exploring Excellence in Every Meticulous Design Detail",
      link: "/project-single",
      image: "https://architronix-nextjs.vercel.app/_next/static/media/gallery-3.a9eaa432.jpg"
    },
    {
      id: "04",
      title: "Rustic Comfort",
      description: "Exploring Excellence in Every Meticulous Design Detail Exploring Excellence in Every Meticulous Design Detail",
      link: "/project-single",
      image: "https://architronix-nextjs.vercel.app/_next/static/media/gallery-4.63baaf04.jpg"
    },
    {
      id: "05",
      title: "Urban Living Space",
      description: "Exploring Excellence in Every Meticulous Design Detail Exploring Excellence in Every Meticulous Design Detail",
      link: "/project-single",
      image: "https://architronix-nextjs.vercel.app/_next/static/media/gallery-5.6b73ed1c.jpg"
    }
  ]
};

export default function Gallery() {
  const { projects } = galleryData;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="position-relative overflow-hidden">
      <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
      {/* Accordion Flex Container */}
      <div 
        className={`d-flex flex-column flex-sm-row flex-grow-1 w-100 flex-lg-nowrap  flex-wrap ${styles.galleryContainer}`}
        onMouseLeave={() => setHoveredId(null)} 
      >
        {projects.map((project) => {
          // Defaults to true for item "02" when hoveredId is null
          const isActive = hoveredId === project.id || (hoveredId === null && project.id === "02");

          return (
            <div 
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              className={`position-relative overflow-hidden p-4 d-flex flex-column justify-content-between flex-grow-1 ${styles.galleryItem} ${isActive ? styles.activeItem : ''}`}
            >
              <div className={styles.overlay} />

              <h3 className={`display-4 fw-bold text-transparent z-3 ${styles.idNumber}`}>
                {project.id}
              </h3>
              
              <div className={`d-flex flex-column flex-xl-row justify-content-between align-items-xl-end gap-3 text-white z-3 ${styles.contentBlock}`}>
                <Link href={project.link} className="h3 fw-bold text-white text-decoration-none mb-0" style={{ minWidth: "226px" }}>
                  {project.title}
                </Link>
                <p className={`small text-white m-0 ${styles.description}`}>
                  {project.description}
                </p>
              </div>

              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 576px) 100vw, 40vw"
                className={`object-fit-cover position-absolute top-0 start-0 ${styles.bgImage}`}
                priority={project.id === "02"}
              />
            </div>
          );
        })}
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </section>
  );
}
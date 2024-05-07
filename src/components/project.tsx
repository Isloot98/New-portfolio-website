"use client";

import Link from "next/link";
import Heading from "./heading";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./project.module.css";

type ProjectDetails = {
  projectName: string;
  projectDescription: string;
  techUsed: Array<string>;
  timeTaken: string;
  url: string;
  imagePath: string;
  className?: string;
};

const Project = ({
  projectName,
  projectDescription,
  techUsed,
  timeTaken,
  url,
  imagePath,
  className,
}: ProjectDetails) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectContentRef = useRef(null);
  const projectDescriptionRef = useRef(null);
  const projectHeightsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (isHovered) {
      tl.fromTo(
        projectHeightsRef.current,
        { opacity: 1, scale: 1 },
        {
          opacity: 1,
          scale: 1.1,
          ease: "circ.out",
          duration: 0.1,
        },
        0.1
      )
        .fromTo(
          projectDescriptionRef.current,
          { opacity: 0, y: 20, scale: 1.2 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
          }
        )
        .fromTo(
          projectContentRef.current,
          { opacity: 0, y: 20, scale: 1.2 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
          }
        );
    } else {
      tl.to(projectHeightsRef.current, {
        scale: 1,
        ease: "circ.out",
        duration: 0.1,
      });
    }
  }, [isHovered]);

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const renderTechUsed = () => {
    if (isHovered) {
      return (
        <div
          ref={projectContentRef}
          className={`col-start-2 flex flex-col items-end text-right p-4 ${styles.projectContent}`}
        >
          <ul>
            <Heading as="h5" size="sm">
              Tech Used
            </Heading>
            {techUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <p className="mt-4 text-left">Time Taken: {timeTaken}</p>
        </div>
      );
    }
    return null;
  };

  const renderDescription = () => {
    if (isHovered) {
      return (
        <div className="col-start-1">
          <p ref={projectDescriptionRef}>{projectDescription}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Link
      href={url}
      className={`relative ${className} ${styles.link} transition-height duration-500 ease-in-out h-25 hover:h-75 ${styles.projectContainer} flex flex-col  md:grid md:grid-cols-2 border-t-4 border-slate-400  border-solid max-w-[80%] mx-auto mt-10 justify-start`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={projectHeightsRef}
    >
      <div
        className={`col-start-1 p-4 ${styles.projectContent}`}
        style={{ opacity: 1 }}
      >
        <Heading as="h3" size="md" className="mb-4">
          {projectName}
        </Heading>
        {renderDescription()}
      </div>
      {renderTechUsed()}
    </Link>
  );
};

export default Project;

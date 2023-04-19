/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/study.jpg";
const imageAltText = "desktop with books and laptop";
/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "JavaScript Evolution",
    description:
      "In this reading, you will learn about the history of JavaScript and the importance of ECMA (European Computer Manufacturers Association) and ECMAScript.",
    url: "https://medium.com/@hammadhassan365/javascript-evolution-733d9100f2f0",
  },
  {
    title: "Uncover job opportunities in WEB and Mobile app development",
    description:
      "Learning how to program in JavaScript helps you prepare for a wide range of job opportunities. This is in part because it expands the possibilities of what you can build as a developer.",
    url: "https://medium.com/@hammadhassan365/uncover-job-opportunities-in-web-a-859e1055458",
  },
  {
    title: "What is Bootstrap? A Short Look",
    description:
      "Bootstrap is often described as a way to “build fast, responsive sites” and it is a “feature-packed, powerful, and extensible frontend toolkit”.",
    url: "https://medium.com/@hammadhassan365/what-is-bootstrap-a-short-look-8040c4ad4569",
  },
  {
    title: "4 Week Course in 4 Days | Introduction to Git and GitHub by Google",
    description:
      "Introduction to Git and GitHub is a 4-week course offered by Google on the Coursera e-learning platform. Here is the summary of the course",
    url: "https://medium.com/@hammadhassan365/4-week-course-in-4-days-introduction-to-git-and-github-by-google-66d672304748",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

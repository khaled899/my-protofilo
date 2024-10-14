import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Wooster.png";
import IMG2 from "../../assets/University.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/Games.png";
import IMG6 from "../../assets/Education.png";
import IMG7 from "../../assets/Movies.png";
import IMG8 from "../../assets/Paralex.png";
import IMG9 from "../../assets/course.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Wooster Template",
    github: "https://github.com/khaled899/Wooster",
    URL: "https://khaled899.github.io/Wooster/",
    status: "Live",
  },
  {
    id: 2,
    image: IMG2,
    title: "University React App [HTML , SCSS , React.js]",
    github: "https://github.com/khaled899/University-.git",
    URL: "/",
    status: "Live Demo",
  },
  {
    id: 3,
    image: IMG3,
    title: "Kasper CSS and HTML Template",
    github: "https://github.com/khaled899/Kasper",
    URL: "https://khaled899.github.io/Kasper/",
    status: "Live Demo",
  },
  {
    id: 4,
    image: IMG4,
    title: "Games Template",
    github: "https://github.com/khaled899/Games",
    URL: "https://khaled899.github.io/Games/",
    status: "Live Demo",
  },
  {
    id: 5,
    image: IMG6,
    title: "Education Template",
    github: "https://github.com/khaled899/Equcation",
    URL: "https://khaled899.github.io/Equcation/",
    status: "Live Demo",
  },
  {
    id: 6,
    image: IMG7,
    title: "Movies HTML , CSS , JavaScript , API",
    github: "https://github.com/khaled899/Movies",
    URL: "https://khaled899.github.io/Movies/",
    status: "Live Demo",
  },
  {
    id: 7,
    image: IMG8,
    title: "Paralex HTML , CSS , JavaScript",
    github: "https://github.com/khaled899/Paralex.git",
    URL: "https://khaled899.github.io/Paralex/",
    status: "Live Demo",
  },
  {
    id: 8,
    image: IMG9,
    title: "Courses-Static-Version",
    github: "https://github.com/khaled899/Courses-Static-Version-.git",
    URL: "https://khaled899.github.io/Courses-Static-Version-/",
    status: "Live Demo",
  },
];
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, URL, status }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="pcta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={URL} className="btn btn-primary" target="_blank" rel="noreferrer">
                  {status}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

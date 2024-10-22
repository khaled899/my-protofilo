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
import IMG10 from "../../assets/Ella.png";
import IMG11 from "../../assets/amit.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Wooster Template [HTML,CSS]",
    github: "https://github.com/khaled899/Wooster",
    URL: "https://khaled899.github.io/Wooster/",
    status: "Live Demo",
  },
  {
    id: 2,
    image: IMG2,
    title: "University [HTML , SCSS , React.js]",
    github: "https://github.com/khaled899/University-.git",
  },
  {
    id: 3,
    image: IMG3,
    title: "Kasper [HTML,CSS]",
    github: "https://github.com/khaled899/Kasper",
    URL: "https://khaled899.github.io/Kasper/",
    status: "Live Demo",
  },
  {
    id: 4,
    image: IMG4,
    title: "Games Template [HTML,CSS]",
    github: "https://github.com/khaled899/Games",
    URL: "https://khaled899.github.io/Games/",
    status: "Live Demo",
  },
  {
    id: 5,
    image: IMG6,
    title: "Education Template [HTML,CSS]",
    github: "https://github.com/khaled899/Equcation",
    URL: "https://khaled899.github.io/Equcation/",
    status: "Live Demo",
  },
  {
    id: 6,
    image: IMG7,
    title: "Movies [HTML , CSS , JavaScript , API]",
    github: "https://github.com/khaled899/Movies",
    URL: "https://khaled899.github.io/Movies/",
    status: "Live Demo",
  },
  {
    id: 7,
    image: IMG8,
    title: "Paralex [HTML , CSS , JavaScript]",
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
  {
    id: 9,
    image: IMG10,
    title: "Ella-Mart [Vue.js]",
    github: "https://github.com/khaled899/Ella-Mart.git",
    URL: "https://ella-mart.web.app/",
    status: "Live Demo",
  },
  {
    id: 8,
    image: IMG11,
    title: "AMIT-Learning",
    github: "",
    URL: "https://amit-learning.com/",
    status: "Live Demo",
  },
];
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map((data) => {
          return (
            <article key={data.id} className="portfolio-item">
              <div className="image">
                <img src={data.image} alt={data.title} />
              </div>
              <h3>{data.title}</h3>
              <div className="pcta">
                {data.github ? (
                  <a href={data.github} className="btn" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : (
                  ""
                )}
                {data.URL ? (
                  <a href={data.URL} className="btn btn-primary" target="_blank" rel="noreferrer">
                    {data.status}
                  </a>
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

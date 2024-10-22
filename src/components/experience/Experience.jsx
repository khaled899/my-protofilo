import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-front">
          <h3>Frontend Developer</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Vue.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Nuxt.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Pinia.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Redux.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Vuetlify.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Developer</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

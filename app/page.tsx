"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  type IFORM_EVENT_HANDLER = React.FormEvent<HTMLFormElement> | any | undefined;

  const sendEmail = (e: IFORM_EVENT_HANDLER) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lmip9i2",
        "template_w7k7903",
        e.target,
        "CCrRzZO6FcWLkSo3L"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setShowModal(true);
        setModalMessage("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setShowModal(true);
        setModalMessage("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="App">
      <header>
        <h1>DEVANSHU KEHEMKA</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              {` Hello! I'm a final year B.Tech student from the Computer Science
              and Engineering (CSE) department, specializing in Artificial
              Intelligence (AI) and Machine Learning (ML) 🤖. I have a keen
              interest in solving real-world problems using technology and am
              passionate about exploring the fascinating world of algorithms and
              data structures 🔍.`}
            </p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            <div className="skill">
              <i className="fab fa-react"></i>
              <span>Competitive Programming</span>
            </div>
            <div className="skill">
              <i className="fab fa-node-js"></i>
              <span>HTML-CSS-Javascript</span>
            </div>
            <div className="skill">
              <i className="fab fa-html5"></i>
              <span>Office Automation package</span>
            </div>
            <div className="skill">
              <i className="fab fa-html5"></i>
              <span>Machine Learning</span>
            </div>
            <div className="skill">
              <i className="fab fa-html5"></i>
              <span>Design & Analysis of Algorithms</span>
            </div>
            <div className="skill">
              <i className="fab fa-html5"></i>
              <span>Data Analysis</span>
            </div>
            <div className="skill">
              <i className="fab fa-html5"></i>
              <span>Figma & Illustrator</span>
            </div>
            {/* Add more skills here */}
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-card">
            <Image
              width={100}
              height={100}
              src="/img/bankruptcy.jpg"
              alt="Project 1"
            />
            <div className="project-info">
              <h3>
                Enhancing Bankruptcy algorithms using multiple classification
                algorithms
              </h3>
              <p>
                We have trained the Taiwan bankruptcy dataset on multiple
                classification algorithms to compare the accuracy. Also have
                plotted multiple graphs for the same.
              </p>
            </div>
          </div>
          <div className="project-card">
            <Image
              width={100}
              height={100}
              src="/img/salon.jpg"
              alt="Project 1"
            />
            <div className="project-info">
              <h3> Chop Shop- Salon at your Fingertips</h3>
              <p>
                Fully integrated web development project with the Ml algorithm,
                having numerous components, including the ability for customers
                to schedule appointments remotely that fit their schedules or
                receive product recommendations for hair related problems
              </p>
            </div>
          </div>
          <div className="project-card">
            <Image
              width={100}
              height={100}
              src="/img/ACL.jpg"
              alt="Project 1"
            />
            <div className="project-info">
              <h3>
                {" "}
                ACL Tear detection and Classification using Deep Learning
              </h3>
              <p>
                For the analysis of medical imaging, I have employed the CNN
                method for ACL tear identification
              </p>
            </div>
          </div>
          <div className="project-card">
            <Image
              width={100}
              height={100}
              src="/img/isa.png"
              alt="Project 1"
            />
            <div className="project-info">
              <h3>Emography- Graphical Password Authenticator</h3>
              <p>
                A secure user authentication method where a user can safeguard
                his files with emojified passwords
              </p>
            </div>
          </div>
          <div className="project-card">
            <Image
              width={100}
              height={100}
              src="/img/cartozi.jpg"
              alt="Project 1"
            />
            <div className="project-info">
              <h3>CARTOOZI- Cartoonifying your meets</h3>
              <p>
                A web application to cartoonize and emojify our virtual meets
                such as google meet, MS teams etc. by detecting our emotions.
              </p>
            </div>
          </div>
          <div className="project-card">
            <Image
              width={100}
              height={100}
              src="/img/firr.jpg"
              alt="Project 1"
            />
            <div className="project-info">
              <h3> Intelligent fire detection for nuclear families</h3>
              <p>
                The model can be used to create a system that not only sounds
                the alarm at home, but also alerts family members who are
                simultaneously away from the house. The parents can also access
                the report on their own through the mobile app by login as a
                user.
              </p>
            </div>
          </div>

          {/* Add more project cards here */}
        </section>

        <section id="github-button">
          <a
            href="https://github.com/devanshu-25-04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaGithub /> View My GitHub
            </button>
          </a>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            {`If you're interested in working together or have any questions, feel
            free to get in touch!`}
          </p>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        message={modalMessage}
      />
    </div>
  );
}

export default App;

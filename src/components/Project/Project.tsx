import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import { toast, Bounce } from "react-toastify";


export function Project() {

  const githubAlert = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.error("Source code not found on GitHub", {
      position: "bottom-center",
      transition: Bounce,
    });
  };
  const liveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.error("Live link not found on the Server", {
      position: "bottom-center",
      transition: Bounce,
    });
  };
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="/" target="_blank" rel="noreferrer" onClick={githubAlert}>
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://sdmipl.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>SDMIPL - Dynamic Website & Admin Dashboard</h3>
              <hr />
              <p> I worked as a React.js Developer Intern where I helped convert a static company website into a dynamic one using React, PHP, and MySQL. I built an admin dashboard for managing content like team info, office details, leads, and careers. I also integrated APIs to show real-time data, handled content uploads, and worked with the backend team to ensure everything ran smoothly. The site was deployed on Hostinger and focused mainly on lead generation and client interaction.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React.js</li> <li>Laravel</li> <li>MySql</li> <li>Hostinger</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="/" target="_blank" rel="noreferrer" onClick={githubAlert}>
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://beatimo.ca" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Beatimo Services Conseils & Capital - Lead Management System</h3>
              <hr />
              <p>
                I worked on a client project as a MERN Stack Developer, mainly focusing on lead management. I turned the client's design ideas into working web pages using React, making sure the site was easy to use and looked good on all devices. I built an admin dashboard to help the client view and manage leads easily. On the backend, I set up features to save and fetch data using Node.js and MongoDB. I also deployed the full project and made sure everything worked smoothly.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js </li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="/" target="\_blank" rel="noreferrer" onClick={githubAlert}>
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="/" target="\_blank" rel="noreferrer" onClick={liveLink}>
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>School Management System (Company Product)</h3>
              <hr />
              <p>
                As a MERN Stack Developer in a group project, I helped build a school management web app with role-based login for admins, teachers, and students. I worked on features like expense tracking, exam scheduling, bus route management, and attendance for both teachers and students. We also added a feature to store school documents digitally instead of on paper, which helped reduce operational costs and made access easier. Our goal was to make daily school tasks simpler and more organized.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>

              <div className="project-links">
                <a href="https://github.com/Hritik-22/chatbot-MERN-stack" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://chatbot-mern-stack-pi.vercel.app " target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Chintu Chatbot | Ai Intigration Using MERN and Gemini Api v1.5</h3>
              <hr />
              <p>
                Chintu Chatbot AI is a web app that gives instant answers to user questions using AI. It is powered by the Gemini 1.5 model for generating smart responses. New users can try it for free 5 times, and then they are asked to log in. For secure login, I used OAuth 2.0, and the app saves user history after login so they can see past questions.

                On the frontend, I used Material UI to design a clean and modern interface inspired by ChatGPT, DeepSeek, and Gemini AI.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.JS</li>
                <li>Express.JS</li>
                <li>MongoDB</li>
                <li>Google Cloud</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/Hritik-22/Blogify" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://blogify-ten-pearl.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Blogify | A Full-Stack Blog App Built for Seamless Content Sharing</h3>
              <hr />
              <p>Blogify is a full-stack blogging app where users can read blogs without logging in and create, update, or delete their own blogs after login. It features role-based login with admins managing categories and users. Users can reset passwords via mobile OTP, get AI help for writing, and update profiles with caching for better performance. The app uses Cloudinary for image handling and includes pagination for smoother browsing. A contact form lets users send queries to the admin. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="/" target="\_blank" rel="noreferrer" onClick={githubAlert}>
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="/" target="\_blank" rel="noreferrer" onClick={liveLink}>
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-commarce Project using MERN Stack & Stripe Payment Gateway</h3>
              <hr />
              <p>I built an e-commerce web application where users can browse products, filter by price, add items to their cart, and place orders. The app features secure user authentication using JWT and authorization via cookies. It includes inventory management, Stripe integration for secure payments, and the ability for users to save delivery addresses. An admin dashboard is provided to manage products, inventory, and user roles. I also integrated Cloudinary for optimized image storage and fast delivery.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.JS</li>
                <li>Redux-toolkit</li>
                <li>Express.Js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="/" target="\_blank" rel="noreferrer" onClick={githubAlert}>
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="/" target="\_blank" rel="noreferrer" onClick={liveLink}>
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ubers Clone | A Taxi booking app Using MERN & Apache Kafka (working)</h3>
              <hr />
              <p>Working ...</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.JS</li>
                <li>Redux-toolkit</li>
                <li>Express.Js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="/" target="\_blank" rel="noreferrer" onClick={githubAlert}>
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="/" target="\_blank" rel="noreferrer" onClick={liveLink}>
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Chatting App | A messenger app Using MERN & Socket.io (working)</h3>
              <hr />
              <p> Working ...</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.JS</li>
                <li>Redux-toolkit</li>
                <li>Express.Js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomInUp">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="/" target="\_blank" rel="noreferrer" onClick={githubAlert}>
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="/" target="\_blank" rel="noreferrer" onClick={liveLink}>
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sign Language Translator | Using TenserFlow and MERN (Working)</h3>
              <hr />
              <p> Working ...</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.JS</li>
                <li>Redux-toolkit</li>
                <li>Express.Js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}
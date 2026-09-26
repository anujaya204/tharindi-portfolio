import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaPython,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import "./App.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const sectionItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardHover = {
  y: -6,
  scale: 1.02,
};

const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

const skillIcons = {
  Python: FaPython,
  Django: SiDjango,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  SQL: FaDatabase,
  Git: FaGitAlt,
};

function SectionHeading({ children }) {
  return (
    <motion.h2 variants={sectionItemVariants} className="section-heading">
      {children}
    </motion.h2>
  );
}

function App() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setShouldAnimate(!mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className="portfolio">
      <nav>
        <div className="logo">
          <span className="logo-mark">&lt;/&gt;</span> Tharindi Anuththara
        </div>

        <div className="nav-links">
          <motion.a href="#home" whileHover={{ scale: 1.04 }}>Home</motion.a>
          <motion.a href="#about" whileHover={{ scale: 1.04 }}>About</motion.a>
          <motion.a href="#skills" whileHover={{ scale: 1.04 }}>Skills</motion.a>
          <motion.a href="#projects" whileHover={{ scale: 1.04 }}>Projects</motion.a>
          <motion.a href="#education" whileHover={{ scale: 1.04 }}>Education</motion.a>
          <motion.a href="#experience" whileHover={{ scale: 1.04 }}>Leadership &amp; Involvement</motion.a>
          <motion.a href="#certificates" whileHover={{ scale: 1.04 }}>Certificates</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.04 }}>Contact</motion.a>
        </div>

        <div className="social-links">
          <motion.a
            href="https://github.com/anujaya204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub aria-hidden="true" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tharindi-anuththara-b4b98936b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin aria-hidden="true" />
          </motion.a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <motion.div className="hero-atmosphere" aria-hidden="true">
            <motion.span
              className="hero-orb orb-purple"
              animate={shouldAnimate ? { x: [-12, 18, -12], y: [8, -14, 8] } : undefined}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="hero-orb orb-blue"
              animate={shouldAnimate ? { x: [14, -16, 14], y: [-8, 14, -8] } : undefined}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.span
              className="ambient-marker ambient-code"
              animate={shouldAnimate ? { y: [0, -12, 0], opacity: [0.2, 0.4, 0.2] } : undefined}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >&lt;/&gt;</motion.span>
            <motion.span
              className="ambient-marker ambient-cursor"
              animate={shouldAnimate ? { y: [0, 8, 0], opacity: [0.15, 0.35, 0.15] } : undefined}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >_</motion.span>
            <motion.span
              className="ambient-marker ambient-signal"
              animate={shouldAnimate ? { y: [0, -7, 0], opacity: [0.12, 0.28, 0.12] } : undefined}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >//</motion.span>
          </motion.div>

          <motion.div
            className="hero-content"
            initial={shouldAnimate ? "hidden" : false}
            animate={shouldAnimate ? "visible" : false}
            variants={heroVariants}
          >
            <motion.p className="terminal-text" variants={heroItemVariants}>
              &gt; Hi, I'm
            </motion.p>

            <motion.h1 variants={heroItemVariants}>
              Tharindi <span>Anuththara</span>
            </motion.h1>

            <motion.h2 variants={heroItemVariants}>
              Software Engineering Undergraduate
            </motion.h2>

            <motion.p className="hero-description" variants={heroItemVariants}>
              I'm a third-year Software Engineering undergraduate at NSBM Green University, turning ideas into working software from planning a system's structure to building and shipping the final product.
            </motion.p>

            <motion.div className="buttons" variants={heroItemVariants}>
              <motion.a
                href="#projects"
                className="primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-photo"
            initial={shouldAnimate ? { opacity: 0, x: 35, scale: 0.96 } : false}
            animate={shouldAnimate ? { opacity: 1, x: 0, scale: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mesh mesh-one"
              animate={shouldAnimate ? { x: [-8, 12, -8], y: [8, -16, 8] } : undefined}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="mesh mesh-two"
              animate={shouldAnimate ? { x: [10, -8, 10], y: [-6, 12, -6] } : undefined}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <div className="developer-badge">&lt; Software Engineer /&gt;</div>

            <motion.div
              className="photo-frame"
              animate={shouldAnimate ? { y: [0, -8, 0] } : undefined}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {!imageLoaded && <span className="photo-skeleton" aria-hidden="true" />}
              <img
                src="/profile/profile.png"
                alt="Tharindi Anuththara"
                width="318"
                height="388"
                loading="eager"
                fetchPriority="high"
                className={imageLoaded ? "is-loaded" : ""}
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </motion.div>
        </section>

        <motion.div
          className="section-motion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <section id="about">
            <SectionHeading>About Me</SectionHeading>

            <motion.div className="about-content" variants={sectionItemVariants}>
              <p>
                I'm Tharindi Anuththara, a third-year Software Engineering undergraduate at NSBM Green University, Sri Lanka. I enjoy turning ideas into working software, from planning how a system should be structured to building and testing the final product.
              </p>

              <p>
                My recent projects reflect this. I built FinTrack, a personal finance tracker using Django, and developed a hotel management ERP system to handle real-world business operations. Working on these taught me how to think beyond just writing code and understanding data flow, structuring a project cleanly, and making decisions that hold up as an application grows.
              </p>

              <p>
                Beyond coursework, I'm actively involved in NSBM's Association of Software Engineering and IEEE, where I've taken on organizational and leadership roles alongside my studies and experience that's shaped how I communicate, collaborate, and manage responsibility within a team.
              </p>

              <p>
                I'm currently focused on strengthening my foundation across the full development lifecycle, and I'm looking for opportunities where I can apply what I've learned, contribute meaningfully to real projects, and keep growing as an engineer.
              </p>
            </motion.div>
          </section>
        </motion.div>

        <motion.div
          className="section-motion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <section id="skills">
            <SectionHeading>Skills</SectionHeading>

          <motion.div className="skill-category" variants={sectionItemVariants}>
            <h3>Programming &amp; Development</h3>

            <motion.div className="skills" variants={staggerVariants}>
              {["Python", "Django", "HTML", "CSS", "JavaScript", "SQL"].map(
                (skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <motion.span
                      className="skill-pill"
                      key={skill}
                      variants={sectionItemVariants}
                      whileHover={cardHover}
                      whileTap={{ scale: 0.98 }}
                      transition={springTransition}
                    >
                      <Icon aria-hidden="true" />
                      <span>{skill}</span>
                    </motion.span>
                  );
                },
              )}
            </motion.div>
          </motion.div>

          <motion.div className="skill-category" variants={sectionItemVariants}>
            <h3>Tools</h3>

            <motion.div className="skills" variants={staggerVariants}>
              <motion.span
                className="skill-pill"
                variants={sectionItemVariants}
                whileHover={cardHover}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
              >
                <FaGitAlt aria-hidden="true" />
                <span>Git</span>
              </motion.span>
            </motion.div>
          </motion.div>
          </section>
        </motion.div>

        <motion.div
          className="section-motion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <section id="projects">
            <SectionHeading>Projects</SectionHeading>

          <motion.div className="project-grid" variants={staggerVariants}>
            <motion.article
              className="project-card"
              variants={sectionItemVariants}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
            >
              <div className="project-visual project-visual-skillnet" aria-hidden="true" />
              <div className="project-card-body">
                <span className="project-type">PERSONAL PROJECT</span>

                <h3>FinTrack</h3>

                <p>
                  A personal finance tracker built with Django, helping users
                  manage and monitor their personal finances.
                </p>

                <div className="project-tech">
                  <span>Django</span>
                  <span>Python</span>
                  <span>Personal Project</span>
                </div>

                <motion.a
                  href="https://github.com/anujaya204/FinTrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub <span className="project-arrow">→</span>
                </motion.a>
              </div>
            </motion.article>

            <motion.article
              className="project-card"
              variants={sectionItemVariants}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
            >
              <div className="project-visual project-visual-hotel" aria-hidden="true" />
              <div className="project-card-body">
                <span className="project-type">PERSONAL PROJECT</span>

                <h3>Hotel Grand ERP System</h3>

                <p>
                  A hotel management ERP system built with Node.js and Express,
                  handling core hotel operations through a working prototype with
                  database integration.
                </p>

                <div className="project-tech">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>Personal Project</span>
                </div>

                <motion.a
                  href="https://github.com/anujaya204/Hotel-Grand-ERP-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub <span className="project-arrow">→</span>
                </motion.a>
              </div>
            </motion.article>
          </motion.div>
          </section>
        </motion.div>

        <motion.div
          className="section-motion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <section id="education">
            <SectionHeading>Education</SectionHeading>

          <motion.div
            className="education-card"
            variants={sectionItemVariants}
            whileHover={cardHover}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
          >
            <div className="education-item">
              <span className="education-label">CURRENT</span>

              <h3>NSBM Green University</h3>

              <p className="education-degree">BSc (Hons) Software Engineering</p>

              <p>3rd Year Undergraduate</p>
            </div>

            <div className="education-item">
              <span className="education-label">SCHOOL</span>

              <h3>Don Pedrick College, Horana</h3>

              <p>School Education</p>
            </div>
          </motion.div>
          </section>
        </motion.div>

        <motion.div
          className="section-motion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <section id="experience">
            <SectionHeading>Leadership &amp; Involvement</SectionHeading>

            <motion.div className="experience-card" variants={sectionItemVariants}>
              {[
                {
                  organization: "IEEE",
                  location: "",
                  roles: [["Member", "August 2025 - Present", true, "Engaging with IEEE's global community of engineering students and professionals."]],
                },
                {
                  organization: "IEEE Women in Engineering",
                  location: "",
                  roles: [["Member", "August 2025 - Present", true, "Supporting initiatives that promote women's participation and growth in engineering fields."]],
                },
                {
                  organization: "Association of Software Engineering - NSBM",
                  location: "Homagama",
                  roles: [
                    ["Secretary Lead - Subcommittee 25", "July 2025 - March 2026", false, "Coordinated subcommittee activities and documentation for the association's ongoing initiatives."],
                    ["Member", "July 2025 - Present", true, "Represented software engineering students and contributed to society-led technical activities."],
                  ],
                },
                {
                  organization: "NFORCE Club",
                  location: "Homagama",
                  roles: [
                    ["Assistant Director of Event Management", "March 2026 - May 2026", false, "Helped plan and organize club events, coordinating logistics and team efforts."],
                    ["Member", "July 2025 - September 2026", true, "Active member contributing to club activities and events at NSBM."],
                  ],
                },
              ].map(({ organization, location, roles }) => (
                <div className="experience-organization" key={organization}>
                  <div className="experience-organization-heading">
                    <h3>{organization}</h3>
                    {location && <span className="experience-location">{location}</span>}
                  </div>

                  <div className="experience-roles">
                    {roles.map(([title, period, current, description]) => (
                      <div className="experience-role" key={`${organization}-${title}`}>
                        <span className={`experience-label${current ? " current" : ""}`}>
                          {current ? "CURRENT" : "ROLE"}
                        </span>
                        <div>
                          <h4>{title}</h4>
                          <p>{period}</p>
                          <p className="experience-description">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </section>
        </motion.div>

        <motion.div
          className="section-motion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <section id="certificates">
            <SectionHeading>Certificates</SectionHeading>

            <motion.div className="certificates-grid" variants={staggerVariants}>
              {[
                ["Exploring Networking with Cisco Packet Tracer", "Cisco", "CERTIFICATE"],
                ["Introduction to DevOps and Site Reliability Engineering (LFS162)", "The Linux Foundation", "CERTIFICATE"],
                ["Orchestrate September 2026", "Hackerrank", "CERTIFICATE"],
                ["Getting Started with Cisco Packet Tracer", "Cisco", "CERTIFICATE"],
              ].map(([title, issuer, badge]) => (
                <motion.article
                  className="certificate-card"
                  key={title}
                  variants={sectionItemVariants}
                  whileHover={cardHover}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransition}
                >
                  <span className="certificate-badge">{badge}</span>
                  <h3>{title}</h3>
                  {issuer && <p>{issuer}</p>}
                </motion.article>
              ))}
            </motion.div>
          </section>
        </motion.div>

        <motion.div
          className="section-motion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <section id="contact">
            <SectionHeading>Let's Connect</SectionHeading>

          <motion.p variants={sectionItemVariants}>
            I'm always open to connecting, discussing software projects,
            internship opportunities, and learning experiences.
          </motion.p>

          <motion.div className="contact-links" variants={staggerVariants}>
            <motion.a
              href="mailto:tjayasena64@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              <span className="contact-label">EMAIL</span>
              tjayasena64@gmail.com
            </motion.a>

            <motion.a
              href="https://github.com/anujaya204"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              <span className="contact-label">GITHUB</span>
              github.com/anujaya204
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tharindi-anuththara-b4b98936b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
            >
              <span className="contact-label">LINKEDIN</span>
              Tharindi Anuththara
            </motion.a>
          </motion.div>
          </section>
        </motion.div>
      </main>

      <footer>
        <p>© 2026 Tharindi Anuththara. Built with React.</p>

        <p className="footer-code">&lt;/&gt; Software Engineering</p>
      </footer>
    </div>
  );
}

export default App;
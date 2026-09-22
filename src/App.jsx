import { motion } from "framer-motion";
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
import { SiDotnet, SiSharp } from "react-icons/si";
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
  "C#": SiSharp,
  ".NET": SiDotnet,
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
          <motion.a href="#learning" whileHover={{ scale: 1.04 }}>Learning</motion.a>
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
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
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
              I'm a 3rd year Software Engineering student at NSBM Green University, Sri Lanka, passionate about building web applications, solving real-world problems, and designing reliable software systems. I'm continuously expanding my knowledge in software development, system architecture, Linux, and cloud computing.
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
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mesh mesh-one" />
            <div className="mesh mesh-two" />
            <div className="developer-badge">&lt; Software Engineer /&gt;</div>

            <motion.div
              className="photo-frame"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/profile/profile.png" alt="Tharindi Anuththara" />
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
              I'm Tharindi Anuththara, a third-year Software Engineering
              undergraduate at NSBM Green University, Sri Lanka.
            </p>

            <p>
              I enjoy software development and web application development,
              especially when solving real-world problems and designing reliable
              software and system architectures.
            </p>

            <p>
              My technical interests include Python, C#, .NET, and web technologies.
              I'm currently learning more about Linux and cloud computing while
              working on practical projects to strengthen my development skills.
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
              {["Python", "C#", ".NET", "HTML", "CSS", "JavaScript", "SQL"].map(
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
                <span className="project-type">Academic Project</span>

                <h3>SkillNet</h3>

                <p>
                  A collaborative software project developed as part of my
                  academic work, focused on building a practical software solution.
                </p>

                <div className="project-tech">
                  <span>Software Engineering</span>
                  <span>Team Project</span>
                </div>

                <motion.a
                  href="https://github.com/YasharaGamage/SkillNet"
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
                <span className="project-type">Academic Project</span>

                <h3>Grand Hotel ERP System</h3>

                <p>
                  A hotel management system developed as part of a collaborative
                  software project to manage hotel-related operations.
                </p>

                <div className="project-tech">
                  <span>ERP System</span>
                  <span>Team Project</span>
                </div>

                <motion.a
                  href="https://github.com/Dil13jay/Grand-Hotel-ERP-System"
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
          <section id="learning">
            <SectionHeading>Currently Learning</SectionHeading>

          <motion.div className="learning-grid" variants={staggerVariants}>
            {[
              ["01", "Linux", "Building a strong foundation in Linux systems, command-line tools, permissions, and system administration."],
              ["02", "DevOps", "Learning DevOps fundamentals including CI/CD, automation, containers, and deployment practices."],
              ["03", "Data Structures & Algorithms", "Strengthening problem-solving skills and understanding fundamental data structures and algorithms."],
            ].map(([number, title, description]) => (
              <motion.div
                className="learning-card"
                key={title}
                variants={sectionItemVariants}
                whileHover={cardHover}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
              >
                <span className="learning-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.div>
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
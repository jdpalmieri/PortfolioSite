import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Shipped' },
  { value: '12', label: 'OSS Contributions' },
  { value: '3', label: 'Startup Exits' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About: React.FC = () => {
  return (
    <section id="about">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-label">01 — About</div>
        <h2 className="section-title">ABOUT ME</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="about-body">
            I'm a senior full-stack engineer with over 8 years of production experience — from
            zero-to-one startup builds to systems serving millions of users. I live at the
            intersection of engineering rigour and product intuition.
          </p>

          <blockquote className="about-quote">
            "Engineering isn't just about code —<br />
            it's about building systems that <em>outlast the deadline.</em>"
          </blockquote>

          <p className="about-body">
            My stack spans React and TypeScript on the front, Node.js and Python services
            behind it, and AWS orchestrating everything in production. I care deeply about
            performance, developer experience, and team culture.
          </p>
          <p className="about-body">
            Off the clock I contribute to open source, mentor junior engineers, and break
            things with WebGL experiments.
          </p>

          <div className="code-block" style={{ marginTop: '28px' }}>
            <span className="cm">// Current status</span><br />
            <span className="kw">const</span> <span className="fn">engineer</span> = &#123;<br />
            &nbsp;&nbsp;name: <span className="str">"John Doe"</span>,<br />
            &nbsp;&nbsp;role: <span className="str">"Senior Full-Stack"</span>,<br />
            &nbsp;&nbsp;stack: [<span className="str">"React"</span>, <span className="str">"Node"</span>, <span className="str">"AWS"</span>],<br />
            &nbsp;&nbsp;available: <span className="kw">true</span>,<br />
            &nbsp;&nbsp;yoe: <span className="num">8</span><br />
            &#125;
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 } as any}
        >
          <div className="stat-cards">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about-stack-section">
            <div className="about-stack-title">Primary Stack</div>
            <div className="tags-row">
              {[
                'React', 'TypeScript', 'Node.js', 'Python',
                'AWS', 'Docker', 'PostgreSQL', 'Redis',
                'GraphQL', 'Terraform', 'Three.js',
              ].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

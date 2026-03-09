import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack commerce platform built for scale — React storefront, Node.js microservices, Stripe payments, and real-time inventory via WebSockets. Handles 50k+ daily transactions.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI Chat Application',
    description:
      'Real-time chat with AI-powered features: sentiment analysis, smart replies, and conversation summarisation. Integrated with OpenAI and Socket.io.',
    tags: ['React', 'Socket.io', 'OpenAI', 'Express'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Cloud-Native CMS',
    description:
      'Headless CMS on AWS with microservices architecture, GraphQL API, and a multi-tenant content model supporting 200+ sites.',
    tags: ['AWS', 'GraphQL', 'Microservices', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Business intelligence platform processing 10M+ events/day. Interactive D3.js visualisations with real-time WebSocket updates.',
    tags: ['React', 'D3.js', 'WebSockets', 'Python', 'ClickHouse'],
    github: '#',
    demo: '#',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const Projects: React.FC = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">02 — Projects</div>
        <h2 className="section-title">FEATURED WORK</h2>
      </motion.div>

      <motion.div
        className="project-featured"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="badge badge-solid">Featured</span>
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
          <div className="tags-row">
            {featured.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div className="project-featured-actions">
            <a href={featured.github} className="btn btn-primary">GitHub &rarr;</a>
            <a href={featured.demo} className="btn btn-outline">Live Demo</a>
          </div>
        </div>

        <div className="project-featured-visual">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#ff5f56' }} />
            <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
            <div className="terminal-dot" style={{ background: '#27c93f' }} />
            <span className="terminal-title">commerce-api &middot; main</span>
          </div>
          <div className="terminal-body">
            <span className="cm">// POST /api/checkout</span><br />
            <span className="kw">export const</span>{' '}
            <span className="fn">checkout</span> = <span className="kw">async</span> (req) =&gt; &#123;<br />
            &nbsp;&nbsp;<span className="kw">const</span> session = <span className="kw">await</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">stripe</span>.<span className="fn">checkout</span>.<span className="fn">create</span>(&#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items: req.body.cart,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mode: <span className="str">"payment"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
            &nbsp;&nbsp;<span className="kw">return</span> &#123; url: session.url &#125;;<br />
            &#125;;<br />
            <span className="terminal-cursor" />
          </div>
        </div>

        <div className="project-featured-num">01</div>
      </motion.div>

      <div className="project-grid">
        {rest.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="project-card-num">0{i + 2}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags-row">
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="project-card-footer">
              <a href={project.github} className="project-link">GitHub &rarr;</a>
              <a href={project.demo} className="project-link">Live &nearr;</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

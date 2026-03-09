import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Three.js / WebGL', level: 74 },
      { name: 'CSS / Tailwind', level: 90 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'GraphQL', level: 80 },
      { name: 'PostgreSQL / Redis', level: 85 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, RDS, Lambda)', level: 88 },
      { name: 'Docker / Kubernetes', level: 78 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Terraform / IaC', level: 72 },
    ],
  },
];

const tools = [
  'Git', 'GitHub Actions', 'Figma', 'Storybook', 'Jest',
  'Playwright', 'Datadog', 'Sentry', 'Nx', 'Turborepo',
  'Linear', 'Notion', 'VSCode',
];

function SkillBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-fill" style={{ width: `${width}%` }} />
    </div>
  );
}

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">03 &mdash; Skills</div>
        <h2 className="section-title">TECHNICAL EXPERTISE</h2>
      </motion.div>

      <div className="skills-categories">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            <div className="skill-category-header">
              <div className="skill-category-name">{cat.name.toUpperCase()}</div>
              <div className="skill-category-line" />
            </div>
            <div className="skills-list">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="skills-tool-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="skills-tool-label">Tools &amp; Ecosystem</div>
        <div className="tags-row">
          {tools.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

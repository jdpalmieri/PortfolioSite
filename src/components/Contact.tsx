import React, { useState } from 'react';
import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', handle: 'github.com/johndoe', href: 'https://github.com/johndoe' },
  { label: 'LinkedIn', handle: 'linkedin.com/in/johndoe', href: 'https://linkedin.com/in/johndoe' },
  { label: 'Email', handle: 'john.doe@example.com', href: 'mailto:john.doe@example.com' },
  { label: 'Twitter / X', handle: '@johndoe', href: 'https://twitter.com/johndoe' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-label">04 &mdash; Contact</div>
        <h2 className="section-title">GET IN TOUCH</h2>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="contact-availability">
            <div className="availability-dot" />
            <div>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>
                Open to new opportunities
              </strong>
              Currently accepting senior engineering roles, fractional CTO engagements,
              and select consulting projects.
            </div>
          </div>

          <div className="contact-social">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  style={{
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--white-faint)',
                      marginBottom: '2px',
                    }}
                  >
                    {s.label}
                  </span>
                  {s.handle}
                </span>
                <span className="contact-social-arrow">&nearr;</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 } as any}
        >
          {sent ? (
            <div className="form-success">
              <strong>Message Sent</strong>
              Thanks for reaching out &mdash; I&apos;ll get back to you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Senior Role &middot; Contract &middot; Consulting"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about the role, project, or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                  Send Message &rarr;
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

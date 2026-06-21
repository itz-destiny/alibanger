"use client";

import { useState, useEffect } from "react";
import {
  BulbLogo, Phone, Mail, MapPin, ArrowRight, Shield, Zap, Wrench, Bulb,
  Target, HomeIcon, Transformer, WrenchDot, Tower, Cart, PanelHV, PanelMV,
  Send, Menu,
} from "./icons";

const PHONES = ["08035446978", "08085091521", "08050928525"];

const FEATURES = [
  { icon: <Shield />, title: "Safe Power Always", text: "Guaranteed safety standards on every installation and maintenance job." },
  { icon: <Zap />, title: "Reliable Energy", text: "Stable, steady power flow for homes, communities and businesses." },
  { icon: <Wrench />, title: "Expert Engineers", text: "Skilled, certified technicians delivering precise electrical solutions." },
  { icon: <Bulb />, title: "Long-Term Value", text: "Durable systems and quality parts that reduce costly future repairs." },
];

const SERVICES = [
  { icon: <HomeIcon />, title: "Rural Electrification & Maintenance", text: "Bringing reliable power to communities and keeping it running." },
  { icon: <Wrench />, title: "General Electrical Engineering Works", text: "Full-scope electrical design, installation and repair." },
  { icon: <Transformer />, title: "Transformer Installation", text: "Professional siting, mounting and commissioning of transformers." },
  { icon: <WrenchDot />, title: "Transformer Maintenance", text: "Servicing, oil top-up, fault diagnosis and overhaul." },
  { icon: <Tower />, title: "High / Low Tension Stringing", text: "HT & LT conductor stringing and overhead line works." },
  { icon: <Cart />, title: "Sales of Electrical & Electronics", text: "Quality electrical materials, fittings and electronics." },
  { icon: <PanelHV />, title: "High Voltage Panel Installation", text: "HV switchgear and panel installation to standard." },
  { icon: <PanelMV />, title: "Medium / Low Voltage Panel Installation", text: "MV & LV distribution panels, boards and metering." },
];

const PROJECTS = [
  { img: "/img/proj-1.jpg", tag: "Transformer Installation", title: "Distribution Transformer Setup", alt: "Transformer installation" },
  { img: "/img/proj-2.jpg", tag: "HT / LT Stringing", title: "High Tension Line Connection", alt: "High tension bushings" },
  { img: "/img/proj-3.jpg", tag: "Panel & Cable Works", title: "R-Y-B Cable Termination", alt: "RYB cable termination" },
  { img: "/img/proj-4.jpg", tag: "Maintenance", title: "11kV Panel Servicing", alt: "Distribution panel maintenance" },
  { img: "/img/proj-5.jpg", tag: "Supply & Install", title: "Transformer Supply & Mounting", alt: "New transformer delivery" },
  { img: "/img/proj-6.jpg", tag: "Panel Installation", title: "MV / LV Switchgear Unit", alt: "Voltage panel installation" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [note, setNote] = useState("");

  // Reveal-on-scroll animations
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "there";
    form.reset();
    setNote(`Thank you, ${name}! Please also reach us on 0803 544 6978.`);
  }

  return (
    <>
      {/* ===================== HEADER ===================== */}
      <header>
        <div className="wrap nav">
          <a href="#home" className="logo">
            <span className="mark"><BulbLogo /></span>
            <span className="txt"><b>Alibanger</b><span>Technical Services</span></span>
          </a>
          <nav className={menuOpen ? "menu open" : "menu"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a href={`tel:${PHONES[0]}`} className="nav-call">
            <span className="ic"><Phone /></span>
            <span><small>Call Us Today</small><b>0803 544 6978</b></span>
          </a>
          <button className="burger" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
            <Menu width={28} height={28} />
          </button>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="hero" id="home" style={{ padding: 0 }}>
        <div className="hero-grid-lines" />
        <div className="wrap">
          <span className="eyebrow"><BulbLogo /> The Light Masters</span>
          <h1>Your Trusted <span className="yellow">Electrical Experts</span></h1>
          <p>
            Powering homes, communities and industries across Rivers State with reliable
            rural electrification, transformer installation &amp; maintenance, and complete
            electrical engineering works.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn">Our Services <ArrowRight /></a>
            <a href={`tel:${PHONES[0]}`} className="btn ghost"><Phone /> 0803 544 6978</a>
          </div>
          <div className="stats">
            <div className="stat"><b>15<span className="yellow">+</span></b><span>Years Experience</span></div>
            <div className="stat"><b>500<span className="yellow">+</span></b><span>Projects Completed</span></div>
            <div className="stat"><b>100<span className="yellow">%</span></b><span>Safety Commitment</span></div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURE CARDS ===================== */}
      <section className="features" style={{ paddingTop: 80, paddingBottom: 70 }}>
        <div className="wrap feature-grid">
          {FEATURES.map((f, i) => (
            <div className="fcard reveal" key={f.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="ic">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-media reveal reveal-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="main"><img src="/img/about-1.jpg" alt="Alibanger technician servicing a transformer" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="sub"><img src="/img/about-2.jpg" alt="Engineer beside power transformer" /></div>
            <div className="badge"><b>15+</b><span>Years<br />Experience</span></div>
          </div>
          <div className="about-copy reveal reveal-right">
            <div className="sec-tag">About Alibanger</div>
            <h2 className="sec-title">Powering Lives With <span className="yellow">Trusted Expertise</span></h2>
            <p className="lead">
              Alibanger Technical Services — <strong>The Light Masters</strong> — is a Rivers State
              based electrical engineering company specialising in rural electrification, transformer
              installation &amp; maintenance, high/low tension stringing and the sales of electrical
              &amp; electronics. Led by Managing Director Promise Nwafor A., our team delivers safe,
              dependable power solutions for communities and industry.
            </p>
            <div className="vm">
              <div className="ic"><Target /></div>
              <div><h4>Our Vision</h4><p>To be the most trusted name in electrical engineering and rural electrification across the Niger Delta.</p></div>
            </div>
            <div className="vm">
              <div className="ic"><Zap /></div>
              <div><h4>Our Mission</h4><p>Delivering safe, reliable and lasting power solutions through skilled engineering and quality service.</p></div>
            </div>
            <a href="#contact" className="btn">Work With Us <ArrowRight /></a>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="services" id="services">
        <div className="hero-grid-lines" />
        <div className="wrap">
          <div className="head reveal">
            <div>
              <div className="sec-tag">What We Do</div>
              <h2 className="sec-title">Our <span className="yellow">Services</span></h2>
            </div>
            <p>From the high-voltage network to the final socket — Alibanger handles the complete electrical engineering chain.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <div className="svc reveal" key={s.title} style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
                <div className="ic">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section id="projects">
        <div className="wrap">
          <div className="proj-head reveal">
            <div>
              <div className="sec-tag">Our Work</div>
              <h2 className="sec-title">Power Projects Designed<br /><span className="yellow">With Precision</span></h2>
              <p>A look at real installation, maintenance and termination work delivered by the Alibanger team in the field.</p>
            </div>
          </div>
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <div className="proj reveal" key={p.title} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} />
                <div className="ov"><small>{p.tag}</small><h3>{p.title}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="cta">
        <div className="wrap reveal">
          <h2>Reliable Service With <span className="yellow">Lasting Results</span></h2>
          <p>Need power restored, a transformer installed, or a full electrical project handled? Talk to The Light Masters today.</p>
          <div className="cta-actions">
            <a href={`tel:${PHONES[0]}`} className="btn"><Phone /> Call 0803 544 6978</a>
            <a href="mailto:alibanger59@gmail.com" className="btn ghost"><Mail /> Email Us</a>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="reveal reveal-left">
            <div className="sec-tag">Get In Touch</div>
            <h2 className="sec-title" style={{ marginBottom: 30 }}>Contact <span className="yellow">Us</span></h2>

            <div className="info-card">
              <div className="ic"><Phone /></div>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${PHONES[0]}`}>{PHONES[0]}</a> &bull;{" "}
                  <a href={`tel:${PHONES[1]}`}>{PHONES[1]}</a> &bull;{" "}
                  <a href={`tel:${PHONES[2]}`}>{PHONES[2]}</a>
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="ic"><Mail /></div>
              <div><h4>Email</h4><p><a href="mailto:alibanger59@gmail.com">alibanger59@gmail.com</a></p></div>
            </div>
            <div className="info-card">
              <div className="ic"><MapPin /></div>
              <div><h4>Address</h4><p>Mr. Godspower Nwafor Compound, Umuakpu Imeh, Igbo-Etche, Etche LGA, Rivers State.</p></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal reveal-right">
            <h3>Request a Quote</h3>
            <p className="sub">Tell us about your project and we&apos;ll get back to you.</p>
            <div className="two">
              <div className="field"><label>Full Name</label><input name="name" type="text" placeholder="Your name" required /></div>
              <div className="field"><label>Phone</label><input name="phone" type="tel" placeholder="Phone number" required /></div>
            </div>
            <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@email.com" /></div>
            <div className="field"><label>Service Needed</label><input name="service" type="text" placeholder="e.g. Transformer installation" /></div>
            <div className="field"><label>Message</label><textarea name="message" placeholder="Describe your project..." /></div>
            <button type="submit" className="btn">Send Request <Send /></button>
            {note && <p className="note">{note}</p>}
          </form>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a href="#home" className="logo">
                <span className="mark"><BulbLogo /></span>
                <span className="txt"><b>Alibanger</b><span>Technical Services</span></span>
              </a>
              <p>The Light Masters — reliable electrical engineering, rural electrification and transformer services across Rivers State, Nigeria.</p>
            </div>
            <div>
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="foot-contact">
              <h5>Get In Touch</h5>
              <div><Phone /><span>{PHONES.join(", ")}</span></div>
              <div><Mail /><span>alibanger59@gmail.com</span></div>
              <div><MapPin /><span>Mr. Godspower Nwafor Compound, Umuakpu Imeh, Igbo-Etche, Etche LGA, Rivers State</span></div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>&copy; {new Date().getFullYear()} Alibanger Technical Services. All rights reserved.</span>
            <span>Managing Director: Promise Nwafor A.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

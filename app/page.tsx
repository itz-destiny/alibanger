"use client";

import { useState, useEffect } from "react";
import {
  BulbLogo, Phone, Mail, MapPin, ArrowRight, Shield, Zap, Wrench, Bulb,
  Target, HomeIcon, Transformer, WrenchDot, Tower, Cart, PanelHV, PanelMV,
  Send, Menu, Gauge, Battery, SunIcon, Grounding, Building, Leaf, Check,
} from "./icons";

const PHONES = ["08035446978", "08085091521", "08050928525"];

const FEATURES = [
  { icon: <Shield />, title: "Safe Power Always", text: "Guaranteed safety standards on every installation and maintenance job." },
  { icon: <Zap />, title: "Reliable Energy", text: "Stable, steady power flow for homes, communities and businesses." },
  { icon: <Wrench />, title: "Expert Engineers", text: "Skilled, certified technicians delivering precise electrical solutions." },
  { icon: <Bulb />, title: "Long-Term Value", text: "Durable systems and quality parts that reduce costly future repairs." },
];

const SERVICES = [
  { icon: <HomeIcon />, title: "Rural Electrification & Maintenance", text: "Bringing reliable power to communities, including construction of transformer substations and erection of concrete electric poles." },
  { icon: <Wrench />, title: "General Electrical Engineering Works", text: "Full-scope electrical design, installation and repair across residential, commercial and industrial sites." },
  { icon: <Transformer />, title: "Transformer Installation", text: "Professional siting, mounting and commissioning of transformers — including 2.5MVA/33KV and 11KV units." },
  { icon: <WrenchDot />, title: "Transformer Maintenance", text: "Servicing, oil top-up, fault diagnosis and overhaul; installation of gang isolators and current transformers." },
  { icon: <Tower />, title: "High / Low Tension Stringing", text: "HT & LT conductor stringing, overhead line works and installation of high voltage switchgear." },
  { icon: <Gauge />, title: "Instrumentation & Calibration", text: "Calibration of pressure gauges and Barton meters; installation of Murphy panels, SDV, moisture analyzers and wireless transmitters." },
  { icon: <Battery />, title: "UPS, Battery & Generator Services", text: "UPS and rectifier fault diagnosis, battery maintenance and full generator servicing — including 500KVA and 600KVA units." },
  { icon: <Grounding />, title: "Earthing & Lightning Protection", text: "Deep well earthing system installation and testing, earth pit servicing and Indelec thunder arrestor installation." },
  { icon: <PanelHV />, title: "High Voltage Panel Installation", text: "HV switchgear and panel installation, including 1,250A distribution panels to industry standards." },
  { icon: <PanelMV />, title: "Medium / Low Voltage Panel Installation", text: "MV & LV distribution panels, boards, metering and low voltage switchboard maintenance and repairs." },
  { icon: <SunIcon />, title: "Solar Street Light Installation", text: "Supply and installation of solar powered street lighting systems for communities, facilities and campuses." },
  { icon: <Cart />, title: "Sales of Electrical & Electronics", text: "Quality electrical materials and electronics — ACSR conductors, galvanized tie-straps, earth rods, fittings and more." },
];

const SAFETY_POINTS = [
  { icon: <Shield />, title: "Zero Accident Culture", text: "We believe all accidents and community disturbances are preventable. Safety is managed with the same rigour as production and cost control." },
  { icon: <Leaf />, title: "Environmental Stewardship", text: "We protect the environment, minimise pollution and dispose of all waste in a safe and environmentally responsible manner." },
  { icon: <Zap />, title: "HSE Leadership", text: "We consistently emphasise Health, Safety and Environment in all operations and pursue continuous technological improvements." },
  { icon: <Check />, title: "Regulatory Compliance", text: "We comply with all applicable laws, regulations and industry standards in every jurisdiction our teams operate in." },
];

const PROJECTS: { img: string; tag: string; title: string; alt: string; pos?: string }[] = [
  // ── Transformer Installation ──
  { img: "/img/proj-1.jpg",                  tag: "Transformer Installation", title: "Distribution Transformer (Step Up: 415V to 11KV)", alt: "Distribution transformer step up from 415V to 11KV" },
  { img: "/img/p-transformer-install.png",   tag: "Transformer Installation", title: "Transformer Installation & Fencing",        alt: "Transformer installed in fenced compound",       pos: "center 38%" },
  { img: "/img/p-transformer-500kva.png",    tag: "Transformer Installation", title: "500KVA Transformer — Deep Well Earthing",   alt: "500KVA transformer installation",               pos: "center 38%" },
  { img: "/img/p-step-up-transformer.png",   tag: "Transformer Installation", title: "500KVA Step-Up Transformer Installation",   alt: "500KVA step-up transformer",                    pos: "center 38%" },
  { img: "/img/p-transformer-33kv.png",       tag: "Transformer Installation", title: "2.5MVA / 33KV Transformer (Step Down: 33KV to 415V)", alt: "2.5MVA 33KV step-down transformer installation" },

  // ── HT / LT Line Stringing ──
  { img: "/img/p-ht-pole.png",              tag: "HT / LT Stringing", title: "High Tension Line Connection",      alt: "Engineer on high tension pole with insulators" },
  { img: "/img/p-ht-stringing-comp.png",    tag: "HT Stringing",      title: "High Tension Line Stringing Works", alt: "High tension line stringing works",             pos: "center 38%" },
  { img: "/img/p-line-stringing.png",       tag: "Line Stringing",    title: "HT Line Stringing Works",           alt: "Line stringing and switchgear works",           pos: "center 55%" },

  // ── Panel Servicing & Switch Rooms ──
  { img: "/img/p-panel-room.png",    tag: "Maintenance",  title: "11kV Panel Servicing",            alt: "Engineer servicing 11kV switch panels" },
  { img: "/img/p-panel-ryb.png", tag: "Panel Works",  title: "Low Voltage Panel / Cable Installation",    alt: "Low voltage panel cable installation" },
  { img: "/img/p-panel-wiring.png", tag: "Panel Works",  title: "Panel Wiring & Commissioning",     alt: "Engineer wiring LV distribution panel" },
  { img: "/img/p-hv-switch-room.png", tag: "HV Switch Room", title: "High Voltage Switch Room",    alt: "High voltage switch room with multiple panels" },
  { img: "/img/proj-6.jpg",         tag: "Panel Installation", title: "MV / LV Switchgear Unit",   alt: "Voltage panel installation" },

  // ── Tower Earthing & Lightning Protection ──
  { img: "/img/p-tower-earthing.png",   tag: "Tower Earthing",    title: "Lightning Arrestor Tower",       alt: "Tall steel tower for lightning protection" },
  { img: "/img/p-tower-climbing.png",   tag: "Tower Earthing",    title: "Tower Earthing Installation",    alt: "Engineer installing tower earthing system" },
  { img: "/img/p-indelec-arrestor.png", tag: "Lightning Protection", title: "Installation of Indelec Thunder Arrestor", alt: "Indelec thunder arrestor installation",    pos: "center 38%" },
  { img: "/img/p-deep-well-earthing.png", tag: "Earthing Works",  title: "Deep Well Earthing System",      alt: "Deep well earth system drilling and testing", pos: "center 38%" },

  // ── Generator & Control Room ──
  { img: "/img/p-generator-600kva.png",   tag: "Generator Install", title: "600KVA Gas Generator — Oloma FLS Bonny",  alt: "600KVA gas generator installation",       pos: "center 38%" },
  { img: "/img/p-generator-600kva-2.png", tag: "Generator Install", title: "600KVA Gas Generator — Bonny",             alt: "600KVA gas generator Bonny",             pos: "center 38%" },
  { img: "/img/p-control-room.png",       tag: "Control Room",      title: "Control Room / Generator Cabling",         alt: "Control room and generator cabling works", pos: "center 38%" },
  { img: "/img/p-maintenance-odidi.png",  tag: "Maintenance",       title: "Maintenance — Odidi FLS Control Room, Warri", alt: "Maintenance at Odidi FLS Warri",       pos: "center 38%" },

  // ── Rural Electrification ──
  { img: "/img/p-sub-station.png",       tag: "Rural Electrification", title: "Construction of New Sub-station", alt: "New transformer sub-station under construction" },
  { img: "/img/p-transmission-yard.png", tag: "Rural Electrification", title: "Transmission Yard",               alt: "High voltage transmission yard" },
  { img: "/img/p-concrete-pole.png",     tag: "Rural Electrification", title: "Erection of Concrete Pole",       alt: "Erection of concrete electric poles" },

  // ── Solar & Supply ──
  { img: "/img/p-solar-street-light.png", tag: "Solar Lighting",  title: "Solar Powered Street Lighting",  alt: "Solar street light installation", pos: "center 38%" },
  { img: "/img/p-hv-panel.png",           tag: "HV Panel",        title: "High Voltage Panel Supply",       alt: "High voltage panel delivery" },
  { img: "/img/proj-5.jpg",               tag: "Supply & Install", title: "Transformer Supply & Mounting",  alt: "New transformer delivery" },

  // ── Cabling Works ──
  { img: "/img/p-armoured-cabling.png", tag: "Cabling Works", title: "Armoured Cable Installation", alt: "Armoured cabling job", pos: "center 38%" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [note, setNote] = useState("");
  const [lightbox, setLightbox] = useState<typeof PROJECTS[0] | null>(null);

  // Close lightbox on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setLightbox(null); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
    const name    = (form.elements.namedItem("name")    as HTMLInputElement)?.value || "";
    const phone   = (form.elements.namedItem("phone")   as HTMLInputElement)?.value || "";
    const email   = (form.elements.namedItem("email")   as HTMLInputElement)?.value || "";
    const service = (form.elements.namedItem("service") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const subject = encodeURIComponent(`Quote Request — ${service || "General Enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Needed: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:alibanger59@gmail.com?subject=${subject}&body=${body}`;

    form.reset();
    setNote(`Thank you, ${name || "there"}! Your email client should open shortly.`);
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
            Powering homes, communities and industries across Rivers State with safe EPCOM services —
            rural electrification, transformer installation &amp; maintenance, instrumentation
            and complete electrical engineering works.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn">Our Services <ArrowRight /></a>
            <a href={`tel:${PHONES[0]}`} className="btn ghost"><Phone /> 0803 544 6978</a>
          </div>
          <div className="stats">
            <div className="stat"><b>25<span className="yellow">+</span></b><span>Years Experience</span></div>
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
            <div className="badge"><b>25+</b><span>Years<br />Experience</span></div>
          </div>
          <div className="about-copy reveal reveal-right">
            <div className="sec-tag">About Alibanger</div>
            <h2 className="sec-title">Powering Lives With <span className="yellow">Trusted Expertise</span></h2>
            <p className="lead">
              Incorporated in 2011, Alibanger Technical Services — <strong>The Light Masters</strong> — operates
              across major oil cities in Nigeria, delivering safe Engineering, Procurement, Construction,
              Operation and Maintenance <strong>(EPCOM)</strong> services. Our team of experienced engineers
              and professionals specialises in electrical installation, rural electrification, transformer
              services and instrumentation, led by Managing Director <strong>Promise Nwafor Anelechi</strong>.
            </p>
            <div className="vm">
              <div className="ic"><Target /></div>
              <div>
                <h4>Our Vision</h4>
                <p>To be accepted as Nigeria&apos;s foremost integrated services provider in the electrical and mechanical industry.</p>
              </div>
            </div>
            <div className="vm">
              <div className="ic"><Zap /></div>
              <div>
                <h4>Our Mission</h4>
                <p>To maintain a dynamic organisation where transparency, accountability, professional competence and customer satisfaction drive safe EPCOM services across the electrical and mechanical industry.</p>
              </div>
            </div>
            <div className="vm">
              <div className="ic"><Check /></div>
              <div>
                <h4>Guiding Principles</h4>
                <p>Committed to enhancing our clients&apos; performance and retaining our reputation for integrity in every engagement we undertake.</p>
              </div>
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
            <p>From instrumentation and earthing to high-voltage networks and rural electrification — Alibanger handles the complete electrical engineering chain.</p>
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
              <div
                className="proj reveal" key={p.title}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                onClick={() => setLightbox(p)}
                role="button" tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(p)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} style={p.pos ? { objectPosition: p.pos } : undefined} />
                <div className="ov"><small>{p.tag}</small><h3>{p.title}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HSE / SAFETY ===================== */}
      <section style={{ background: "#f4f7fb" }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div className="sec-tag">Health, Safety &amp; Environment</div>
            <h2 className="sec-title">Our HSE <span className="yellow">Commitment</span></h2>
            <p style={{ color: "#5a6b81", maxWidth: 580, marginTop: 16, fontSize: 16 }}>
              Alibanger Technical Services believes all accidents and community disturbances are preventable.
              HSE is a line management responsibility — and a good business. Safety is an integral
              part of everything we do.
            </p>
          </div>
          <div className="feature-grid">
            {SAFETY_POINTS.map((s, i) => (
              <div className="fcard reveal" key={s.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="ic">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
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
              <div>
                <h4>Office Address</h4>
                <p>No. 3 Onuokolo Street, Woji, Port Harcourt, Rivers State.</p>
              </div>
            </div>
            <div className="info-card">
              <div className="ic"><Building /></div>
              <div>
                <h4>Registered Address</h4>
                <p>Mr. Godspower Nwafor Compound, Umuasukpu Imeh, Igbo-Etche, Etche LGA, Rivers State.</p>
              </div>
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
              <p>The Light Masters — reliable EPCOM services in electrical engineering, rural electrification and transformer installation across Rivers State, Nigeria. Est. 2011.</p>
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
              <div><Phone /><span>{PHONES.join(" • ")}</span></div>
              <div><Mail /><span>alibanger59@gmail.com</span></div>
              <div><MapPin /><span>No. 3 Onuokolo Street, Woji, Port Harcourt, Rivers State</span></div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>&copy; {new Date().getFullYear()} Alibanger Technical Services. All rights reserved.</span>
            <span>BN: 2651565 &bull; MD: Promise Nwafor Anelechi</span>
          </div>
        </div>
      </footer>

      {/* ===================== LIGHTBOX ===================== */}
      {lightbox && (
        <div className="lb-backdrop" onClick={() => setLightbox(null)}>
          <div className="lb-box" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.img} alt={lightbox.alt} />
            <div className="lb-info">
              <small>{lightbox.tag}</small>
              <h3>{lightbox.title}</h3>
            </div>
            <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Close lightbox">✕</button>
          </div>
        </div>
      )}
    </>
  );
}

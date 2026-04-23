import React from "react";

export default function Services() {
  const services = [
    {
      category: "Academic Services",
      items: [
        {
          icon: "📘",
          title: "Academic Courses",
          desc: "Comprehensive programs in Science, Arts, and Commerce.",
        },
        {
          icon: "👨‍🏫",
          title: "Personalized Tutoring",
          desc: "One-on-one support for better understanding.",
        },
        {
          icon: "🧪",
          title: "Special Programs",
          desc: "STEM, arts, and language enrichment.",
        },
      ],
    },
    {
      category: "Extracurricular Activities",
      items: [
        {
          icon: "⚽",
          title: "Sports",
          desc: "Football, cricket, basketball & more.",
        },
        {
          icon: "🎨",
          title: "Art & Music",
          desc: "Creative programs in music, art, and drama.",
        },
        {
          icon: "💻",
          title: "Clubs",
          desc: "Coding, debate, and community clubs.",
        },
      ],
    },
    {
      category: "Student Support",
      items: [
        {
          icon: "🧠",
          title: "Counseling",
          desc: "Emotional and psychological support.",
        },
        {
          icon: "🎯",
          title: "Career Guidance",
          desc: "Helping students choose the right path.",
        },
        {
          icon: "🏥",
          title: "Health Services",
          desc: "On-campus medical support available.",
        },
      ],
    },
  ];

  return (
    <div className="services-page">

      {/* HERO */}
      <div className="services-hero d-flex align-items-center text-center text-white">
        <div className="container">
          <h1 className="display-3 fw-bold text-success">Our Services</h1>
          <p className="lead text-success">
            Empowering students academically, socially, and emotionally.
          </p>
        </div>
      </div>

      <div className="container my-5">

        {/* SERVICES */}
        {services.map((section, index) => (
          <div key={index} className="mb-5">

            <div className="text-center mb-4">
              <h2 className="fw-bold text-success">
                {section.category}
              </h2>
            </div>

            <div className="row g-4">
              {section.items.map((item, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div className="service-card p-4 text-center h-100">
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <h5 className="fw-semibold">{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* CTA SECTION */}
        <div className="cta-box text-center p-5 mt-5">
          <h2 className="fw-bold mb-3">
            Want to know more about our programs?
          </h2>
          <p className="text-muted mb-4">
            Contact us today and explore how we can help your child succeed.
          </p>
          <button className="btn btn-success px-4">
            Get in Touch
          </button>
        </div>

      </div>
    </div>
  );
}
import React from "react";

export default function Academics() {
  const classes = [
    {
      level: "Pre-Primary",
      name: "Nursery - UKG",
      subjects: "Basic Literacy, Numeracy, Rhymes, Activities",
    },
    {
      level: "Primary",
      name: "Class 1 - 5",
      subjects: "English, Math, Science, Social Studies, Computer",
    },
    {
      level: "Lower Secondary",
      name: "Class 6 - 8",
      subjects: "English, Math, Science, Social, Optional Subjects",
    },
    {
      level: "Secondary",
      name: "Class 9 - 10",
      subjects: "Science, Math, English, Social, Computer, Optional",
    },
  ];

  return (
    <div className="academics-page">

      {/* HERO */}
      <div className="academics-hero text-white d-flex align-items-center text-center">
        <div className="container">
          <h1 className="display-3 fw-bold text-success">Our Academics</h1>
          <p className="lead text-success">
            Building strong foundations for lifelong learning.
          </p>
        </div>
      </div>

      <div className="container my-5">

        {/* PRINCIPAL MESSAGE */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-5 text-center">
            <img
              src="https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Shamsher-Bahadur-Thapa.jpg"
              alt="Principal"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-7">
            <h3 className="text-success fw-bold mb-3">
              Message from the President
            </h3>
            <p className="text-muted">
              "At Green Valley School, we believe that education is not just
              about books, but about building character, curiosity, and
              confidence. Our approach focuses on understanding concepts,
              encouraging creativity, and nurturing independent thinking."
            </p>
            <h6 className="fw-semibold mt-3">
              — Mr. Nichal Chaulagai, President
            </h6>
          </div>
        </div>

        {/* CURRICULUM TABLE */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Curriculum Overview</h2>
          <p className="text-muted">
            Structured learning from Nursery to Grade 10
          </p>
        </div>

        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover text-center curriculum-table shadow-sm">
            <thead className="table-success">
              <tr>
                <th>Level</th>
                <th>Classes</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <tr key={index}>
                  <td className="fw-semibold text-success">
                    {item.level}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.subjects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SYLLABUS SECTION (IMPROVED GRID) */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Course & Syllabus</h2>
          <p className="text-muted">
            Designed for academic excellence and skill development
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              title: "Languages",
              desc: "English & Nepali focusing on communication skills.",
            },
            {
              title: "Mathematics",
              desc: "Logical thinking and real-world problem solving.",
            },
            {
              title: "Science",
              desc: "Practical and concept-based learning approach.",
            },
            {
              title: "Social Studies",
              desc: "Understanding society, culture, and environment.",
            },
            {
              title: "Computer Education",
              desc: "Digital literacy and programming basics.",
            },
            {
              title: "Co-Curricular",
              desc: "Sports, arts, music, and personality growth.",
            },
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="syllabus-card p-4 h-100 text-center">
                <h5 className="text-success">{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
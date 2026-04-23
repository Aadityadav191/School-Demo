import React from "react";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero d-flex align-items-center text-white text-center">
        <div className="container">
          <h1 className="fw-bold display-3 mb-3 text-success text-shadow mb-4">
            AKSHARAA  School
          </h1>
          <p className="lead mb-4 text-success text-shadow">
            Where education meets inspiration and excellence.
          </p>
          <button className="btn btn-light text-success fw-semibold px-4">
            Explore More
          </button>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="container my-5">
        <div className="row text-center g-4">
          <div className="col-md-3">
            <h2 className="fw-bold text-success">30+</h2>
            <p className="text-muted">Years Experience</p>
          </div>
          <div className="col-md-3">
            <h2 className="fw-bold text-success">5000+</h2>
            <p className="text-muted">Students</p>
          </div>
          <div className="col-md-3">
            <h2 className="fw-bold text-success">120+</h2>
            <p className="text-muted">Teachers</p>
          </div>
          <div className="col-md-3">
            <h2 className="fw-bold text-success">100%</h2>
            <p className="text-muted">Success Rate</p>
          </div>
        </div>
      </div>

      <div className="container my-5">

        {/* HISTORY + IMAGE */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              className="img-fluid rounded shadow"
              alt="school"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="text-success fw-bold mb-3">Our History</h3>
            <p className="text-muted">
              Since 1995, AKSHARAA  School has been committed to academic
              excellence and holistic development. We nurture creativity,
              leadership, and confidence in every student.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="row align-items-center g-5 mb-5 flex-lg-row-reverse">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              className="img-fluid rounded shadow"
              alt="students"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="text-success fw-bold mb-3">Our Mission</h3>
            <p className="text-muted">
              We create an inspiring environment where students develop
              critical thinking, emotional intelligence, and leadership skills
              to succeed in life.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Our Core Values</h2>
        </div>

        <div className="row g-4 mb-5">
          {[
            { icon: "🏆", title: "Excellence", desc: "Achieving the highest standards." },
            { icon: "🤝", title: "Integrity", desc: "Honesty and strong ethics." },
            { icon: "🌍", title: "Community", desc: "Collaboration and unity." },
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="value-card text-center p-4">
                <div className="fs-1 mb-2">{item.icon}</div>
                <h5 className="fw-semibold">{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FACILITIES */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Our Facilities</h2>
        </div>

        <div className="row g-4 mb-5">
          {[
            {
              title: "Modern Classrooms",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTFP9FY0Vx8OsfXgf4wX-jZQD2gI2xEVHbg&s",
            },
            {
              title: "Library",
              img: "https://www.babywisemom.com/wp-content/uploads/2021/09/library-training.jpg",
            },
            {
              title: "Sports",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-Rp0QL5HvF8wtKRp7f63SWSJk8hMHquG9g&s",
            },
          ].map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="facility-card">
                <img src={item.img} className="img-fluid" alt="" />
                <div className="overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Campus Life</h2>
        </div>

        <div className="row g-3">
          {[
            "https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/033/207/main/b086390ecded05cb02fdf92cf7863d7a.jpg",
            "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/10/Tikapur-school.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6q1bpQgH90WLP7aR9odZIx2dHk7pN3XvQg&s",
          ].map((img, i) => (
            <div className="col-md-4" key={i}>
              <img src={img} className="img-fluid rounded gallery-img" alt="" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
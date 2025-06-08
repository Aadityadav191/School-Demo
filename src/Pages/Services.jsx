import React from 'react';

export default function Services() {
  return (
    <div className="services-bg min-vh-100 py-5">
      <div className="container">
        {/* Services Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-success">Our Services</h1>
          <p className="lead text-dark">
            At Green Valley School, we offer a wide range of services to help our students grow academically, socially, and emotionally.
          </p>
        </div>

        {/* Educational Services Section */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Academic+Courses"
                alt="Academic Courses"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Academic Courses</h5>
                <p className="text-muted">
                  We offer a wide range of subjects in Science, Arts, and Commerce, with expert teachers to guide students towards academic excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Tutoring"
                alt="Tutoring"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Personalized Tutoring</h5>
                <p className="text-muted">
                  We provide one-on-one tutoring sessions to help students who need extra assistance with subjects or homework.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Special+Programs"
                alt="Special Programs"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Special Academic Programs</h5>
                <p className="text-muted">
                  We offer various special programs, including STEM, arts, and language enrichment courses to encourage students' passions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Sports"
                alt="Sports"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Sports Activities</h5>
                <p className="text-muted">
                  Our sports department offers a variety of activities, including football, cricket, basketball, and more, helping students stay active and healthy.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Art+&+Music"
                alt="Art & Music"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Art & Music Programs</h5>
                <p className="text-muted">
                  We offer a vibrant arts program that includes visual arts, music, and drama, allowing students to express their creativity.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Clubs+&+Groups"
                alt="Clubs & Groups"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Clubs & Groups</h5>
                <p className="text-muted">
                  Our school hosts a wide range of clubs, including debate, coding, drama, and community service, allowing students to pursue their interests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Support Services Section */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Counseling"
                alt="Counseling"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Counseling Services</h5>
                <p className="text-muted">
                  Our experienced counselors provide emotional and psychological support to students, helping them navigate academic and personal challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Career+Guidance"
                alt="Career Guidance"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Career Guidance</h5>
                <p className="text-muted">
                  We provide career counseling to help students identify their interests, strengths, and career goals, and guide them in making informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success shadow-sm">
              <img
                src="https://via.placeholder.com/300x200.png?text=Health+Services"
                alt="Health Services"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">Health Services</h5>
                <p className="text-muted">
                  We offer basic medical services on campus, with a qualified nurse available to attend to any health concerns or emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="display-5 text-success">Contact Us for More Information</h2>
          <p className="lead text-dark">
            If you're interested in any of our services or have any questions, feel free to reach out.
          </p>
          <button className="btn btn-success">Get in Touch</button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function About() {
  return (
    <div className="about-bg min-vh-100 py-5">
      <div className="container">
        {/* About Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-success">About Green Valley School</h1>
          <p className="lead text-dark">
            A place where education meets inspiration and excellence.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-success">Our History</h3>
            <p className="text-muted">
              Green Valley School was founded in 1995 with the goal of providing quality education to children from all walks of life. 
              Over the years, our school has grown into one of the leading institutions in the region, known for our academic excellence, 
              supportive environment, and dedication to developing well-rounded individuals.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="text-success">Our Mission</h3>
            <p className="text-muted">
              Our mission is to foster an inclusive, nurturing, and intellectually stimulating environment where every student can grow 
              and excel. We focus on developing critical thinking, creativity, leadership, and emotional intelligence in our students.
            </p>
          </div>
        </div>

        {/* Vision and Values Section */}
        <div className="text-center my-5">
          <h2 className="display-5 text-success">Our Vision & Values</h2>
          <p className="lead text-dark">
            At Green Valley School, we believe in nurturing tomorrow’s leaders by empowering students with the skills they need to thrive in an ever-changing world.
          </p>

          <div className="row">
            <div className="col-md-4">
              <div className="card border-success shadow-sm mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title text-success">Excellence</h5>
                  <p className="text-muted">
                    We strive for excellence in all we do. We challenge our students to achieve their highest potential.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-success shadow-sm mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title text-success">Integrity</h5>
                  <p className="text-muted">
                    We emphasize integrity, honesty, and respect in every aspect of school life, helping our students build a strong ethical foundation.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-success shadow-sm mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title text-success">Community</h5>
                  <p className="text-muted">
                    We believe in the power of community, and we encourage collaboration, teamwork, and mutual support among our students and staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="text-center my-5">
          <h2 className="display-5 text-success">Our Facilities</h2>
          <p className="lead text-dark">
            Our campus is equipped with state-of-the-art facilities that provide our students with an optimal environment for learning and growth.
          </p>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Classrooms"
                  alt="Classrooms"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-success">Modern Classrooms</h5>
                  <p className="text-muted">
                    Our classrooms are spacious, well-lit, and equipped with the latest educational technology to enhance the learning experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Library"
                  alt="Library"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-success">Library</h5>
                  <p className="text-muted">
                    Our library is home to thousands of books and digital resources to support the academic growth of every student.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Sports+Fields"
                  alt="Sports Fields"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-success">Sports Fields</h5>
                  <p className="text-muted">
                    Our sports facilities include fields for football, cricket, and tennis, promoting physical fitness and teamwork among our students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="text-center my-5">
          <h2 className="display-5 text-success">Campus Life</h2>
          <p className="lead text-dark">
            A glimpse into the vibrant life at Green Valley School. Our students engage in a wide variety of activities that support their personal growth.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src="https://via.placeholder.com/300x200.png?text=Students+Group"
                alt="Students Group"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="https://via.placeholder.com/300x200.png?text=School+Building"
                alt="School Building"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="https://via.placeholder.com/300x200.png?text=School+Event"
                alt="School Event"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

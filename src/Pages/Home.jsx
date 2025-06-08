import React from "react";
import { useReducer } from "react";

const initialstate = 100;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};


export default function Home() {
  
  const [count, dispatch]=useReducer(reducer, initialstate)

  return (
    <div className="home-bg min-vh-100">
      <div className="container py-5">
        {/* Welcome Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-success">Welcome to Green Valley School</h1>
          <p className="lead text-dark">
            Empowering young minds for a brighter tomorrow. Our school fosters an environment of growth, creativity, and excellence.
          </p>
        </div>

        {/* Our Mission, Academics, Admissions Cards */}
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card border-success h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Our Mission</h5>
                <p className="card-text">
                  To provide quality education and nurture every student’s potential in a safe and inspiring environment. We believe in a balanced approach, focusing not only on academics but also personal development and well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Academics</h5>
                <p className="card-text">
                  A robust curriculum focusing on academic excellence and co-curricular development. Our students excel not just in classrooms but in extracurricular activities as well, ensuring well-rounded development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-success h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Admissions</h5>
                <p className="card-text">
                  Join our vibrant community of learners! Admissions for the 2024–25 academic session are open. Our school provides an inclusive, innovative, and collaborative educational environment where students are prepared for the future.
                </p>
                <button className="btn btn-success">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="text-center mb-5">
          <h2 className="display-5 text-success">About Us</h2>
          <p className="lead text-dark">
            Green Valley School is more than just a place for learning — it's a community that nurtures curiosity, creativity, and leadership. Established with a vision to provide quality education, we have built a legacy of excellence over the years.
          </p>
          <img 
            src="https://kantipurjob.com/uploads/employers/b7b2ec3c458c1d6ca1aa0372531e1faa5b0668a2.jpg" 
            alt="School Building" 
            className="img-fluid rounded shadow-sm mb-4"
          />
          <p className="text-muted">
            Our campus is equipped with state-of-the-art facilities, including modern classrooms, science and computer labs, a library, sports fields, and a dedicated space for arts and crafts.
          </p>
        </div>

        {/* Faculty Section */}
        <div className="text-center mb-5">
          <h2 className="display-5 text-success">Our Faculty</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPWQTnePNQOhGoSq8Sv0hdxWo0QOU_Ys-6djgmxz3f7vYE_QqTANwmbRCU7TADxAQ6-dedxQ07miTw15vMFfBqOPxrZTid5BtVW8d55uP4Rl_z4jpHGUD8VjktnfAo5RMdLQ0ai7wJwOI/s570/Shazim+uddin+pp+image+with+stroke.jpg" alt="Mr. Shyam" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-success">Mr. Shyam</h5>
                  <p className="card-text">Principal</p>
                  <p className="text-muted">
                    Mr. Shyam has over 10 years of experience in teaching mathematics and is passionate about making math fun for everyone!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <img src="https://visafoto.com/img/ejemplo-de-foto-carnet-de-3x3-cm.webp" alt="Ms. Priya" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-success">Ms. Priya</h5>
                  <p className="card-text">Coordinator </p>
                  <p className="text-muted">
                    With a strong background in scientific research, Ms. Priya strives to spark curiosity and innovation in her students.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <img src="https://img.freepik.com/premium-photo/indian-girl-cheerful-studio-portrait_53876-55599.jpg" alt="Mrs. Nisha" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-success">Mrs. Nisha</h5>
                  <p className="card-text">Preident</p>
                  <p className="text-muted">
                    Mrs. Nisha inspires students with a love for reading and writing, helping them improve their communication skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="text-center mb-5">
          <h2 className="display-5 text-success">Upcoming Events</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-success">Science Fair</h5>
                  <p className="card-text">Join us for our annual science fair on May 15th, 2024. A chance to explore and showcase scientific innovations!</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkucYaRRtqFqMVrIRs4hhTiZ9S7P5oJ-YZWtqDNQJTT-Z-Nb8XZOs1OYzcdxqR5_m8CXo&usqp=CAU" alt="Science Fair" className="card-img-top" />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-success">Sports Day</h5>
                  <p className="card-text">Our Sports Day on June 5th, 2024, will feature various sports activities for students of all ages. It's a fun-filled day for everyone!</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR97akETnOrpWkggL5frg-jf_cxKEAAjAPA&s" alt="Sports Day" className="card-img-top" />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-success">Cultural Fest</h5>
                  <p className="card-text">Our Cultural Fest will be held on July 1st, 2024. A celebration of arts, music, and performances by our talented students.</p>
                  <img src="https://thepremiaacademy.com/assets/uploads/blogs/1664532894.jpg" alt="Cultural Fest" className="card-img-top" />
                </div>
              </div>
            </div>
          </div>
        </div>




        
  <button className="btn btn-success mb-5" onClick={() => dispatch({ type: "INCREASE" })}>Increase +</button>
  <button className="btn btn-success mb-5" onClick={() => dispatch({ type: "DECREASE" })}>Decrease -</button>

   count: {count}






        {/* Contact Section */}
        <div className="text-center">
          <h2 className="display-5 text-success">Contact Us</h2>
          <p className="lead text-dark">Feel free to reach out for more information or to schedule a visit to our school.</p>
          <button className="btn btn-success">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

import React, { useReducer } from "react";
const initialstate=10 ;
export default function Profile() {
  const [more, setmore] = React.useState(false);
  const toggleMore = () => {
    setmore(!more);
  };

  const reducer =(state,action)=>{  //usereducer
    switch (action.type) {
      case "INCREASE":
        return state + 1;
      default:
        return state;
    }
  }

 const [count, dispatch]=useReducer(reducer, initialstate)
  return (
    <div className="profile-bg min-vh-100 py-5">
      <div className="container">
        {/* Profile Header */}
        <h1 className="display-4 fw-bold text-success ">
          Welcome to Your Profile,
        </h1>

        <div className="row mb-5 align-items-center">
          {/* Profile Image Section */}
          <div className="col-md-3">
            <img
              src="https://thumbs.dreamstime.com/b/silly-funny-face-16573578.jpg"
              alt="Profile Picture"
              className="img-fluid rounded-circle shadow-sm"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>

          {/* Profile Name and Introduction */}
          <div className="col-md-9">
            <h2 className="display-4 fw-bold text-success">Shyam Yadav</h2>
            <p className="lead text-dark">
              This is your personal profile page where you can view your
              information, progress, and more.
            </p>
          </div>
        </div>

        {/* Student Information Section */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card border-success shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Student Information</h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>Name:</strong> Shyam Ji
                  </li>
                  <li>
                    <strong>Age:</strong> 16
                  </li>
                  <li>
                    <strong>Grade:</strong> 10th Grade
                  </li>
                  <li>
                    <strong>Email:</strong> shyamji@student.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +1234567890
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Progress Section */}
          <div className="col-md-6">
            <div className="card border-success shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Academic Progress</h5>
                <p className="text-muted">
                  Your current academic standing and progress.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Mathematics:</strong> {count}%
                  </li>
                  <li>
                    <strong>Science:</strong> 88%
                  </li>
                  <li>
                    <strong>English:</strong> 90%
                  </li>
                  <li>
                    <strong>History:</strong> 82%
                  </li>
                </ul>

                <button className="btn btn-success mb-1" onClick={()=>{dispatch({ type: "INCREASE" })}}>Increase your mark </button>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-success mb-4" onClick={toggleMore}>
          {more ? "Hide" : "Show"} more
        </button>

        {more ? (
          <>
            <div className="row mb-4">
              <div className="col-md-12">
                <div className="card border-success shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-success">
                      Extracurricular Activities
                    </h5>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Football Team:</strong> Captain
                      </li>
                      <li>
                        <strong>Debate Club:</strong> Member
                      </li>
                      <li>
                        <strong>Art Club:</strong> Member
                      </li>
                      <li>
                        <strong>Drama Group:</strong> Lead Actor
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-12">
                <div className="card border-success shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-success">
                      Recent Achievements
                    </h5>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Best Debater of the Year 2024</strong> - Awarded
                        during the Annual Debate Competition
                      </li>
                      <li>
                        <strong>Gold Medal in Football</strong> - Inter-School
                        Football Championship
                      </li>
                      <li>
                        <strong>Best Actor Award</strong> - School Drama
                        Performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {/* Edit Profile Button */}
        <div className="text-center mt-4"></div>
      </div>
    </div>
  );
}

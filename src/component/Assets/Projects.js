import React from "react";
import "./Style.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <div className="row section-title justify-content-center text-center">
          <h1 className="section-title-heading">My Projects</h1>
          <p>Latest projects only</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="http://plaqad.com/">Plaqad.com</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="https://bervidson.com/">Bervidson.com</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="https://min.ng/">Min.ng</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                {" "}
                <a href="http://bedge.com.ng/">Bedge.com.ng</a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row d-flex">
          <div className="col-md-12 mt-4">
            <div className="">
              <a href="http://plaqad.com/">Plaqad.com</a>
            </div>
          </div>

          <div className="col-md-12 mt-4">
            <div className="">
              <a href="https://bervidson.com/">Bervidson.com</a>
            </div>
          </div>

          <div className="col-md-12 mt-4">
            <div className="">
              <a href="https://min.ng/">Min.ng</a>
            </div>
          </div>

          <div className="col-md-12 mt-4">
            <div className="">
              <a href="http://bedge.com/">Bedge.com</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;

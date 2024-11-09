
export default function HomeAboutUs({ aboutUs }) {
  return (
    <section className="about-us-section  py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">{aboutUs.title}</h2>
          <p className="text-muted mt-3">
            {aboutUs.Description}
          </p>
        </div>

        {/* Text Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead text-center">
              {aboutUs.sectionOne}
            </p>
            <p className="text-center">
              {aboutUs.sectionTwo}
            </p>
            <div className="text-center">
              <a href={aboutUs.aboutUsLink} className="btn btn-primary mt-4">
                {aboutUs.buttonTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

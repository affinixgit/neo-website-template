
const AboutUs = () => {
  return (
    <section className="about-us py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://classhub-live-data.s3.ap-south-1.amazonaws.com/16dd3244-fe27-4556-baad-ccc28295f9c4/cms/instituteinfo/4bf686fd-7ef8-4bda-8536-d0db099acc32.jpg" // Replace with a dynamic image path if needed
              alt="About Us"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">About Us</h2>
            <div>
              <p className="text-muted">
                Welcome to <strong>Your Business Name</strong>, where we specialize in delivering exceptional services tailored to your needs. Our team of experts is dedicated to helping you achieve your goals with innovative solutions and unparalleled commitment.
              </p>
              <p className="text-muted">
                With years of experience in the industry, we take pride in building lasting relationships with our clients and delivering results that exceed expectations.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i> Quality Service
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i> Dedicated Support
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i> Client Satisfaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

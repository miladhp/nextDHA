import { COUNTRIES } from "@/constants/global";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Feel Free To Write</span>
                <h2>Request a Meeting</h2>
                <p>
                  Thank you for requesting a meeting with Dhanani EB-5. We advise clients
                  evaluating investments that lead to a US Green Card by
                  Investment through the EB-5 Investor Visa Program. Through our
                  affiliates, International Investors Mortgage and Dhanani EB-5 Wealth we
                  also offer US loan solutions and SEC-registered wealth
                  management. Since most of these products are securities, you
                  will need to confirm that you are an accredited investor if
                  you reside in the United States or the equivalent in your
                  country.
                  <br />
                  To have an individual consultation, please give us your name
                  and we'll contact you directly.
                </p>
              </div>
              <form
                id="contact_form"
                name="contact_form"
                className=""
                action="includes/sendmail.php"
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_firstname">Enter First Name</label>

                      <input
                        id="form_firstname"
                        name="form_firstname"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_lastname">Enter Last Name</label>

                      <input
                        id="form_lastname"
                        name="form_lastname"
                        className="form-control required "
                        type="text"
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_email">Enter Email</label>

                      <input
                        id="form_email"
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_phone">Enter Phone</label>

                      <input
                        id="form_phone"
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_country">
                        Enter Country of Residance
                      </label>
                      <select
                        id="form_country"
                        name="form_country"
                        className="form-control required"
                        placeholder="Enter Country of Residance"
                      >
                        {COUNTRIES.map((country) => {
                          return (
                            <option key={country.name} value={country.name}>
                              {country.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_way">Best way to contact you?</label>
                      <select
                        id="form_way"
                        name="form_way"
                        className="form-control required"
                        placeholder="Best way to contact you?"
                      >
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="sms">Text/SMS</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_income">
                        Do you have an income of greater than $200,000 per year
                        or net worth greater than $1 million (excluding your
                        primary residence)?
                      </label>
                      <input
                        id="form_income"
                        name="form_income"
                        className="form-control required"
                        type="text"
                        placeholder="Income"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="form_message">
                        Is there anything you'd like our team to know in order
                        to prepare before we talk?*
                      </label>
                      <textarea
                        id="form_message"
                        name="form_message"
                        className="form-control required"
                        rows="7"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one mb-2 mb-sm-0 me-2"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">Send message</span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-one bg-theme-color5"
                  >
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>Have any question?</h6>
                      <a href="tel:+18663426264">+1-866-DHANANI (342-6264)</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>Write email</h6>
                      <a href="mailto:priya@dhananipeg.com">
                        <span>priya@dhananipeg.com</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>Visit anytime</h6>
                      <div>
                        11333 Fountain Lake, <br />
                        Dr Stafford, TX 77477
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13871.045851475796!2d-95.5836772!3d29.6396706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7fadff00001%3A0x8384285d0d6551bb!2sDhanani%20Private%20Equity%20Group!5e0!3m2!1sen!2sus!4v1727918011512!5m2!1sen!2sus"
              height="500"
              frameborder="0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;

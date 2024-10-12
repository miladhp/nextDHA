import ProjectBox from "@/components/elements/ProjectBox";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import { PROJECTS } from "@/constants/global";
import FunFactAbout from "@/components/sections/home-1/FunfactAbout";
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails";
import Image from "next/image";

export default function PageProjects() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle bg="/images/banner/5.jpg" pageName="Projects" />

        <FunFactAbout />

        <section className="news-section py-0">
          <div id="current" className="sec-title text-center">
            <h2 className="">Our Current EB-5 Project</h2>
          </div>
          <div className="auto-container">
            <div className="row featurette">
              <div className="col-12 text-center sec-title">
                <Image
                  src="/images/projects/1-1.png"
                  width={1920}
                  height={1080}
                />
                <h2 className="title mt-5">Territory Audubon at Magnolia</h2>
                <p className="text mt-3">
                  Territory Audubon at Magnolia is a proposed 300-unit, Class A,
                  garden apartment project to be built by Dhanani Private Equity
                  Group. The project will create a total of 587 jobs which will
                  consist of 233 direct jobs and 354 indirect jobs, this will
                  far exceed the USCIS job creation requirement by nearly a
                  factor of two.
                </p>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">Kitchen and TV Lounge</h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">Game Room</h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">Fitness</h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">
                    Business Lounge with Conference Room and outdoor work space
                  </h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">Coffee Bar</h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">Package Room</h6>
                </div>
              </div>

              <div className="col-md-4 mt-5">
                <h3 className="featurette-heading">
                  Your New Haven at Audubon,
                  <span className="text-muted">
                    {" "}
                    Creating a Brighter Future for Magnolia
                  </span>
                </h3>
                <p className="lead text lh-base">
                  The project is a new residential development of 300 rentable
                  apartment units on an 11.96-acre vacant, wooded site in the
                  Audubon Community Development near the intersection of Highway
                  249 and FM1488. The project will consist of a series of
                  three-story, wood framed, post-tensioned slab-on-grade
                  buildings of two different types and 10 different unit types
                  consisting of one-, two- and three-bedroom apartments. A
                  separate building will house leasing offices and community
                  space. The community building and grounds will contain various
                  forms of tenant amenities a pool, resident lounges, and
                  fitness center.
                </p>
              </div>
              <div className="col-md-8 mt-5">
                <Image
                  src="/images/projects/1-8.png"
                  width={768}
                  height={768}
                />
              </div>

              <div className="col-md-8 mt-5">
                <Image
                  src="/images/projects/1-7.png"
                  width={768}
                  height={768}
                />
                <p className="text lead lh-base mt-3">
                  A short drive from Houston, Magnolia is poised for expansion
                  with the arrival of the SH 249 Toll Way and major corporations
                  like ExxonMobil moving into the area. At the crossroads of
                  progress Magnolia is still a place where neighbors help
                  neighbors—a place to call home or grow your business.
                  Prospective renters are also attracted to the highly rated
                  Magnolia Independent school district, which is rated the #3
                  Independent School District in Montgomery County by Niche.
                </p>
              </div>
              <div className="col-md-4 my-5">
                <h3 className="featurette-heading">
                  Connected to Everything, Anywhere
                </h3>
                <p className="lead text lh-base">
                  Located on 11.6 acres just off of FM 1488 and Highway 249 in
                  the northwest portion of the of the Houston MSA (Magnolia area
                  of Montgomery County, TX). The property will be located less
                  than a mile from Highway 249, about 15 miles north of the
                  Grand Parkway. This area of Magnolia, TX continues to see
                  growth and is nationally ranked as 7th in growth among U.S.
                  Counties. The area is defined by ADS as the Woodlands/Conroe
                  South submarket. A short drive from Houston, Magnolia is
                  poised for expansion with the arrival of the SH 249 Toll Way
                  and major corporations like ExxonMobil moving into the area.
                  At the crossroads of progress Magnolia is still a place where
                  neighbors help neighbors—a place to call home or grow your
                  business. Prospective renters are also attracted to the highly
                  rated Magnolia Independent school district, which is rated the
                  #3 Independent School District in Montgomery County by Niche.
                </p>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">
                    Two level Pool with sun ledge
                  </h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">
                    Pool deck with covered trellis area and grill station
                  </h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">
                    Arbor with two grill stations and seating area
                  </h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">Dog wash</h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">Bike Storage Building</h6>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="d-flex border border-secondary-subtle rounded p-3 align-items-center">
                  <div className="icon-box text-success ">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h6 className="title h5 ms-2 mb-0">EV Chargers</h6>
                </div>
              </div>

              <div className="col-12 my-4">
                <Image
                  src="/images/projects/1-5.png"
                  width={1920}
                  height={768}
                />
              </div>

              <div className="col-12 my-5">
                <h3 className="featurette-heading">
                  The program is as follows:
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    300 apartments in a maximum of two different building types.
                  </li>
                  <li className="list-group-item">
                    A mix of apartments in the ratio 54% one-bedrooms, 41%
                    two-bedrooms, and 5% three-bedrooms.
                  </li>
                  <li className="list-group-item">
                    An average of 953 net square feet per unit.
                  </li>
                  <li className="list-group-item">Ten different unit types.</li>
                  <li className="list-group-item">
                    A single building of 8,606 GSF housing leasing and
                    management office space, as well as amenity space for
                    tenants including a fitness area and lounge.
                  </li>
                  <li className="list-group-item">
                    Exterior amenity spaces, including a pool, entry fountain,
                    green spaces and walking paths.
                  </li>
                  <li className="list-group-item">
                    Surface parking and fire lanes sufficient to meet
                    requirements of the jurisdiction having authority. A ratio
                    of 1.5 spaces/unit is designed.
                  </li>
                  <li className="list-group-item">
                    Garage buildings for approximately 40 parking spaces.
                  </li>
                  <li className="list-group-item">
                    Service structures including bike storage, trash enclosure,
                    maintenance and pool equipment room. »
                  </li>
                </ul>
              </div>

              <div className="col-12 ">
                <Image
                  src="/images/projects/1-9.jpeg"
                  width={1920}
                  height={768}
                />
              </div>

              <div className="col-12 my-5">
                <p className="lead text lh-base">
                  The area is demographically impressive with a projected 5-year
                  (2024-2029) population growth rate of 7.21% within a one mile
                  radius of the property. By 2029 in excess of 41,299 persons
                  are projected to reside within 5 miles of the property.
                  Average Household Income within a one mile radius of the
                  property is expected to grow to $122,115 by 2029 which is
                  substantial increase over the $100,445 Average Household
                  Income in 2024. FM 1488 is a major east/west thoroughfare in
                  the northern portion of the Houston Metro which carries
                  traffic from Interstate 45 to Highway 249. The intersection of
                  Highway 249 and FM 1488 (less than a mile from the subject
                  site) sees 23,000+ VPD.
                </p>
              </div>

              <div className="col-12 ">
                <Image
                  src="/images/projects/1-11.jpeg"
                  width={1920}
                  height={768}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="news-section py-20">
          <div id="past" className="auto-container">
            <div className="sec-title text-center">
              <h2 className="">Our Past EB-5 Projects</h2>
            </div>
            <div className="row">
              {PROJECTS.filter((p) => !p.current).map((item) => {
                return (
                  <div key={item.id} className="col-lg-4 col-md-6 col-12">
                    <ProjectBox project={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

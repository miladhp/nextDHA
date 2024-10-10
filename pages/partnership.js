import PartnerBox from "@/components/elements/PartnerBox";
import ProjectBox from "@/components/elements/ProjectBox";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Projects from "@/components/sections/home-1/Projects";
import { PARTNERS } from "@/constants/global";

export default function PagePartnership() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Our Partnerships" />
        <section className="news-section py-20">
          <div className="auto-container">
            <div className="row">
              {PARTNERS.map((item) => {
                return (
                  <div
                    id={item.id}
                    key={item.id}
                    className="col-lg-4 col-md-6 col-12 mb-5"
                  >
                    <PartnerBox data={item} />
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

import ProjectBox from "@/components/elements/ProjectBox";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Projects from "@/components/sections/home-1/Projects";
import { PROJECTS } from "@/constants/global";

export default function PageProjects() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Projects" />
        <section className="news-section py-20">
          <div className="auto-container">
            <div className="row">
              {PROJECTS.map((item) => {
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

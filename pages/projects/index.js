import ProjectBox from "@/components/elements/ProjectBox";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import { PROJECTS } from "@/constants/global";
import FunFactAbout from "@/components/sections/home-1/FunfactAbout";
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails";

export default function PageProjects() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle bg="/images/banner/projects.jpg" pageName="Projects" />

        <FunFactAbout />

        <section className="news-section py-20">
          <div id="past" className="auto-container">
            <div className="sec-title text-center">
              <h2 className="">Our Past Projects</h2>
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

        <section className="news-section py-0">
          <div id="current" className="sec-title text-center">
            <h2 className="">Our Current Project</h2>
          </div>
          <ProjectDetails project={PROJECTS[0]} projectId={1}></ProjectDetails>
        </section>
      </Layout>
    </>
  );
}

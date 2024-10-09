import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails";
import { PROJECTS } from "@/constants/global";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function PageTeamGrid() {
  const router = useRouter();
  const [currentProject, setCurrentProject] = useState(null);
  useEffect(() => {
    const findedProject = PROJECTS.find((item) => item.id === +router.query.id);
    setCurrentProject(findedProject);
  }, [router.query.id]);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        {currentProject && (
          <>
            <PageTitle pageName={currentProject?.title} />

            <ProjectDetails
              project={currentProject}
              projectId={+currentProject.id}
            />
          </>
        )}
      </Layout>
    </>
  );
}

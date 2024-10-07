import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Courses from "@/components/sections/innerpages/Courses"

export default function PageTeamGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Courses" />

    <Courses />
    </Layout>
    </>
  )
}
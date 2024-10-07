import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import CourseDetails from "@/components/sections/innerpages/CourseDetails"

export default function PageTeamGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Coaching Details" />

    <CourseDetails />
    </Layout>
    </>
  )
}
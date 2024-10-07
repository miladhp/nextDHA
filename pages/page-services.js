import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import PracticeArea from "@/components/sections/innerpages/PracticeArea"

export default function pagepracticearea() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Visa Grid" />

    <PracticeArea />
    </Layout>
    </>
  )
}
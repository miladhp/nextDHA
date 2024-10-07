import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import CountryDetails from "@/components/sections/innerpages/CountryDetails"

export default function PageTeamGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Country Details" />

    <CountryDetails />
    </Layout>
    </>
  )
}
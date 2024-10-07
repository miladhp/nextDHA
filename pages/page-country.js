import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import CountryGrid from "@/components/sections/innerpages/CountryGrid"

export default function PageTeamGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Country Grid" />

    <CountryGrid />
    </Layout>
    </>
  )
}
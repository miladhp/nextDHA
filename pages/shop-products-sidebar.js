import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopSidebar from "@/components/sections/innerpages/ShopSidebar"

export default function PageShopSidebar() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Shop Sidebar" />

    <ShopSidebar />
    </Layout>
    </>
  )
}
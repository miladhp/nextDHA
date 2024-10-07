import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopProduct from "@/components/sections/innerpages/ShopProduct"

export default function PageShopProduct() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Shop" />
    <ShopProduct />
    </Layout>
    </>
  )
}
import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopCheckout from "@/components/sections/innerpages/ShopCheckout"

export default function PageShopCheckout() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Shop Checkout" />

    <ShopCheckout />
    </Layout>
    </>
  )
}
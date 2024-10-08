import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import CountryDetails from "@/components/sections/innerpages/CountryDetails";
import { useRouter } from "next/router";

export default function PageTeamGrid() {
  const router = useRouter();

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Country Details" />

        <CountryDetails countryId={+router.query.id} />
      </Layout>
    </>
  );
}

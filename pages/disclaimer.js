import Layout from "@/components/layout/Layout";
import About from "@/components/sections/innerpages/About";

export default function PageAbout() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="auto-container my-5">
          <div className="row">
            <div className="col-12">
              <p>
                The information in this website is solely educational and is not
                an offer for the sale of securities. Nothing in this website
                shall be construed as an offer for investment in Dhanani EB-5
                International, LLC (the “Company”). Solicitations for
                investments will only be made through a Private Placement
                Memorandum provided to potential investors for such purpose.
              </p>
              <br />
              <p>
                The information contained in this website is solely for the use
                of providing information about the EB-5 program and the
                Company’s business model and is not intended as, and should not
                be taken as, financial, investment, legal or any other type of
                advice or as an offer to sell or a solicitation to buy any
                securities. While the information contained in this website has
                been compiled from sources the Company believes to be reliable,
                neither the Company nor its representatives make any
                representations or warranties as to the accuracy or completeness
                contained herein. All financial information used in this website
                is provided for reference only and are based on assumptions
                relating to the general economy, market conditions, and other
                factors beyond the Company’s control. Past performance does not
                guarantee or indicate future results. Any historical returns,
                expected returns, or probability projections may not reflect
                actual future performance. Investing involves risk, including
                loss of principal, and no assurance or representation is made by
                any person that any forecast or projection will be achieved.
                Therefore, nothing contained on this website should be relied
                upon as a promise, forecast, guarantee, or representation
                regarding the future.
              </p>
              <br />
              <p>
                Statements included in this website address activities, events,
                or developments that the Company anticipates will or may occur
                in the future. These statements are based on certain assumptions
                and analyses made by the Company in light of its experience and
                perception of historical trends, current conditions and expected
                future developments. However, whether actual results will
                conform with these expectations is subject to several risks and
                uncertainties, many of which are beyond the control of the
                Company, including but not limited to risks endemic to real
                estate investing, variations in residential housing demand,
                general business cycles and interest rate changes. Thus, all the
                forward-looking statements made in this website are qualified by
                these cautionary statements
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

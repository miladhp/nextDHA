import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    link: "https://www.bizjournals.com/houston/news/2024/09/20/dhanani-buys-first-colony-commons-sugar-land.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/09/HBJ-article.png",
    title: "Dhanani Private Equity Group buys First Colony Commons, Sugar Land",
    date: "Sep. 20, 2024",
  },
  {
    id: 2,
    link: "https://www.inc.com/inc5000/2024",
    img: "https://dhananipeg.com/wp-content/uploads/2024/09/INC-5000.png",
    title: "The Fastest-Growing Private Companies in America – 2024",
    date: "Sep. 23, 2024",
  },
  {
    id: 3,
    link: "https://www.bizjournals.com/houston/c/meet-hbj-2024-most-admired-ceo-awards-honorees/27121/2024-most-admired-ceo-honoree-nadyrshah-dhanani-of-dhanani-private-equity-group.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/09/Most-Admired-Ceo-2024.png",
    title: "Meet Most Admired CEO, Nick Dhanani – 2024",
    date: "Aug. 30, 2024",
  },
  {
    id: 4,
    link: "https://rejournals.com/realestateawards/reawards2024-tx/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/09/RedNews-2024.png",
    title: "REjournals Commercial Real Estate Awards 2024",
    date: "Aug. 15, 2024",
  },
  {
    id: 5,
    link: "https://traded.co/deals/texas/retail/sale/deal-268252",
    img: "https://dhananipeg.com/wp-content/uploads/2024/09/TradedTexas.jpg",
    title:
      "DhananiPEG Acquires 379829 SF Retail Power Center in Sugar Land for $31 Million",
    date: "Sep. 10, 2024",
  },
  {
    id: 6,
    link: "https://www.bizjournals.com/houston/subscriber-only/2024/04/12/2024-largest-houston-area-venture-capital-and-private.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/04/Screenshot-2024-04-16-085342-1.png",
    title: "2024 Largest Houston-area venture capital and private equity firms",
    date: "Apr. 12, 2024",
  },
  {
    id: 7,
    link: "https://issuu.com/rejournals/docs/rednews_texas_icons_2024_issue?fr=sY2JmYjY3NDQ3NzQ",
    img: "https://dhananipeg.com/wp-content/uploads/2024/04/REDNews_Texas-ICONS-Cover-2024-scaled-1.jpg",
    title: "2023 Texas Icons  ",
    date: "Mar. 19, 2024",
  },
  {
    id: 9,
    link: "https://dhananipeg.com/wp-content/uploads/2023/05/Nick-Dhanani-6.pdf",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_5.png",
    title: "HBJ unveils the 2023 Most Admired CEO Awards honorees",
    date: "Jun. 28, 2023",
  },
  {
    id: 10,
    link: "https://www.bizjournals.com/houston/news/2023/05/25/dhanani-private-equity-group-montgomery-county.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_12.png",
    title:
      "DPEG’s CEO, Nick Dhanani’s Feature on the Journey so Far and Future Outlook",
    date: "",
  },
  {
    id: 11,
    link: "https://www.bizjournals.com/houston/news/2023/05/25/dhanani-private-equity-group-montgomery-county.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_12.png",
    title:
      "Dhanani Private Equity Group acquires shopping center, land for apartment complex in Montgomery County",
    date: "",
  },
  {
    id: 12,
    link: "https://www.bizjournals.com/houston/news/2023/03/29/investment-development-ventures-anserra-industrial.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_3.png",
    title: "HBJ reveals honorees for inaugural Family-Owned Business Awards",
    date: "Apr. 27, 2023",
  },
  {
    id: 13,
    link: "https://communityimpact.com/houston/spring-klein/development/2023/04/19/residential-commercial-growth-booming-along-fm-2920-corridor/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_4.png",
    title: "Residential, commercial growth booming along FM 2920 corridor",
    date: "Apr. 20, 2023",
  },
  {
    id: 14,
    link: "https://therealdeal.com/texas/houston/2023/03/30/dhanani-dives-deep-into-multifamily/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_9.png",
    title: "Dhanani dives deep into multifamily",
    date: "Mar. 30, 2023",
  },
  {
    id: 15,
    link: "https://www.bizjournals.com/houston/news/2023/03/29/investment-development-ventures-anserra-industrial.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_3.png",
    title:
      "Investment & Development Ventures building 716K-SF industrial park in Katy",
    date: "Mar. 29, 2023",
  },
  {
    id: 16,
    link: "https://www.bizjournals.com/houston/news/2023/03/27/dhanani-private-equity-group-apartment-development.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_15.png",
    title:
      "Dhanani Private Equity Group to open multiple apartment complexes, build-to-rent community",
    date: "",
  },
  {
    id: 17,
    link: "https://www.houstonchronicle.com/business/real-estate/article/hc122922office-17683697.php",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_2.png",
    title:
      "Investor buys Galleria mixed-use complex in a bet on Houston’s office recovery",
    date: "Dec. 30, 2022",
  },
  {
    id: 18,
    link: "https://www.fortbendfocus.com/dhanani-private-equity-group-hits-billion-dollar-mark-and-takes-on-fort-bend-county/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_1.png",
    title:
      "Dhanani Private Equity Group Hits Billion Dollar Mark and Takes on Fort Bend County",
    date: "Dec. 29, 2022",
  },
  {
    id: 19,
    link: "https://www.bizjournals.com/houston/news/2022/12/12/dhanani-equity-group-mixed-use-fluor-sugar-land.html",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_14.png",
    title:
      "Dhanani Private Equity Group buys former Fluor property in Sugar Land for mixed-use development",
    date: "Dec. 12, 2022",
  },
  {
    id: 20,
    link: "https://www.houstonchronicle.com/business/real-estate/article/Dhanani-buys-Fluor-Land-Sugar-Land-mixed-use-17641294.php",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_13.png",
    title:
      "Mixed-use development planned for former Fluor site next to Smart Financial Centre in Sugar Land",
    date: "Dec. 9, 2022",
  },
  {
    id: 21,
    link: "https://dhananipeg.com/wp-content/uploads/2022/05/Dhanani-Private-Equity-Group-1.pdf",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_6.png",
    title:
      "Nick Dhanani: The journey from a cashier to a successful leader of Dhanani Private Equity",
    date: "2022",
  },
  {
    id: 22,
    link: "https://abc13.com/dhanani-private-equity-group-wealth-investment-investing-houston/11320671/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_10.png",
    title:
      "Dhanani Private Equity Group Talks About Growth as Record 2021 Year Winds Down",
    date: "Dec. 16, 2021",
  },
  {
    id: 23,
    link: "https://commercialobserver.com/2021/12/argentic-real-estate-finance-dhanani-private-equity-group-fountains-on-the-lake-houston-retail-amc-main-event-entertainment-bed-bath-and-beyond-hobby-lobby-cmbs/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_11.png",
    title:
      "Argentic Lends $59M Toward Buy of Massive Retail Center Near Houston",
    date: "Dec. 14, 2021",
  },
  {
    id: 25,
    link: "https://abc13.com/dhanani-private-equity-group-finances-investing/11121384/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_7.png",
    title: "Dhanani Private Equity Group wants to educate you on investing!",
    date: "Oct. 20, 2021",
  },
  {
    id: 26,
    link: "https://abc13.com/dhanani-private-equity-group-group-revenue-houston-wealth/11035009/",
    img: "https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_15.png",
    title: "Dhanani Private Equity Group talks Importance of Building Wealth",
    date: "Sep. 29, 2021",
  },
];
export default function InMediaSection() {
  return (
    <>
      <section className="services-section-two" id="media">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(/images/background/bg3.jpg)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            {" "}
            <span className="sub-title">GET TO KNOW US</span>
            <h2 className="words-slide-up text-split">In The Media</h2>
          </div>
          <div className="row">
            {blogs.map((blog) => {
              return (
                <div className="col-12 col-md-6 col-lg-3" key={blog.id}>
                  <div className="service-block-two">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link href={blog.link} target="_blank">
                            <Image
                              width="768"
                              height="768"
                              style={{
                                display: "inline-block",
                                objectFit: "contain",
                                width: "100%",
                                height: "240px",
                              }}
                              src={blog.img}
                              alt={blog.title}
                            />
                          </Link>
                        </figure>
                      </div>
                      <div className="content-box">
                        <div
                          className="inner py-2 w-100 d-block"
                          style={{ minHeight: "150px" }}
                        >
                          <h5 className="title">{blog.title}</h5>
                        </div>
                        <Link
                          target="_blank"
                          href={blog.link}
                          className="theme-btn btn-style-one dark-bg"
                        >
                          <span className="btn-title">
                            Learn more <i className="fa fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

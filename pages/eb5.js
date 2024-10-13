import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Benefits from "@/components/sections/home-1/Benefits";
const visaKeys = {
  length: "Length",
  investmentAmount: "Investment Amount",
  levelOfInvolvement: "Level Of Involvement",
  jobBusinessFlexibility: "Job Business Flexibility",
  family: "Family",
  sponsorships: "Sponsorships",
  education: "Education",
};
const visas = [
  {
    id: 1,
    name: "H1B",
    length: "3 yrs (can be extended)",
    investmentAmount: "---",
    levelOfInvolvement: "Employment with a sponsoring company required",
    jobBusinessFlexibility: "Can only work for the sponsoring company",
    family:
      "Spouse and children (under 21) may reside and study in the US but not work.",
    sponsorships: "Required",
    education: "International or Out-of-State Tuition",
  },
  {
    id: 2,
    name: "EB-5",
    length: "Condition Green Card - Green Card - Citizenship",
    investmentAmount: "$800,000 or $1,050,000",
    levelOfInvolvement: "Passive investment",
    jobBusinessFlexibility: "Can work anywhere",
    family:
      "Spouse and children (under 21) may reside, study, and work in the US and will also receive conditional green cards.",
    sponsorships: "Not Required",
    education: "In-State Tuition (Eligible for scholarships and grants)",
  },
  {
    id: 3,
    name: "EB2",
    length: "5 yrs (can be renewed)",
    investmentAmount: "$100,000+",
    levelOfInvolvement: "Active investment",
    jobBusinessFlexibility:
      "Can only work for the created or purchased company",
    family:
      "Spouse and children (under 21) may reside and study in the US.<br>Only the spouse can apply for work authorization.",
    sponsorships: "Not Required",
    education: "Out-of-State Tuition (Can be converted into In-State)",
  },
];

const sections = [
  {
    id: 1,
    title: "Flexible Employment",
    img: "/images/people/people-21.jpg",
    theme: "dark",
    advantages: [],
    description:
      "  Work or initiate a business anywhere in the U.S., allowing you the freedom to change locations as desired.",
  },
  {
    id: 2,
    title: "Flexible Residence",
    img: "/images/people/people-19.jpg",
    theme: "light",
    advantages: [],
    description:
      "  Live anywhere in the U.S. Leave and enter the U.S. anytime. No visa required.",
  },
  {
    id: 3,
    title: "Better Education",
    img: "/images/background/bg-13.jpg",
    theme: "light",
    advantages: [
      "Increase the odds of children’s admission to top colleges.",
      "Lower Tuition Costs.",
      " Pay significantly less for your children’s education.",
    ],
    description: "",
  },
  {
    id: 4,
    title: "Become a US Citizen",
    img: "/images/people/people-16.jpg",
    theme: "dark",
    advantages: [
      "Optional path to become a US citizen after 5 years.",
      "Social Security Benefits.",
      "Receive retirement benefits in the form of supplemental income.",
    ],
    description: "",
  },
  {
    id: 5,
    title: "Stable Lifestyle",
    img: "/images/people/people-25.webp",
    theme: "dark",
    advantages: [
      "Secure a backup plan in political instability or economic volatility.",
      "Economic Stability.",
      "Protect funds with a passive investment and successful immigration.",
      "Healthcare Benefits.",
      "Access to technologically advanced healthcare services.",
    ],
    description: "",
  },
];

const stages = [
  {
    id: 1,
    title: "Application Stage",
    description:
      "Proper documentation showing the source of funds for the entire $800,000 investment and Administrative Fee is critical.",
    steps: [
      {
        id: 11,
        icon: "flaticon-documents",
        step: "Step 01",
        html: `<p class="small lh-base text-start">Qualified investors are invited to activate their complimentary <strong class="fw-bold text-success">LCR EB-5 Service Plan.</strong> In return, LCR will provide qualified investors with unlimited “one-stop-shop” concierge services on a complimentary basis, for <strong class="fw-bold text-success">up to 60 days, including:</strong><br /><br /><small>&#8226; Unlimited support on your EB-5 program and project-related questions</small><br /><br /><small>&#8226; Preliminary SOF assessment and creation of custom I-526 application plan</small><br /><br /><small>&#8226; Referrals to top immigration law firms and local banking partners (if required)</small></p>`,
        title: "EB-5 & PROJECT EVALUATION PROCESS",
        text: "Qualified investors are invited to activate their complimentary LCR EB-5 Service Plan. In return, LCR will provide qualified investors with unlimited “one- stopshop” concierge services ona complimentary basis.",
        delay: "", // No delay for the first step
      },
      {
        id: 12,
        icon: "flaticon-licensing",
        step: "Step 02",
        html: `<p class="small lh-base text-start">LCR conducts a preliminary SOF assessment to determine an ideal SOF strategy (i.e. one where the investment capital is easiest to (i) document and (ii) liquidate into cash)<br /> The prospective investor <strong class="fw-bold text-success">must engage an experienced U.S. immigration attorney</strong> To document the lawful source of funds and prepare their I-526 petition.<br /><br /><small>&#8226; Legally Obtain Funds</small><br /><br /><small>&#8226; Consult an Immigration Attorney</small><br /><br /><small>&#8226; Document Source of Funds</small></p>`,

        title: "DOCUMENT LAWFUL SOURCE OF FUNDS",
        text: "LCR conducts a preliminary SOF assessment to determine an ideal SOF strategy (i.e. one where the investment capital is easiest to (i) document and (ii) liquidate into cash. The prospective investor must engage an experienced U.S. immigration attorney to document the lawful source of funds and prepare their I-526 petition.",
        delay: "300ms",
      },
      {
        id: 13,
        icon: "flaticon-visa",
        step: "Step 03",
        html: `<p class="small lh-base text-start">Deposit $800k + Administrative Fee into the EB-5 fund escrow account.</p>`,
        title: "WIRE CAPITAL TO US ESCROW ACCOUNT",
        text: "Deposit $800k + Administrative Fee into the EB-5 fund escrow account.",
        delay: "600ms",
      },
      {
        id: 14,
        icon: "flaticon-visa",
        step: "Step 04",
        html: `<p class="small lh-base text-start">Your U.S. immigration attorney files the I-526 petition with the USCIS.<br /><br /><small>&#8226; immigration Attorney</small><br /><br /><small>&#8226; Form I-526</small><br /><br /><small>&#8226; US Citizenship & Immigration Services</small></p>`,
        title: "FILE I-526 PETITION WITH USCIS",
        text: "Your U.S. immigration attorney files the I-526 petition with the USCIS.",
        delay: "600ms",
      },
    ],
  },

  {
    id: 2,
    title: "Conditional US Residency Stage ",
    description: "",
    steps: [
      {
        id: 21,
        icon: "flaticon-documents",
        step: "Step 05",
        html: `<p class="small lh-base text-start"> <strong class="fw-bold text-success">18 – 24 MONTHS</strong><br />The filing date of the I-526 Petition is known as the Priority Date.<br /><br />Track investment via personal online account with 3rd party fund administrator.<br /><br />Monitor construction progress via quarterly project updates, 24/7 webcam, and site visits.<br /><br /><strong class="text-success fw-bold"> RECEIVE I-526 APPROVAL!</strong><br /><br />Due to Covid-19 and USCIS processing, actual I-526 approval times are currently extended by 3-6 months.</p>`,
        title: "I-526 PETITION REVIEW & APPROVAL",
        text: "The filing date of the I-526 Petition is known as the Priority Date. Track investment via personal online account with 3rd party fund administrator. Monitor construction progress via quarterly project updates, 24/7 webcam, and site visits.",
        delay: "", // No delay for the first step
      },
      {
        id: 22,
        icon: "flaticon-licensing",
        step: "Step 06",
        html: `<p class="small lh-base text-start">If your Priority Date is “Current”, immediately proceed to Step 7.<br /><br />If EB-5 visas are not available for the principal applicant’s country of birth, then you must wait until your Priority Date becomes Current.</p>`,
        title: "PRIORITY DATE REVIEW",
        text: "If your Priority Date is “Current”, immediately proceed to Step 7. If EB-5 visas are not available for the principal applicant’s country of birth, then you must wait until your Priority Date becomes Current.",
        delay: "300ms",
      },
      {
        id: 23,
        icon: "flaticon-visa",
        step: "Step 07",
        html: `<p class="small lh-base text-start"> <strong class="fw-bold text-success">3-9 MONTHS.</strong> <br /><br /> <strong class="fw-bold">If you live in the United States</strong><br /><br />File an Adjustment of Status (AOS) Application (File I-485) <br /><br /> <strong class="fw-bold">If you Live Overseas</strong><br /><br />Attend EB-5 visa interview at the local U.S. consulate (File DS-260)</small></p>`,
        title: "ADJUST IMMIGRATION STATUS",
        text: "If you live in the United States File an Adjustment of Status (AOS) Application (File I-485). If you Live Overseas Attend EB-5 visa interview at the local U.S. consulate (File DS-260)",
        delay: "600ms",
      },
      {
        id: 24,
        icon: "flaticon-visa",
        step: "Step 08",
        html: `<p class="small lh-base text-start">Principal applicant and immediate family members (if any) will receive <strong class="fw-bold text-success">2 year green cards.</strong>upon entering the U.S <br /><br />The filing date of the I-526 Petition is known as the <strong class="fw-bold text-success"> Priority Date.</strong>The U.S. Department of State publishes a monthly <strong class="fw-bold text-success">  VISA BULLETIN</strong> which lists cut-off dates for the EB-5 program, based on the principal applicant’s country of birth</p>`,
        title: "FILE I-526 PETITION WITH USCIS",
        text: "Principal applicant and immediate family members (if any) will receive 2 year green cards upon entering the U.S",
        delay: "600ms",
      },
    ],
  },

  {
    id: 3,
    title: "Permanent US Residency Stage ",
    description: "",
    steps: [
      {
        id: 31,
        icon: "flaticon-documents",
        step: "Step 09",
        html: `<p class="small lh-base text-start"><strong class="fw-bold text-success">21-24 MONTHS</strong><br />The investor must visit the United States within 180 days of approval and <strong class="fw-bold text-success"> must visit the U.S. at least once every six months.</strong><br />Many investors apply for a  <strong class="fw-bold text-success">   Reentry Permit,</strong>thus eliminating the need to travel to the U.S. as frequently</p>`,
        title: "CONDITIONAL US RESIDENCY PERIOD",
        text: "21-24 MONTHS The investor must visit the United States within 180 days of approval and must visit the U.S. at least once every six months. Many investors apply for a Reentry Permit, thus eliminating the need to travel to the U.S. as frequently.",
        delay: "", // No delay for the first step
      },
      {
        id: 32,
        icon: "flaticon-licensing",
        step: "Step 10",
        html: `<p class="small lh-base text-start">File I-829 petition to remove conditions on your U.S. green card<br /><br /><small>&#8226; immigration Attorney</small><br /><br /><small>&#8226; Form I-829</small><br /><br /><small>&#8226; US Citizenship & Immigration Services</small></p>`,
        title: "I-829 PETITION REVIEW & APPROVVAL",
        text: "File I-829 petition to remove conditions on your U.S. green card.",
        delay: "300ms",
      },
      {
        id: 33,
        icon: "flaticon-visa",
        step: "Step 11",
        html: `<p class="small lh-base text-start"> <strong class="fw-bold text-success">20-30 MONTHS</strong><br />Receive your permanent green card <br /><br />Renews every 10 years.<br /><br /><strong class="fw-bold text-success">RECEIVE I-829 APPROVAL!</strong></p>`,

        title: "RECEIVE PERMANENT GREEN CARD(S)",
        text: "Receive your permanent green card.",
        delay: "600ms",
      },
      {
        id: 34,
        icon: "flaticon-visa",
        step: "Step 12",
        html: `<p class="small lh-base text-start">If desired, the investor can apply for U.S. citizenship <strong class="fw-bold text-success">5 years </strong> after conditional green card.</p>`,

        title: "APPLY FOR US CITIZENSHIP (OPT)",
        text: "If desired, the investor can apply for U.S. citizenship 5 years after conditional green card.",
        delay: "600ms",
      },
    ],
  },
];

const FAQ = [
  {
    id: 1,
    question: "What’s an EB-5 overview?",
    answer: `<div><p>The EB-5 visa is an immigrant visa available in the United States which enables foreign investors to obtain permanent residency in the United States.
In order to obtain an EB-5 visa, the foreign investor must make a qualifying investment in a new commercial enterprise that creates jobs in the country.</p><br /><ol class="list-group list-group-numbered">
  <li class="list-group-item">To qualify for an EB-5 visa (a green card), an investor needs to make a minimum investment of $1,050,000 in a new commercial enterprise. If the investment is made in a targeted employment area (TEA) however, this minimum investment amount is reduced to $800,000.</li>
  <li class="list-group-item">Because the EB5 Visa program aims to create jobs for U.S. workers and fuel economic growth in the country, a part of the investment must create or preserve at least 10-full time jobs for U.S. workers. This needs to be achieved within two years of receiving a conditional green card. The majority of EB-5 investments are made through designated regional centers. These are private entities that facilitate the investment process and help investors meet the job creation requirement.</li>
  <li class="list-group-item">  Initially, the foreign investor will be granted a conditional green card, which is valid for two years upon approval of the EB-5 petition.</li>
  <li class="list-group-item"> After the two year period, the investor will need to file a petition to remove the conditions on their green card and prove that the investment and job creation requirements have been met.</li>
  <li class="list-group-item"> Once these conditions have been removed, the investor and his or her family will receive permanent resident status and qualify for permanent green cards in the U.S.</li>
  <li class="list-group-item">  Five years after first receiving conditional permanent resident status, they can become naturalized citizens.</li>
</ol></div>`,
  },
  {
    id: 2,
    question: "What Are The Key U.s. Green Card Benefits?",
    answer: `<ol class="list-group list-group-numbered">
  <li class="list-group-item">Permanent residents face no employment restrictions.</li>
  <li class="list-group-item">The children of permanent residents can access the U.S. public education system.
</li>
  <li class="list-group-item"> U.S. residency improves the likelihood of college admission.</li>
  <li class="list-group-item"> Green card holders have access to technologically advanced U.S. healthcare services.</li>
  <li class="list-group-item">  Permanent residents can travel freely domestically and abroad.</li>
  <li class="list-group-item"> Green card holders qualify for additional support when they retire.</li>
  <li class="list-group-item"> Permanent residency benefits the entire household.</li>
  <li class="list-group-item"> The United States is a safe haven for immigrants from politically or economically unstable countries.</li>
</ol>`,
  },

  {
    id: 3,
    question: "What is the EB-5 Immigrant Investor Program?",
    answer: `<div><p>The EB-5 Immigrant Investor Program offers foreign investors with the required capital and their immediate family members a simpler path to securing a better future in the United States. The EB-5 visa is the fastest way to obtain a green card. Through this process, the foreign investor can potentially be able to live and work in the United States within months instead of years.</p><br />
    <p>The EB-5 program allows foreign entrepreneurs to obtain permanent U.S. residence by investing $900,000 or $1.8 million in a project that creates 10 full-time, permanent jobs for U.S. workers. To qualify for the lower investment amount, the project must be located within a targeted employment area (TEA), which is either a rural area with fewer than 20,000 inhabitants or an area with an unemployment rate 150% of the national average.</p><br /></div>`,
  },

  {
    id: 4,
    question: "What is the EB-5 Regional Center Pilot Program?",
    answer: `<div>
    <p>The program was launched in 1993 to help formalize the program by permitting investors to pool investments in larger projects.</p><br />
    <p class="fw-bold">What are the basic steps to the EB-5 process?</p>
    <ol class="list-group list-group-numbered">
  <li class="list-group-item">Finding the right EB-5 project.</li>
  <li class="list-group-item"> Investing the necessary capital and filing an I-526 Petition.</li>
  <li class="list-group-item">  Obtaining conditional permanent resident status.</li>
  <li class="list-group-item">  Filing an 1-829 petition and removing conditions from resident status.</li>
  <li class="list-group-item">   U.S. citizenship (optional)</li>
</ol>

<p class="fw-bold">What’s the difference between the I-526 petition and the I-526E petition?</p>
    <ol class="list-group list-group-numbered">
  <li class="list-group-item"> I-526 is for direct investors in a commercial enterprise.</li>
  <li class="list-group-item"> I-526E is for EB-5 participants investing via a regional center.</li>
</ol>

<p class="fw-bold">What is the difference between a direct vs. indirect regional center investment models?</p>
    <ol class="list-group list-group-numbered">
  <li class="list-group-item">Direct investments involve directly investing in a commercial enterprise with no intermediary.</li>
  <li class="list-group-item">  Regional centers set us an investment fund and investors buy equity stakes in the fund. The fund either loans money to or buys equity in job-creating entity. Finally, the job-creating entity uses the fund’s investment to create employment.</li>
    <li class="list-group-item"> Direct can accept funding from only one EB-5 investor.</li>
    <li class="list-group-item"> Regional center-sponsored projects can pool capital from multiple visa applicants.</li>
</ol>
</div>`,
  },
  {
    id: 5,
    question: "What is the EB-5 Regional Center Pilot Program?",
    answer: `<div>
    <p>What Are The Specific Benefits To Obtaining A Green Card Thought EB-5?</p>
    <ol class="list-group list-group-numbered">
  <li class="list-group-item">Business opportunities: Investors can start their own business to create jobs or opportunities for themselves and others. This may give them access to additional federal benefits.</li>
  <li class="list-group-item"> Tax benefits: Investors can benefit from various deductions and credits available to residents when filing income tax returns. This may potentially reduce their overall tax liability.</li>
  <li class="list-group-item">  Diversity visa backlog avoidance: In some countries, the EB-5 program provides a quicker route to U.S. immigration than other family or employment-based visa categories.</li>
  <li class="list-group-item">  Access to Social Services: Green card holders have access to various social services, such as Social Security benefits, unemployment insurance, and retirement programs.</li>
</ol>
</div>`,
  },
  {
    id: 6,
    question: "What is the history of the EB-5 Legislation?",
    answer: `<div>
    <p>Congress created the EB-5 Immigrant Investor Program in 1990 to generate job-creating foreign investment in the United States. The program was enacted through the Immigration and Nationality Act, sections 203(b)(5) and 216A. Pertinent EB5 regulations are located within the Code of Federal Regulations (CFR) in Title 8, sections 204.6 and 216.6.</p>
</div>`,
  },
  {
    id: 7,
    question: "What is the EB-5 Reform and Integrity Act of 2022?",
    answer: `<div>
    <p>A new law aimed to make the EB-5 process fairer, more transparent, and more efficient. Changes included:</p>
    <ol class="list-group list-group-numbered">
  <li class="list-group-item">A new, lower minimum investment amount of $1,050,000 to reflect the changing cost of living</li>
  <li class="list-group-item"> A new, lower investment amount of $800,000 for projects located in a targeted employment area (TEA)—we’ll explain more about what a TEA is later in the article The introduction of set-aside visas for EB-5 applicants who invest in TEA projects</li>
  <li class="list-group-item">  Enabling concurrent filing. In other words, EB-5 investors can apply to have their immigration status adjusted to conditional permanent resident via Form I-485 at the same time as applying for the EB-5 Program via Form I-526E. This speeds up the EB-5 process and makes it easier for foreign nationals to live in the U.S. while their application is process.</li>
  <li class="list-group-item"> Requiring USCIS to perform background checks on people involved in running a regional center, project developers, and other associated individuals</li>
  <li class="list-group-item"> Empowering the Department of Homeland Security to inspect regional centers and regional center projects to ensure compliance.</li>
</ol>
<p>Extension of the Regional Center Program, which lapsed in 2021, putting all EB-5 activity on hold. This extension by the RIA will be in place until 2027.</p>
</div>`,
  },
  {
    id: 8,
    question: "What is a Targeted Employment Area (TEA)?",
    answer: `<div>
    <p>TEAs are specific type of geographical designation to encourage investment in areas with high unemployment rates or rural areas. The main purpose of TEAS is to promote economic development and job creation in areas that may have a higher need for such an investment.</p>
    <p class="fw-bold">Types of TEAS:</p>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item">High Unemployment TEA: These are areas where unemployment rate is at least 150% of the national average unemployment rate.</li>
      <li class="list-group-item"> Rural TEA: These are areas located outside of a metropolitan statistical area (MSA) or outside of a city or town with a population of 20,000 or more.</li>
    </ol>
    <br />
    <p class="fw-bold">What is a good EB-5 project?</p>

    <ol class="list-group list-group-numbered">
      <li class="list-group-item">Any legitimate business qualifies – from any industry – including real estate, hotel operations, assisted living, manufacturing, research and development, retail, services.
a. Must create or save 10 full-time jobs for U.S. workers for each EB-5 investor.</li>
      <li class="list-group-item">Jobs that involve new construction or rehabilitation of vacant structures tend to work best.
If construction is expected to take more than two years, the jobs created directly by construction project will be counted toward the employment creation requirement.</li>
    </ol>

    <br />
    <p class="fw-bold">What is the first step to apply for an EB-5 visa?</p>
    <p>The first step is submitting Form I-526, Immigrant Petition by Alien Investor to U.S. Citizenship and Immigration Services (USCIS). By submitting this petition, the investor proves to USCIS that they meet all the criteria of the EB5 program:</p>

    <ol class="list-group list-group-numbered">
      <li class="list-group-item">They have invested the required amount in a new commercial enterprise (NCE).</li>
      <li class="list-group-item">Their investment will create 10 full-time jobs for U.S. workers.</li>
    </ol>
</div>`,
  },

  {
    id: 9,
    question: "What Is The Most Common Source Of Investor Capital?",
    answer: `<div>
    <p>Asset-based loans are the most common capital source. Loans are acceptable sources of funds, but investors must provide evidence that all assets and loans were obtained legally.</p>
    <p class="fw-bold">Can you apply for an EB5- while holding an H-1B visa?</p>
    <p>If you have a valid, in-status H-1B visa, you are free to submit multiple petitions at the same time to United States Citizenship and Immigration Services (USCIS). Thus, you can take part in the EB-5 program while you are working in the United States without canceling your H-1B visa or any pending green card petition. All you need to do is maintain your H-1B status until the EB5 petitions you have filed with USCIS have been approved: first, I-526, Immigrant Petition by Alien Investor, and, subsequently, I-485, Application to Register Permanent Residence or Adjust Status.</p>
    <br />
    <p class="fw-bold">How long is the EB-5 process?</p>
    <p>The EB-5 visa process is one of the fastest and reliable ways for immigrant investors and their family to receive permanent residence status in the U.S. The EB5 process takes several years to complete.Total time required varies depending on factors such as:</p>
    
    <ol class="list-group list-group-numbered">
      <li class="list-group-item">The type of project</li>
      <li class="list-group-item">USCIS process efficiency</li>
      <li class="list-group-item">EB-5 visa demand from an immigrant’s home country</li>
      <li class="list-group-item">How straightforward or complex an individual’s case is</li>
      <li class="list-group-item">How thoroughly the forms have been submitted</li>
      <li class="list-group-item">The level of evidence provided to demonstrate compliance with all EB-5 program requirements.</li>
    </ol>
    <br />


    <p class="fw-bold">What are the common challenges of EB-5?</p>

    <ol class="list-group list-group-numbered">
      <li class="list-group-item">Changes in policy:
        <ol class="list-group list-group-numbered">
          <li class="list-group-item">Changes in legislation can affect different aspects of the program.</li>
          <li class="list-group-item">Denials and Requests for Evidence:
            <ol class="list-group list-group-numbered"> 
              <li class="list-group-item">If the USCIS believes not enough evidence exists to justify approval of a petition, it may issue a request for evidence (RFE) to collect further information. There is also the chance that the USCIS may issue a Notice of Intent to Deny (NOID), which signifies that the adjudicator believes the petition should be denied but wishes to present the investor the opportunity to clear up any areas of concern. Both of these notices may delay an investor’s petition and involve additional costs to revise the petition materials, for example, to consult with counsel.</li>
              <li class="list-group-item">An investor has the option of requesting an administrative review if his or her petition is denied, but this involves a significant waiting period. Luckily, the approximate approval rates for I-526 and 1-829 petitions are 85% and 90%, respectively.</li>
            </ol>
          </li>

          <li class="list-group-item">Fraud
            <ol class="list-group list-group-numbered"> 
              <li class="list-group-item">a. Despite the efforts of the USCIS, the SEC, and other government agencies to enforce the legal aspects of the EB-5 program, cases like SEC v. A Chicago Convention Center, LLC, illustrate the risk of fraud when developers and other agents misrepresent elements of the program or individual projects to investors. However, such cases are relatively rare.</li>
              <li class="list-group-item">Investors applying to the EB-5 program face unique challenges and opportunities. By providing thorough application materials and exercising due diligence, as with any other investment, investors can increase the likelihood of a smooth petition process.</li>
            </ol>
          </li>
        </ol>
      </li>
      
      </li>
    </ol>
</div>`,
  },

  {
    id: 10,
    question: "What Types Of Funds Are Accepted?",
    answer: `<div>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item">Salary and wages from labor, services, etc.</li>
      <li class="list-group-item"> Income from a business.</li>
      <li class="list-group-item"> Income from a patent.</li>
      <li class="list-group-item"> Funds earned from royalties on a publication.</li>
      <li class="list-group-item">Interest accrued on an investment or savings account may be put toward an EB-5 investment.</li>
      <li class="list-group-item">Loans to make EB-5 investments, as long as investors can prove that the loan provider sourced the loan funds legally.</li>
      <li class="list-group-item">Gifted funds from friends and family for EB-5 investments, as long as investors can prove that the gifted funds were acquired legally. Individuals with children older than 21 years of age, or those who do not want to immigrate to the United States themselves, may gift their children the funds to make an EB-5 investment.</li>
      <li class="list-group-item">Funds from criminal or civil legal settlements.</li>
      <li class="list-group-item">Inheritances.</li>
      <li class="list-group-item">Income gained from the selling of property.</li>
    </ol>
    <br />
    <p class="fw-bold">What information and documentation is needed to qualify?</p>
    <p>An investor must apply to the USCIS for EB-5 qualification through the submission of a number of required elements including:</p>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item">USCIS forms</li>
      <li class="list-group-item">Business plans</li>
      <li class="list-group-item">Economic (job creation) predictions</li>
      <li class="list-group-item">Financial information</li>
      <li class="list-group-item">Other supporting evidence</li>
    </ol>
</div>`,
  },

  {
    id: 11,
    question: "What Are The Processing Procedures For The EB-5 Program?",
    answer: `<div>
    <p>A potential investor is required to file a form I-526 for Alien Entrepreneur in conjunction with the documents supporting the business in which the investment is being made, which satisfy the EB-5 Investor Visa program requirements. Upon approval of this application, the investor and immediate family (spouse and single children under 21 years of age) may apply for an Immigrant Visa at the US Consulate, or if the investor is already located in the United States, apply for adjustment of status at any regional USCIS office. The entire application process may take nine to fifteen months to be fully completed.</p>
  
    <br />
    <p class="fw-bold">Is dual citizenship allowed under this program?</p>
    <p>The U.S. allows dual citizenship, but your original country of origin may not allow it.</p>
    <br />
    <p class="fw-bold">Can I apply if I am currently Out-Of-Status (i.e. you live in the United States but do not have a current visa)?</p>
    <p>Out-Of-Status nationals are no longer permitted to apply for permanent residency from within the United States.</p>
    
</div>`,
  },

  {
    id: 12,
    question:
      "Must An Investor Have Real Estate Or Business Experience Or A Minimum Education Level To Participate?",
    answer: `<div>
    <p>There are no requirements with respects to experience or education.</p>
  
    <br />
    <p class="fw-bold">Can I apply if I’m been rejected or terminated in the past by USCIS for an L-1, E-2, B, or other visa?</p>
    <p>Rejection in the past does not disqualify the applicant, unless the reasons are related to immigration fraud or other significant problems.</p>
    <br />
    <p class="fw-bold">Why doesn’t any EB-5 offering guarantee a return of capital?</p>
    <p>A central requirement of the program is that an EB-5 investor’s capital must remain “at risk” for the duration of the conditional residency period.</p>
     <br />
    <p class="fw-bold">What issues have been the most problematic in EB-5 cases?</p>
    <p>In an era when the federal government more closely scrutinizes foreign direct investment, USCIS case examiners require a well-documented source of funds.</p>
     <br />
    <p class="fw-bold">What is a re-entry permit?</p>
    <p>To maintain your green card, you have to keep from abandoning your residence in the U.S. You can travel out of the U.S. no more than 180 days without abandoning your residence. You can apply for a re-entry permit, which allows you to stay out of the U.S. for up to two years without abandoning your residence.</p>
    <p>You can apply for a reentry permit (on form 1131) before you leave the U.S. You can depart before the reentry permit is approved. With such a reentry permit, you can also return to the US at any point until the reentry permit’s expiration date. Reentry permits are issued for two years. At the expiry of these two years, you can apply for a new one. The second such reentry permit will be granted for two years ago, but then onwards all subsequent ones may only be approved for one year at a time.</p>
    <p>If outside of the United States for two or more years after being issued a reentry permit, a Returning Resident (SB-1) immigrant visa is necessary. While outside the United States, permanent residents are still required to file U.S. income tax returns, and failure to do so may jeopardize their status. Permanent resident status will be considered abandoned if a green card holder moves to another country and no longer intends to reside in the United States.</p>
 <br />
     <p class="fw-bold">Can my green card be taken away from me?</p>
    <p>Once you receive your green card, there are only two conditions required to keep it for life.</p>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item">You must not become removable or inadmissible. The most common way to do this is to be convicted of a serious crime.</li>
      <li class="list-group-item">You do not abandon the United States as your permanent residence.</li>
     </ol>

      <br />
      <p class="fw-bold">How long does a green card last?</p>

      <p>By receiving your green card though an EB-5 investment, you should have a conditional green card for two years. You must apply for removal of the condition within 90 days before the two years are up. Once that is approved, you have a regular unconditional green card, which must be renewed after ten years.</p>
    

          <br />
      <p class="fw-bold">What happens to the family’s applications for green cards if the investor dies before or after granting the green cards – provisional and final?</p>

      <p>The second parent may take over as the principal applicant and the application continues. However, if you wish to not proceed with the application, the second parent may refuse to step in as principal applicant, in which case the application itself will be denied by USCIS.</p>
    
      
          <br />
      <p class="fw-bold">After my I-526 petition approval, may members of my family have their consular interview in different countries?</p>

      <p>Family members may interview in different countries. The country of origin or where the family has current ties is the standard interview site. However, a student attending school in the U.S. would not have to return to the country of origin; status can be adjusted in the United States at the district office of the USCIS</p>
    
</div>`,
  },

  {
    id: 13,
    question: "What Is The Purpose Of The Consular Application And Interview?",
    answer: `<div>
    <p>The purpose of the Consular application is to ensure that the investor and family members undergo medical, police, security and immigration history checks before the conditional permanent resident visas are issued. At the interview, the Consular Officer may address these issues and information printed on the I-526 petition, including the nature of the investment. If the investor and family are in the United States, they may apply to adjust their status at the appropriate office of the USCIS.</p>
  
    <br />
    <p class="fw-bold">What are reasons the 1-829 petition may fail?</p>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item">If the project does not create the jobs required.</li>
      <li class="list-group-item">Failure to maintain residency in the U.S.</li>
      <li class="list-group-item">Requirement of maintaining green card during conditional green card period.</li>
      <li class="list-group-item">The investor must spend no more than 180 days outside of the U.S.</li>
     </ol>

      <br />
          <p class="fw-bold">After getting a green card, can an investor withdraw from an investment that created 10 jobs?</p>


      <p>Once the permit green card (1-829) petition is adjudicated, investment capital may be returned.</p>
    

          <br />
      <p class="fw-bold">What is a Reg D Investor vs. a Reg S Investor?</p>

      <p>Any investor who conducts the entire investment transaction (from induction to execution of documents) outside of the U.S. at the time of the application may be considered Reg S Investor. Any investor inside the U.S for any part of the transaction must be a Reg D Investor pursuant to U.S. securities laws. A Reg D investor must be an accredited investor.</p>
    
      
          <br />
      <p class="fw-bold">When will I be able to move to the United States?</p>

      <p>An EB-5 investor is eligible to enter the United States to begin a period of conditional permanent residency once their I-526E is approved, a visa becomes available (if the investor is from a country affected by visa retrogression) and they go through a consular interview process or adjustment of status if already located in the U.S. on another type of non-immigrant visa.</p>
    
</div>`,
  },

  {
    id: 14,
    question: `What is the difference between "conditional" and "permanent" green cards?`,
    answer: `<div>
    <p>The USCIS issues conditional green cards after approval of the 1526E petition. These green cards
last for two years. Investors receive permanent green cards upon USCIS approval of the 1-829
petition.</p>
  
    <br />
    <p class="fw-bold">What are the advantages of an EB-5 visa for prospective students?</p>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item"> Brings certainty to the admissions process. You do not have to wait for a student visa and take the risk of consulate closure or visa denial.</li>
      <li class="list-group-item">Lower tuition (in-state/out-of-state tuition vs. international tuition rates).</li>
      <li class="list-group-item">Opportunities to win scholarships or grants.</li>
      <li class="list-group-item">Available federal loans.</li>
      <li class="list-group-item">Freedom to choose educational courses. Not every course may qualify under the student visa program.</li>
      <li class="list-group-item">Broad internship opportunities.</li>
      <li class="list-group-item">Work while studying.</li>
     </ol>

      <br />
          <p class="fw-bold">What is Visa Retrogression?</p>


      <p>Under existing EB-5 rules, approximately 10,000 visas are allocated to the program each year. If all the 10,000 visas are used, each country is capped at a maximum of 7% of the total. As a result, countries with a large number of applicants may see a longer wait time to begin their period of conditional permanent residency. (USCIS posts quarterly updates on this topic)</p>
    

          <br />
      <p class="fw-bold">When an unmarried child gets married, will he continue to hold the green card? Will a spouse of the child also be eligible for a green card?</p>

      <p>The unmarried child, if a part of the I-526 petition, will retain the green card. Souses of children (dependent applications) are not eligible to join the petition.</p>
    
      
          <br />
      <p class="fw-bold">After my I-526 petition approval, may members of my family have their consular interview in different countries?</p>

      <p>Family members may interview in different countries. The country of origin or where the family has current ties is the standard interview site. However, a student attending school in the U.S. would not have to return to the country of origin; status can be adjusted in the United States at the district office of the USCIS.</p>
    
           <br />
      <p class="fw-bold">Do I have to live in the same state where I make my investment?</p>

      <p>No, you do not have to live in the same state as your investment. You can live anywhere in the United States.</p>
    
</div>`,
  },
];

const stagePhotos = [
  {
    id: 1,
    src: "/images/services/step-1.jpg",
    alt: "STAGE 1",
  },
  {
    id: 2,
    src: "/images/services/step-2.jpg",
    alt: "STAGE 2",
  },
  {
    id: 3,
    src: "/images/services/step-3.jpg",
    alt: "STAGE 3",
  },
];

export default function EB5() {
  // State to hold client-side only styles (after component mounts)
  const [clientRendered, setClientRendered] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (activeAccordion.key === key) {
      setActiveAccordion({
        status: false,
        key: 1,
      });
    } else {
      setActiveAccordion({
        status: true,
        key,
      });
    }
  };
  // Run only on the client (after first render)
  useEffect(() => {
    setClientRendered(true);
  }, []);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle
          bg={"/images/banner/4.png"}
          pageName="DHANANI EB-5 Program"
        />
        <section className="about-section">
          <div className="icon-plane-2 bounce-y"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="content-column col-lg-6 order-2 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="inner-column">
                    <div className="sec-title">
                      <h2 className="words-slide-up text-split">
                        What is Immigrant Investor Program?
                      </h2>
                      <div className="text">
                        The Immigrant Investor Program (EB-5) is administered by
                        USCIS. Under this program, investors (and their spouses
                        and unmarried children under 21) are eligible to apply
                        for lawful permanent residence (become a Green Card
                        holder) if they make the necessary investment in a
                        commercial enterprise in the United States ($800,000 for
                        investments in Targeted Employment Areas (TEAs) or
                        $1,050,000 for investments outside of TEA) and plan to
                        create or preserve 10 direct or indirect permanent
                        full-time jobs for qualified U.S. workers.
                      </div>
                      <div className="d-flex align-items-center flex-column flex-md-row">
                        <a
                          className="btn btn-link"
                          target="_blank"
                          href="https://travel.state.gov/content/travel/en/us-visas/immigrate/immigrant-investor-visas.html"
                        >
                          Click for more on Investor Visa Programs
                        </a>

                        <a
                          className="btn btn-link"
                          target="_blank"
                          href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program"
                        >
                          Click for more on EB-5 Visa Program
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6 order-1 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="image-box">
                      <figure className="image overlay-anim">
                        <Image
                          src="/images/background/hov3.jpg"
                          alt="Image"
                          width={992}
                          height={992}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Benefits />

        {stagePhotos && stagePhotos.length > 0 && (
          <section className="process-section py-5 text-center " id="process">
            <div className="sec-title  auto-container mt-5">
              <h2 className="scrub-each-word text-white">
                Process To Obtain A Green Card (And Citizenship) Through The
                EB-5 Program{" "}
              </h2>
            </div>

            {stagePhotos.map((stage) => {
              return (
                <div key={stage.id} className="auto-container mt-5">
                  <div className="sec-title text-center text-white">
                    <span className="sub-title text-white">{`Stage ${stage.id}`}</span>
                  </div>
                  <Image
                    className="z-index-3 position-relative"
                    src={stage.src}
                    width={3300}
                    height={2550}
                  />
                </div>
                // <div key={stage.id} className="auto-container ">
                //   <div className="sec-title text-center text-white">
                //     <span className="sub-title text-white">{`Stage ${stage.id}`}</span>
                //     <h2 className="scrub-each-word text-split text-white">
                //       {stage.title}
                //     </h2>
                //     <p className="text text-white">{stage.description}</p>
                //   </div>

                //   <div className="outer-box">
                //     <div className="icon-line"></div>
                //     <div className="row">
                //       {stage.steps.map((step) => (
                //         <div
                //           key={step.id}
                //           className={`process-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp`}
                //           // Apply the animation delay only on the client after hydration
                //           style={
                //             clientRendered ? { animationDelay: step.delay } : {}
                //           }
                //         >
                //           <StepCard step={step}>
                //             <div
                //               class="step-card--slot"
                //               dangerouslySetInnerHTML={{ __html: step.html }}
                //             ></div>
                //           </StepCard>
                //           {/* <div className="inner-box me-4">
                //             <i className={`icon ${step.icon}`}></i>
                //             <div className="content p-3">
                //               <span className="step">{step.step}</span>
                //               <h5 className="title">{step.title}</h5>
                //               <div className="text-xs small">{step.text}</div>
                //             </div>
                //           </div> */}
                //         </div>
                //       ))}
                //     </div>
                //   </div>
                // </div>
              );
            })}
          </section>
        )}

        <section className="container py-5 text-center mt-5" id="comparison">
          <div className="row">
            <div className="col-12 mt-30">
              <div className="sec-title text-center">
                <h2 className=" text-split">
                  How Does EB-5 Compare To Other Visa Programs?
                </h2>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>diffrence </th>
                      <th>
                        H1B - Visa
                        <p>
                          a non-immigrant visa category that allows employers to
                          temporarily hire foreign workers in specialty
                          occupations.
                        </p>
                      </th>
                      <th>
                        EB-5 - Visa
                        <p>
                          program allows foreign investors and their families to
                          apply for permanent residency in the U.S.
                        </p>{" "}
                      </th>
                      <th>
                        EB2 - Visa
                        <p>
                          a non-immigrant visa that allows people from certain
                          countries to live and work in the U.S.
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(visaKeys).map(([key, val]) => {
                      return (
                        <tr key={key}>
                          <td>{val}</td>
                          {visas.map((visa) => {
                            return <td>{visa[key] || ""}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section-two py-4" id="q&a">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="faq-column col-12 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="inner-column">
                    <ul className="accordion-box style-two">
                      {FAQ.map((q) => {
                        return (
                          <li
                            key={q.id}
                            className={`accordion block ${
                              activeAccordion.key === q.id ? "active-tab" : ""
                            }`}
                          >
                            <div
                              className={`acc-btn ${
                                activeAccordion.key === q.id ? "active" : ""
                              }`}
                              onClick={() => handleClick(q.id)}
                            >
                              {q.question}
                              <i className="arrow fal fa-angle-down"></i>
                            </div>
                            <div
                              className={`acc-content ${
                                activeAccordion.key === q.id ? "current" : ""
                              }`}
                            >
                              <div className="content">
                                <div
                                  className="text"
                                  dangerouslySetInnerHTML={{ __html: q.answer }}
                                ></div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

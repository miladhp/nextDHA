import Image from "next/image";
const MarqueeSection = () => {
return (
<div className="marquee-section">
  <div className="marquee">
    <div className="marquee-group">
      <div className="text ms-2">Investment Opportunities</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Full Transparency </div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Solidifying your foundation</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Real Estate Investments</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Lucrative Opportunities</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Securing your future</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
    </div>
    <div aria-hidden="true" className="marquee-group">
      <div className="text ms-2">Investment Opportunities</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Full Transparency </div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Solidifying your foundation</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Real Estate Investments</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Lucrative Opportunities</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
      <div className="text ms-2">Securing your future</div>
      <Image src="/favicon-white.svg" width={30} height={50} />
    </div>
  </div>
</div>
);
};

export default MarqueeSection;

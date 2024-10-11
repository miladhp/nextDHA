import CounterUp from "@/components/elements/CounterUp";
import { FACTS } from "@/constants/global";

export default function PerformanceSection() {
  return (
    <>
      <section className="services-section py-5 text-center">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: "url(/images/background/bg-12.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <h2 className=" title mx-auto text-white "> Our Proven Success</h2>

        <div
          className="auto-container position-relative text-center"
          style={{
            background: "rgba(var(--theme-color2-rgb), .5)",
          }}
        >
          <div className="row py-4">
            {FACTS.map((fact) => {
              return (
                <div
                  key={fact.id}
                  className={`
                    ${
                      [1, 2, 3].includes(fact.id) && "mb-md-4"
                    } " col-12 col-md-4 "`}
                >
                  <div
                    className={`${
                      ![1, 4].includes(fact.id) &&
                      "border-md-start border-white"
                    } " d-flex flex-column align-items-center justify-content-center text-white p-4 "`}
                  >
                    <div className="text-white display-3">
                      {fact.before}{" "}
                      <CounterUp end={+fact.target} round={fact.id !== 5} />
                      {fact.after}
                    </div>
                    <h4 className="text-white light title">{fact.title}</h4>
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

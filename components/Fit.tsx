import { fitRows, fitStatusClass } from "@/data/fit";

export default function Fit() {
  return (
    <section className="sec" id="fit" aria-labelledby="fit-h">
      <div className="sec-h">
        <h2 id="fit-h">Against the listing</h2>
        <p>Here is where I stand on each line of your listing.</p>
      </div>
      <div className="fit" role="list">
        {fitRows.map((row) => (
          <div className="fit-row" role="listitem" key={row.requirement}>
            <p className="fit-req">{row.requirement}</p>
            <div className="fit-st">
              <span className={`pill ${fitStatusClass[row.status]}`}>{row.status}</span>
            </div>
            <p className="fit-ev">{row.evidence}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

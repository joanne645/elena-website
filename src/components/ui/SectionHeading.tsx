import { Fragment } from "react";

/** Kicker + H2 (with demo-style line breaks) + optional lead paragraph. */
export function SectionHeading({
  kicker,
  titleLines,
  lead,
  id,
}: {
  kicker: string;
  titleLines: string[];
  lead?: string;
  id?: string;
}) {
  return (
    <>
      <div className="kicker">{kicker}</div>
      <h2 id={id}>
        <MultiLine lines={titleLines} />
      </h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

export function MultiLine({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </>
  );
}

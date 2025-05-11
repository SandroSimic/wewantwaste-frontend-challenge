import skipImg from "../assets/skipImg.png";
import type { Skip } from "../interfaces/skip.interface";
import CardDetails from "./CardDetails";

function Card({
  skip,
  selected,
  onSelect,
}: {
  skip: Skip;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`card ${selected ? "selected-card" : ""}`}
      onClick={onSelect}
    >
      <div className="rounded-lg">
        <img
          className="rounded-lg"
          src={skipImg}
          alt={`${skip.size} Yard Skip`}
        />
      </div>
      <CardDetails skip={skip} />
      <button
        className={`btn mt-4 ${selected ? "selected" : ""}`}
        onClick={onSelect}
      >
        {selected ? "Selected" : "Select Skip"}
      </button>
    </div>
  );
}

export default Card;

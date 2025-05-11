import MainText from "../components/MainText";
import SkipGrid from "../components/SkipGrid";
import type { Skip } from "../interfaces/skip.interface";

function Main({
  onSelectSkip,
  selectedSkip,
}: {
  onSelectSkip: (skip: Skip) => void;
  selectedSkip: Skip | null;
}) {
  return (
    <div className="flex flex-col items-center gap-10">
      <MainText />
      <SkipGrid selectedSkip={selectedSkip} onSelectSkip={onSelectSkip} />
    </div>
  );
}

export default Main;

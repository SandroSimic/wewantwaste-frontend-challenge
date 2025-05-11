import { useEffect, useState } from "react";
import Card from "./Card";
import type { Skip } from "../interfaces/skip.interface";

function SkipGrid({
  selectedSkip,
  onSelectSkip,
}: {
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}) {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        const data = await res.json();
        setTimeout(() => {
          setSkips(data);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error("Failed to fetch skips:", err);
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white pb-48 md:pb-30">
      {skips.map((skip) => (
        <Card
          key={skip.id}
          skip={skip}
          selected={selectedSkip?.id === skip.id}
          onSelect={() => onSelectSkip(skip)}
        />
      ))}
    </div>
  );
}

export default SkipGrid;

import { useState } from "react";
import Footer from "./sections/Footer";
import Heading from "./sections/Heading";
import Main from "./sections/Main";
import type { Skip } from "./interfaces/skip.interface";

function App() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <div className="flex flex-col gap-10">
      <Heading />
      <Main onSelectSkip={setSelectedSkip} selectedSkip={selectedSkip} />
      <Footer selectedSkip={selectedSkip} />
    </div>
  );
}

export default App;

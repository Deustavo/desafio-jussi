import { useEffect, useState } from "react";
import Box from "./box";
import { boxesData } from "../../../services/mock/homePage/box";

export default function OurSolutions() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes(boxesData);
  }, []);

  return<>
    <section id="our-solutions" className="padding-page">
      <h2 className="large">
        <span className="green-jussi">&#47;&#47;</span>
        Nossas soluções
      </h2>

      <div className="container-boxes">
        {
          boxes.map((box, index) =>
            <Box key={index} data={box} />
          )
        }
      </div>
    </section>
  </>;
}
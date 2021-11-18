import { useEffect, useState } from "react";
import Box from "./box";
import { boxesData } from "../../../mock/homePage/mock";

export default function OurSolutions() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    console.log(boxesData);
    setBoxes(boxesData);
  }, []);
  

  return<>
    <section id="our-solutions" className="padding-page">
      <h2 className="large">
        <span className="green-jussi">//</span>
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
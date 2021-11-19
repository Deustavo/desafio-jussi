import Image from "next/image";
import Button from "../../../shared/button";

/**
 * @param {Number} data.id
 * @param {String} data.imageSource
 * @param {String} data.title
 * @param {String} data.description
 * @param {Array} data.features
 * @param {String} data.buttonText
 * @returns 
 */
export default function Box({ data }) {
  return<>
    <div className="container-box">
      <div className="circle-avatar">P{data.id}</div>
      <span className="paragraph">{data.title}</span>
      <span className="small pink-jussi">{data.description}</span>
      <ul>
        {
          data.features.map(feature =>
            <li className="small dark-gray" key={feature.id}>{feature.name}</li>
          )
        }
      </ul>
      <Button className="primary" text={data.buttonText}/>
    </div> 
  </>;
}
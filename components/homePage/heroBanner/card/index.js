import Button from "../../../shared/button";
import Image from "next/image";

/**
 * @param {string} className
 * @param {string} imageSource
 * @param {string} text 
 * @returns 
 */
export default function Card({ data }) {

  /**
   * Verifica de existe o valor data.imageSource
   * @returns {Boolean} 
   */
  const haveImageSource = () => {
    return data && data.imageSource ? true : false
  };

  return<>
    <div className={`card-container drop-shadow image ${data?.className}`}>
      {haveImageSource()  && <Image src={data?.imageSource} alt={data?.text} width={180} height={190} />}
      <Button className="secondary" text={data?.text} />
    </div>
  </>;
}
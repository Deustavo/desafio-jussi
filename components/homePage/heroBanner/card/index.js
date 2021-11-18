import Button from "../../../shared/button";
import Image from "next/image";

/**
 * @param {string} className
 * @param {string} imageSource
 * @param {string} text 
 * @returns 
 */
export default function Card({
  className,
  imageSource,
  text
}) {
  return<>
    <div className={`card-container drop-shadow image ${className}`}>
      <Image src={imageSource} alt={text} width={180} height={190} />
      <Button className="secondary" text={text} />
    </div>
  </>;
}
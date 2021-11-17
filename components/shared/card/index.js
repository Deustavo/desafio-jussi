import Button from "../button";

export default function Card(props) {
  let className = props?.className || "";
  let text = props?.text || "Botão card";

  return<>
    <div className={`card-container drop-shadow image ${className}`}>
      <img />
      <Button className="secondary" text={text} />
    </div>
  </>;
}
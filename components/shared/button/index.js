import { useEffect } from "react";

export default function Button(props) {
  let className = props?.className || "default";
  let text = props?.text || "Botão";

  return <>
    <button className={`button paragraph ${className}`}>
      {text}
    </button>
  </>;
}
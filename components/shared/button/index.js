import { useEffect } from "react";

/**
 * @param {string} className 
 * @param {string} text
 */
export default function Button({
  className = "default",
  text = "Botão"
}) {
  return <>
    <button className={`button paragraph ${className}`}>
      {text}
    </button>
  </>;
}
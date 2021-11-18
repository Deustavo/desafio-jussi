/**
 * @param {String} className 
 * @param {String} text
 * @param {Function} action
 */
export default function Button({
  className = "default",
  text = "Botão",
  action = () => {},
}) {
  return <>
    <button
      className={`button paragraph ${className}`}
      onClick={() => action()}
    >
      {text}
    </button>
  </>;
}
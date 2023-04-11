export default function Criptos({ name, priceUsd }) {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return (
    <div className="w-full flex justify-between items-center px-10 py-6 hover:bg-white rounded-xl">
      <div className="left flex gap-1 items-center">
        <span
          className="point img w-0.5 h-0.5  py-1 px-1 rounded-full block"
          style={{ background: `rgb(${x},${z},${y})` }}
        ></span>
        <h1 className="font-semibold">{name}</h1>
      </div>
      <p>${parseFloat(priceUsd)}</p>
    </div>
  );
}

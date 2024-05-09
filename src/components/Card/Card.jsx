import { useState } from "react";
import image1 from "../../images/andrew-heald-n9RZ0dCunpY-unsplash.jpg";

export default function Card({ productInfo }) {
  const { id, title, price, image, description, category } = productInfo;

  let [counter, setCounter] = useState(0);

  function addOneToCounter() {
    setCounter(counter + 1);
  }

  function deleteOneFromCounter() {
    setCounter(counter - 1);
  }

  return (
    <>
      <div className="bg-white shadow-xl w-1/4 rounded overflow-hidden">
        <img className="w-full h-60 object-contain" src={image} alt="image" />
        <div className="card-info p-5">
          <h2 className="text-lg font-bold">{title}</h2>
          <h3 className="text-sm font-semibold text-gray-600">{category}</h3>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem impedit
          </p>

          <div className="flex justify-around items-center py-3">
            <i className="fa-solid fa-plus" onClick={addOneToCounter}></i>

            <h2>{counter}</h2>

            <i className="fa-solid fa-minus" onClick={deleteOneFromCounter}></i>
          </div>

          <button className="bg-red-600 text-white px-4 py-1 rounded text-base uppercase mt-4 w-full">
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
}

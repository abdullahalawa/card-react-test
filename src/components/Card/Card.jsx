export default function Card() {
  return (
    <>
      <div className="bg-white shadow-xl w-1/4 rounded overflow-hidden">
        <img
          className="w-full"
          src="https://plus.unsplash.com/premium_photo-1714145990678-22654d741063?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
        <div className="card-info p-5">
          <h2 className="text-lg font-bold">Card Title</h2>
          <h3 className="text-sm font-semibold text-gray-600">Category</h3>
          <p className="mt-6">Description</p>

          <button className="bg-red-600 text-white px-4 py-1 rounded text-base uppercase mt-4 w-full">
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
}

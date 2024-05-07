import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto flex gap-3 py-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;

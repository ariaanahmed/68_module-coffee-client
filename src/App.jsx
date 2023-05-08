import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

const App = () => {

  const coffees = useLoaderData()

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize text-center py-5 mb-5 bg-gray-100"> Hot and cold coffee: {coffees.length} </h1>

      <div className="grid md:grid-cols-2 gap-5 container mx-auto">
        {
          coffees.map((coffee) => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          >
          </CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;
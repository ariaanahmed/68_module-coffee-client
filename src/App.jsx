import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

const App = () => {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize text-center py-5 mb-5 bg-gray-100"> Hot and cold coffee: {coffees.length} </h1>

      <div className="grid md:grid-cols-2 gap-5 container mx-auto">
        {
          coffees.map((coffee) => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          >
          </CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;
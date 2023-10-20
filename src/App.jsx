import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()
  return (
    <>
      <h2 className='text-6xl text-purple-600 mb-4'>Espresso Emporium Coffee: {coffees.length}</h2>
      <Link className='text-purple-600' to={'addCoffee/'}>+ Add New Coffee</Link>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 p-6'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App

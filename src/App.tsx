import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented } from './features/counter/counterSlice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice'

function App() {
  // grab the current counter value to display
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching, isLoading } = useFetchBreedsQuery(numDogs);

  const handleClick = () => {
    // dispatch whatever is returned by the incremented action creator
    // increment by 1
    dispatch(incremented())

    // increment by fixed amount
    // dispatch(amountAdded(5));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>

      <div>
        <p>Dogs to fetch:</p>
        <select name="" id="" value={numDogs} onChange={(e) => {setNumDogs(Number(e.target.value))}}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>

      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            { data.map(breed => (
              <tr key={breed.id}>
                <td>
                  <img src={breed.image.url} height={250} alt={breed.name} />
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

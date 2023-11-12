import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import TechLogo from '../TechLogo'

function SamplePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TechLogo link="https://vitejs.dev" path={viteLogo} altName="Vite logo" />
        <TechLogo link="https://react.dev" path={reactLogo} altName="React logo" />
      </div>
      <h1>Это я сделал</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default SamplePage;
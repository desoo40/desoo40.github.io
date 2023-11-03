import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a onClick={() => setCount((count) => count + 1)}>
          <img src="https://stats.mihf.ru/contents/players/1119-p-5824ae0df1530.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>БЕЛЬСКИЙ ПЕТУХ!</h1>
      <div className="card">
        <button>
          На петуха нажали {count} раз(а)
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

export default App

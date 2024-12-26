import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatabaseViewer from './DatabaseViewer'
import Navigation from './Navigation'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='h-screen w-screen'>
        <Navigation />
        <main className="p-8">
            <h1 className="text-4xl font-bold">Welcome to My App</h1>
            <p className="mt-4 text-lg">
                Swipe right to open the navigation, or click the button in the top-left corner.
            </p>
        </main>
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p className='text-green-500'>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
        <DatabaseViewer/>
    </div>
  )
}

export default App

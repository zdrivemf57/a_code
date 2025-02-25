import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchDataComponent from './components/FetchDataComponent'
import CounterComponent from './components/CounterComponent'
import WindowResizeComponent from './components/WindowResizeComponent'
import TimerComponent from './components/TimerComponent'
import GrammarComponent from './components/GrammarComponent'
import UserList from './components/UserList'
import SumAndAverage from './components/SumAndAverage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <GrammarComponent /> */}
      <FetchDataComponent />
      <CounterComponent />
      <WindowResizeComponent />
      <TimerComponent />
      {/* <SumAndAverage /> */}
      <UserList />
    </>
  )
}

export default App

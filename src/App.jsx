
import './App.css'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
// import { HookApp } from './HookApp'

function App() {

  return (
    <div className='text-3xl '>
       <CounterApp />
       <CounterWithCustomHook />
       <footer className='text-sm text-gray-500 mt-8 '>©diegogalvizv2024</footer>
    </div>
  )
}

export default App

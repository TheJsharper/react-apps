import { Link, Route, Routes } from "react-router"
import { TrafficLight } from "./useState/TrafficLight"
import { TrafficLightWithUseEffect } from "./useEffect/TrafficLightUseEffect"
import { TrafficLightWithUseEffectCustomHooked } from "./useEffectWithHook/TrafficLightWithUseEffectCustomHooked"
import { PokemonPage } from "./pokemon/PokemonPage"
import { FocusScreen } from "./useRef/FocusScreen"
import { TasksAppWithUseState } from "./useRedurcer/TaskAppWithUseState"
import { TasksAppWithUseReducer } from "./useRedurcer/TaskAppWithUseReducer"
import { ScrambleWords } from "./scrambleWords/ScrambleWords"
import { ScrambleWordsWithReducer } from "./scrambleWordWithReducer/ScrambleWordWithReducer"
import { MemoHook } from "./memo/MemoHook"

const Navbar = () => {
  return (
    <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">

          <div className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">
            <Link to="/">UseState</Link>
          </div>

          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/use-effect">UseEffect</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/custom-hook">UseEffect CustomHook</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/custom-hook-connection">Pokemon</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/use-ref">Auto focus</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/task-app-use-state">Task app with useState</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/task-app-use-reducer">Task app with useReducer</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/scrambleWords">Scramble Words</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/scrambleWords-with-reducer">Scramble Words With Reducer</Link>
          </div>
          <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>
            <Link to="/memo">Memo Hook</Link>
          </div>
        </div>
      </div>
    </nav>
  );

}



export const HooksApp = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<TrafficLight />} />
        <Route path="/use-effect" element={<TrafficLightWithUseEffect />} />
        <Route path="/custom-hook" element={<TrafficLightWithUseEffectCustomHooked />} />
        <Route path="/custom-hook-connection" element={<PokemonPage />} />
        <Route path="/use-ref" element={<FocusScreen />} />
        <Route path="/task-app-use-state" element={<TasksAppWithUseState />} />
        <Route path="/task-app-use-reducer" element={<TasksAppWithUseReducer />} />
        <Route path="/scrambleWords" element={< ScrambleWords />} />
        <Route path="/scrambleWords-with-reducer" element={< ScrambleWordsWithReducer />} />
        <Route path="/memo" element={< MemoHook />} />
      </Routes>
    </div>
  )
}

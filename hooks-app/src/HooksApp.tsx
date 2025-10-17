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

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='stocks'>
        <Link to="/">UseState</Link>
      </div>
      <div className='favourites'>
        <Link to="/use-effect">UseEffect</Link>
      </div>
      <div className='cart'>
        <Link to="/custom-hook">UseEffect CustomHook</Link>
      </div>
      <div className='cart'>
        <Link to="/custom-hook-connection">Pokemon</Link>
      </div>
      <div className='cart'>
        <Link to="/use-ref">Auto focus</Link>
      </div>
      <div className='cart'>
        <Link to="/task-app-use-state">Task app with useState</Link>
      </div>
      <div className='cart'>
        <Link to="/task-app-use-reducer">Task app with useReducer</Link>
      </div>
      <div className='cart'>
        <Link to="/scrambleWords">Scramble Words</Link>
      </div>
      <div className='cart'>
        <Link to="/scrambleWords-with-reducer">Scramble Words With Reducer</Link>
      </div>
    </div>
  )

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
        <Route path="/scrambleWords" element={< ScrambleWords/>} />
        <Route path="/scrambleWords-with-reducer" element={< ScrambleWordsWithReducer/>} />
      </Routes>
    </div>
  )
}

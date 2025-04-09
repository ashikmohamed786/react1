import { useState } from 'react'
import './App.css'
import Home from './Home'
import ProfileCard from './ProfileCard'
import GridView from './GridView'
import Todo from './Todo'
import Navbar from "./Navbarcomponent"
import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Routes } from "react-router-dom";
const profilelist={
  name:"Asik",
  department:"AI&DS",
  year:"2nd",
  mobile:"8682012275",
  address:"5/137,Kayithe Millath Street,Sayalgudi",
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profilecard" element={<ProfileCard profilelist= {profilelist} />} />
        <Route path="/gridview" element={<GridView />} />
        <Route
        path="/reduxcounter"
        element={
          <Provider store={store}>
            <Todo/>
          </Provider>
        }
        />
        </Routes>
        </BrowserRouter>
        {/* <ProfileCard profile= {Profilelist}/>
        <GridView/>
        <Todo/>
         */}
      </div>
    </>
  )
}

export default App
import './App.css'
import MainPage from './components/mainPageComp.jsx'
import Layout from './components/Layout.jsx'
import Examples from "./components/examples.jsx"
import Help from "./components/Help.jsx"
import ProjectProfile from './components/projectProfile.jsx'
import ScrollToTop from './utils/scrollToTop.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (<>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<MainPage/>}/>
            <Route path="/examples" element={<Examples/>}/>
            <Route path="/examples/:id" element={<ProjectProfile/>}/>
            <Route path="/help" element={<Help/>}>
              <Route index element={<Navigate to={"lobe"} replace/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

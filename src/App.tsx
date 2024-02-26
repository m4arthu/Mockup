import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainPage from "./pages/mainPage/mainPage"
export default function App() {


  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
      </Routes>
     </BrowserRouter>
  )
}


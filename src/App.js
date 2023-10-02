import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LandingPage from './Routes/landingPage/LandingPage';

export default function App (){

  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  )

}
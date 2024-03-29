<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import * as helper from './helpers/helpers';
import React from 'react';
import Key from "./key/key.json";
import "./css/index.css";
import "./css/override.css";
import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import Theme from "./pages/Theme/Theme";
import DraftSeason from "./pages/DraftSeason/DraftSeason";
import HallOfFame from './pages/HallOfFame/HallOfFame';
import NflTeams from './pages/NflTeams/NflTeams';
import Map from './pages/Map/Map';
import NflTeamsSingle from './pages/NflTeamsSingle/NflTeamsSingle';
import NotFound from "./pages/NotFound/NotFound";
import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom";
import Stats from './pages/Stats/Stats';



helper.themeInit();


const root = ReactDOM.createRoot(document.getElementById('root'));
var theme = localStorage.getItem("theme");
if(theme !== "undecided"){

  root.render(
    <React.StrictMode>
    <BrowserRouter>
  <Routes>
  <Route path="/royal-wildcat" element={<Home/>} />
  <Route path="/royal-wildcat/draft" element={<Draft />}/>
  <Route path="/royal-wildcat/hall-of-fame" element={<HallOfFame />}/> 
  <Route path="/royal-wildcat/Stats" element={<Stats />} /> 
  <Route path="/royal-wildcat/nflTeams" element={<NflTeams />}/> 
  <Route path="/royal-wildcat/map" element={<Map />}/> 
  {Key.draft.map((r) => {return <Route path={"/royal-wildcat/draft" + "/" + r.year }  element={<DraftSeason  />}/>})}
  {Key.nflTeams.map((r) => {return <Route path={"/royal-wildcat/nflTeams" + "/" + r.teamUrl }  element={<NflTeamsSingle />}/>})}
  <Route path="/royal-wildcat/*" element={<NotFound />}/> 

  
  </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}
else{root.render(<Theme />);}
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


>>>>>>> 62a80c9bd3bf8387df76f44feabcfca402aabcb3

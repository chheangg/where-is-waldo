import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/styles/main.scss';
import Layout from "./components/layout";
import Main from "./components/main";
import Level from "./components/utils/level";
import firebaseConfig from "./firebaseconfig";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import config
 from "./config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log(db)

const App = () => {
  const [ name, setName ] = useState(null);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout config={config} auth={auth} getName={setName}/>}>
        <Route index element={<Main db={db}/>} />
        {config.map((level) => { 
        return <Route path={level.location} key={level.name} element={
          <Level 
            name={name}
            image={level.image} 
            characters={level.characters} 
            location={level.location} 
            db={db} />
        } /> 
        })}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
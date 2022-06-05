import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/styles/main.scss';
import Layout from "./components/layout";
import Main from "./components/main";
import Level from "./components/utils/level";
import config
 from "./config";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout config={config}/>}>
        <Route index element={<Main />} />
        <Route path='level-one' element={<Level image={config[0].image} />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
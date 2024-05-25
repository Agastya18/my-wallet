
import './App.css'
import Transfer from './pages/Transfer';
import P2pSend from './pages/P2pSend';
import Transactions from './pages/Transactions';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
function App() {
 

  return (
   <>
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/transactions" element={<Transactions />} />

      <Route path="/p2p" element={<P2pSend />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn/>} />
     
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App

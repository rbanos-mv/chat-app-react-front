import { BrowserRouter, Route, Routes } from 'react-router-dom';
import socketIO from 'socket.io-client';
import './App.css';
import ChatPage from './components/ChatPage';
import Home from './components/Home';

const socket = socketIO.connect('https://chat-app-node-back.onrender.com');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

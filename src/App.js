
import Sidebar from "./components/sidebar.js";
import Chat from "./components/chat.js";

import './App.css';

function App() {
  return (

    <div className="app">
      <div className="app__content">

        <Sidebar />
        <Chat />

      </div>
    </div>

  );
}

export default App;

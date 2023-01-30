import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";


function App() {
    return (
        <div className="main-wrapper">
            <Header/>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default App;

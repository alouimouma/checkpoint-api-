import "./App.css";
import UserList from "./components/UserList/UserList";

function App() {
    return (
        <div className="App">
            <div
                style={{
                    fontSize: "30px",
                    color: "whitesmoke",
                    
                }}
            >
                <h1 className="bobb">list de users</h1>
            </div>
            <div style={{ textAlign: "center", margin: "auto 30% auto 30%" }}>
                <UserList />
            </div>
        </div>
    );
}

export default App;

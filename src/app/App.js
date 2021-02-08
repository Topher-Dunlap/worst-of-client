import React, {useState} from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import NavBar from '../components/NavBar';
import SwitchNavRoutes from '../components/SwitchNavRoutes';
import ThemeContext from "../components/ThemeContext";
import AuthContext from "../components/AuthContext";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const contextAuth = { loggedIn, setLoggedIn }

    return (
        <ThemeContext.Provider value={contextValue}>
            <AuthContext.Provider value={contextAuth}>
                <main>
                    <NavBar/>
                    <div>
                        <ErrorBoundary>
                            <SwitchNavRoutes/>
                        </ErrorBoundary>
                    </div>
                </main>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    );
}

const contextValue = {
    theme: {
        // fontFamily: "Open Sans, sans-serif",
        fontSize: "20px",
        color: "#444",
        // textAlign: "center",
        lineHeight: "1.5",
        margin: "0",
    },
    sectionTopBottomMargin: {
        margin: "8rem 0"
    },
    centerText: {
        textAlign: "center",
    },
    headerStyle: {
        textAlign: "center",
        backgroundColor: "#0B132B",
        color: "white",
        margin: "0 0 6rem",
    },
    fontColor: {
        color: "#0B132B",
    },
    formInputStyle: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    },
    formElementSpacing: {
        margin: "0px 10px",
        textAlign: "left",
    },
    formStyle: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        margin: "2rem 2rem",
        padding: "1rem 2rem 2rem",
    },
    formButtonStyle: {
        width: "100%",
        backgroundColor: "#3A506B",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
}

export default App;

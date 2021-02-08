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
        textAlign: "center",
        lineHeight: "1.5",
        margin: "0",
    },
    formElementSpacing: {
        margin: "0px 10px",
    },
    sectionTopBottomMargin: {
        margin: "8rem 0"
    },
    headerStyle: {
        backgroundColor: "#0B132B",
        color: "white",
        margin: "0 0 6rem",
    },
    fontColor: {
        color: "#0B132B",
    }
}

export default App;

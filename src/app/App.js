import React, {useState} from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import NavList from '../components/NavList';
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
                    <NavList/>
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
        fontFamily: "Open Sans, sans-serif",
        fontSize: "20px",
        color: "#444",
        textAlign: "center",
        lineHeight: "1.5",
    },
    formElementSpacing: {
        margin: "0px 10px",
    },
    sectionTopBottomMargin: {
        margin: "8rem 2rem"
    },
    backgroundColors: [
        {backgroundColor: "#AAAAAA"},
        {backgroundColor: "#BBBBBB"},
        {backgroundColor: "#EEEEEE"},
    ],
}

export default App;

import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import NavList from '../components/NavList';
import SwitchNavRoutes from '../components/SwitchNavRoutes';
import ThemeContext from "../components/ThemeContext";

function App() {

    const contextValue = {
        theme: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: "20px",
            color: "#444",
            textAlign: "center",
            lineHeight: "1.5",
        }
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            <main style={borderStyle}>
                <NavList/>
                <div>
                    <ErrorBoundary>
                        <SwitchNavRoutes/>
                    </ErrorBoundary>
                </div>
            </main>
        </ThemeContext.Provider>
    );
}

export default App;

const borderStyle = {
//css styling
}
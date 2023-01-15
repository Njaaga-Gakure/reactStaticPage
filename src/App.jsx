import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css"

export function App(){
        return (
            <div className="container">
                <Header />
                <MainContent />
            </div>
        )
}
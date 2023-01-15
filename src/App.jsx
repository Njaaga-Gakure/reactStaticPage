import React from "react";

function Header(){
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="react logo"/>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </header>
    )

}
function MainContent(){
    return (
        <>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>
    )
}
function Footer(){
    return (
        <footer>
            <small>© 2023 Gakure development. All rights reserved.</small>
        </footer>
    )

}

export function Page(){
        return (
            <>
                <Header />
                <MainContent />
                <Footer />
            </>
        )
}
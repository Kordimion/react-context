import React from 'react';
import { AuthContext }  from '../contexts/AuthContext';

function Greeting() {
    return (
        <AuthContext.Consumer>{(context) => { 
            let message = "You are " + 
                (context.isAuthenticated ? "" : "not") +
                " authentificated";

            return (
            <div style={{textAlign: "center"}}>
                <h1>Greetings!</h1>
                <h2>{message}</h2>
            </div>
            )
        }}
        </AuthContext.Consumer>
    )
    
}

export default Greeting;
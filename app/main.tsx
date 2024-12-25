import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const passwordPrompt = (): void => {
    const validPassword = "test";

    let userPassword = "";

    while (userPassword !== validPassword) {
        userPassword = prompt("Enter the password: ") || "";
        
        if(userPassword === "") {
            alert("Access denied.");
        } else if (userPassword !== validPassword) {
            alert("Incorrect password.")
        }
    }

    alert("Access granted.");
}

passwordPrompt();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

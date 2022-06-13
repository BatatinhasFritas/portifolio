import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light-theme");

    function switchTheme() {
        if (theme == "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme");
        }
    }

    return (
        <themeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </themeContext.Provider>
    )
} 

export function useTheme() {
    return useContext(themeContext);
}
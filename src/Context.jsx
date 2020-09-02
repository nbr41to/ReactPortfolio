// Webサイトの文章はなるべくここに
import React, { useState } from "react"

export const Context = React.createContext()

const ContextProvider = ({ children }) => {
    const [subtitle, setSubtitle] = useState([])
    return (
        <Context.Provider value={[subtitle, setSubtitle]}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
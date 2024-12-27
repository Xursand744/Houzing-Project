import { useReducer, createContext } from "react";

const PropertiesContext = createContext()

const PropertiesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(() => { }, {})
    return <PropertiesContext.Provider value={[state, dispatch]}>{children}</PropertiesContext.Provider>
}

export default PropertiesProvider
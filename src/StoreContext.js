import react from "react"

const StoreContext = react.createContext(null);

export const StoreProvider = () => {
    return (
        <StoreContext.Provider>

        </StoreContext.Provider>
    )
}

export default StoreContext;
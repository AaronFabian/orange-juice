import { createContext, useContext, useReducer } from "react";

const initialState = {
    activeStreamingSrc: null,
    episodes: null,
    quality: null,
    animeId: null,
    isLoading: false,
};

const reducer = function (state, action) {
    switch (action.type) {
        case "startWatching":
            return { ...state };

        default:
            throw new Error("Unexpected type !");
    }
};

const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
    const [
        { activeStreamingSrc, episodes, quality, animeId, isLoading },
        dispatch,
    ] = useReducer(reducer, initialState);

    return (
        <FavoriteContext.Provider
            value={{
                animeId,
                activeStreamingSrc,
                episodes,
                quality,
                isLoading,

                // fn
                reducer,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}

function useFavorite() {
    const context = useContext(FavoriteContext);
    if (context === undefined)
        throw new Error("useFavorite used outside of FavoriteProvider !");

    return context;
}

export { useFavorite, FavoriteProvider };

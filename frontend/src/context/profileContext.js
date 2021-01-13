import { createContext, useReducer } from "react";
import { ProfileReducer } from "../reducer/profileReducer";
import { SAVE_PROFILES, SEIVE_PROFILES, SEARCH_PROFILES, SEARCH_FULLNAME } from "../actions/profileActions";

const ProfileContext = createContext();

const ProfileProvider = (props) => 
{
    const [profileState, dispatch] = useReducer(ProfileReducer, {all: null, match:null, search: null});

    const profileActions = 
    {
        store: (payload) => 
        {
            dispatch({type: SAVE_PROFILES, payload });
        },
        search: (key, payload) => 
        {
            dispatch({type: SEARCH_PROFILES, payload, key})
        },
        seive: (key, payload) => 
        {
            dispatch({type: SEIVE_PROFILES, payload, key})
        },
        searchFullName: (payload) => 
        {
            dispatch({type: SEARCH_FULLNAME, payload})
        }
    }

    return (
        <ProfileContext.Provider value={{ profileState, profileActions }} >
            { props.children }
        </ProfileContext.Provider>
    )
}

export { ProfileProvider, ProfileContext };

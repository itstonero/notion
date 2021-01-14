import { createContext, useReducer } from "react";
import { ProfileReducer } from "../reducer/profileReducer";
import { SAVE_PROFILES, SEIVE_PROFILES, SEARCH_PROFILES, SEARCH_FULLNAME, PREVIOUS_PROFILES, NEXT_PROFILES } from "../actions/profileActions";

const ProfileContext = createContext();

const ProfileProvider = (props) => 
{
    const [profileState, dispatch] = useReducer(ProfileReducer, {all: null, match:null, search: null, index:0, size:0});

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
        },
        nextResult: () => 
        {
            dispatch({type: NEXT_PROFILES});
        },
        previousResult: () => 
        {
            dispatch({type: PREVIOUS_PROFILES});
        }
    }

    return (
        <ProfileContext.Provider value={{ profileState, profileActions }} >
            { props.children }
        </ProfileContext.Provider>
    )
}

export { ProfileProvider, ProfileContext };

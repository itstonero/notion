import { SEARCH_PROFILES, SAVE_PROFILES, SEIVE_PROFILES, SEARCH_FULLNAME } from "../actions/profileActions"

export const ProfileReducer = (profiles, action) => 
{
    
    switch(action.type)
    {
        case SEARCH_PROFILES:
            {
                let match = profiles.all.filter(x => x[action.key].toLowerCase().includes(action.payload.toLowerCase()));
                return { ...profiles, search: match, match }
            }
        case SEIVE_PROFILES:
            return {
                ...profiles,
                match: profiles.search.filter(x => x[action.key].toLowerCase().includes(action.payload.toLowerCase()))
            }
        case SAVE_PROFILES:
            return {...profiles, all: action.payload, search: action.payload, match: action.payload }
        case SEARCH_FULLNAME:
            {
                let match = profiles.all.filter(x => (x["FirstName"] + " " + x["LastName"]).toLowerCase().includes(action.payload.toLowerCase()));
                return { ...profiles, search: match, match }
            }
        default:
            return profiles;
    }
}




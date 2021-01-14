import { SEARCH_PROFILES, SAVE_PROFILES, SEIVE_PROFILES, SEARCH_FULLNAME, NEXT_PROFILES, PREVIOUS_PROFILES } from "../actions/profileActions"

export const ProfileReducer = (profiles, action) => 
{
    
    switch(action.type)
    {
        case SEARCH_PROFILES:
            {
                let match = profiles.all.filter(x => x[action.key].toLowerCase().includes(action.payload.toLowerCase()));
                let size = Math.trunc(match.length / 20);
                if(match.length % 20 !== 0) ++size;
                let index = (size === 0) ? 0 : 1;
                return { ...profiles, search: match, match, size, index }
            }
        case SEIVE_PROFILES:
            {
                let match = profiles.search.filter(x => x[action.key].toLowerCase().includes(action.payload.toLowerCase()));
                let size = Math.trunc(match.length / 20);
                if(match.length % 20 !== 0) ++size;
                let index = (size === 0) ? 0 : 1;
                return { ...profiles, match, size, index }
            }

        case SAVE_PROFILES:
            {
                let size = Math.trunc(action.payload.length / 20);
                if(action.payload.length % 20 !== 0) ++size;
                let index = (size === 0) ? 0 : 1;
                return {...profiles, all: action.payload, search: action.payload, match: action.payload, index, size }
            }
        case SEARCH_FULLNAME:
            {
                let match = profiles.all.filter(x => (x["FirstName"] + " " + x["LastName"]).toLowerCase().includes(action.payload.toLowerCase()));
                let size = Math.trunc(match.length / 20);
                if(match.length % 20 !== 0) ++size;
                let index = (size === 0) ? 0 : 1;
                return { ...profiles, search: match, match, size, index }
            }
        case NEXT_PROFILES:
            return {...profiles, index: profiles.index + 1};
        case PREVIOUS_PROFILES:
            return {...profiles, index: profiles.index - 1};
        default:
            return profiles;
    }
}




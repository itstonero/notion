import { TextField } from '@material-ui/core'
import { useContext } from 'react';
import { ProfileContext } from '../context/profileContext';

export default function SearchBar()
{
    const { profileActions } = useContext(ProfileContext);

    const processSearch = (event) => profileActions.searchFullName(event.target.value);
    
    return <div style={{width: "95%", margin: "10px"}}>
                <TextField
                    label="Search Patient"
                    style={{ margin: 8 }}
                    placeholder="Enter Patient Name"
                    fullWidth
                    margin="normal"
                    variant = "outlined"
                    onKeyUp = {processSearch}
                />
            </div>
}
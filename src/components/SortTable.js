import { TextField } from '@material-ui/core'
import { useContext, useState } from 'react';
import { ProfileContext } from '../context/profileContext';

export default function SortingBar()
{
    const { profileActions, profileState } = useContext(ProfileContext);
    const [ state, setState ] = useState({search: "", seive: ""});

    const seiveFurther = (event) => 
    {
        setState({...state, seive: event.target.value });
        profileActions.seive(event.target.name, event.target.value);
    }

    const processSearch = (event) => 
    {
        setState({ seive: "", search: event.target.value });
        profileActions.searchFullName(event.target.value);
    }

    if(profileState.all)
    {
        return <div style={{ width: "95%", margin: "10px", display: "flex", justifyContent: "flex-end" }}>
            <TextField
                label="Name"
                placeholder="Enter Name"
                name = "FirstName"
                margin="dense"
                variant="filled"
                value = { state.search }
                onChange = {processSearch}
            />
            <TextField
                label="Credit Card Number"
                placeholder="Enter Credit Card Number"
                name = "CreditCardNumber"
                margin="dense"
                variant="filled"
                value = {state.seive}
                onChange = {seiveFurther}
            />
        </div>
    }

    return <></>
}
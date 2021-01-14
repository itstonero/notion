import { TextField } from '@material-ui/core'
import { useContext, useState } from 'react';
import { ProfileContext } from '../context/profileContext';

export default function SortingBar()
{
    const { profileActions } = useContext(ProfileContext);
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

    return <div style={{ width: "95%", margin: "10px", display: "flex", justifyContent: "flex-end" }}>
        <TextField
            placeholder="Filter By Name"
            name = "FirstName"
            margin="dense"
            variant="filled"
            value = { state.search }
            onChange = { processSearch }
        />
        <TextField
            placeholder="Filter By Card Number"
            name = "CreditCardNumber"
            margin="dense"
            variant="filled"
            value = {state.seive}
            onChange = {seiveFurther}
        />
    </div>

}
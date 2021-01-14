import { useContext } from 'react';
import { ProfileContext } from '../context/profileContext';
import { Input, InputGroup, InputLeftElement, HStack } from "@chakra-ui/react"
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function SearchBar()
{
    const { profileActions } = useContext(ProfileContext);
    
    const processSearch = (event) => profileActions.searchFullName(event.target.value);
    
    const seiveFurther = (event) => 
    {
        profileActions.seive(event.target.name, event.target.value);
    }

    return <div style={{width: "95%", margin: "10px"}}>
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input placeholder="Enter Patient Name" size="lg" onChange={processSearch}/>
        </InputGroup>
        <HStack>
                
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<HamburgerIcon color="gray.300" />} />
                <Input placeholder="Filter by Name" size="lg" onChange={processSearch}/>
            </InputGroup>

            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<HamburgerIcon color="gray.300" />} />
                <Input name="CreditCardNumber" placeholder="Filter by Card Number" size="lg" onChange={seiveFurther}/>
            </InputGroup>      
        </HStack>
            </div>
}
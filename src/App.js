import { useEffect, useContext, useState } from "react"
import { ProfileContext } from "./context/profileContext";
import Profiles from "./components/ProfileTable";
import Search from "./components/SearchProfiles";
import LoadingScreen from "./components/LoadingScreen"
import Paginator from "./components/Paginator";

const httpClient = require("node-fetch");

export default function App() 
{
  const { profileState, profileActions } = useContext(ProfileContext);
  const [ retryDownload, toggleRetryDownload ] = useState(true);

  const retreiveProfiles = () => 
  {
      httpClient("http://api.enye.tech/v1/challenge/records")
      .then(response => response.json())
      .then(jsonData => profileActions.store(jsonData.records.profiles))
      .catch(error => setTimeout(() => toggleRetryDownload(!retryDownload), 10000))
  }
  
  //eslint-disable-next-line
  useEffect(retreiveProfiles, [retryDownload]);

  if(profileState.all)
  {
    return <div>
              <Search /> 
              <Paginator />
              <Profiles />
          </div>
  }

  return <LoadingScreen />
}

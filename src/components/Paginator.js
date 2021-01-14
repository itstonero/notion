import { Button, Text } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { ProfileContext } from "../context/profileContext";

export default function Paginator() {
  const { profileState, profileActions } = useContext(ProfileContext);



  return (
    <div
      style={{
        width: "95%",
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        colorScheme="teal"
        size="md"
        isDisabled={profileState.index <= 1 || (profileState.index === profileState.size && profileState.size <= 1)}
        onClick={ () => profileActions.previousResult()}
      >
        <ArrowLeftIcon />{" "}
      </Button>
      <Text fontSize="md">
        {profileState.index}/{profileState.size}
      </Text>
      <Button
        colorScheme="teal"
        size="md"
        isDisabled={profileState.index === profileState.size}
        onClick={() => profileActions.nextResult()}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
}

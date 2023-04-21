import { useReducer, useState } from "react";
import { fetchUser } from "../Reducer/action";
import { githubReducer } from "../Reducer/reducer";
import { Box, Button, Flex, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";

const initValue = {
  isLoading: false,
  isError: false,
  data: {},
  token: "",
};

function Card() {
  const [state, dispatch] = useReducer(githubReducer, initValue);
  const [text, setText] = useState("");
  // console.log(state.data)
  return (
    <>
      <Box>
        <Flex w="40%" m="auto" gap="10px" mt="50px">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter Username"
          />
          <Button w="30%" colorScheme="teal" onClick={() => fetchUser(dispatch, text)}>Submit</Button>
        </Flex>
      </Box>
      <Box>
        <br />

       
       <Box display={state.data.id?"block":"none"}>
        <Stack direction={{sm:"row",md:"column",lg:"column"}} 
        boxShadow="lg" w={{lg:"50%",md:"50%",sm:"50%"}} p="20px" m="auto" 
         key={state.data.id} borderColor="gray.700" borderRadius="10px" bgColor="green.300">
                    <Box w="50%" m="auto" h="250px" >
                        <Image borderRadius="10px" src={state.data.avatar_url} w="100%" h="100%" />
                    </Box>
                    <Box>
                    <Text  fontWeight="bold" color="gray.800" >Username: {state.data.login}</Text>
                        <Text fontWeight="bold" color="gray.800" >Name: {state.data.name}</Text>
                        <Text fontWeight="bold" color="gray.800">No. of public repos:{state.data.public_repos}</Text>
                        <Text fontWeight="bold" color="gray.800">No. of public gists: {state.data.public_gists}</Text>
                        <Text fontWeight="bold" color="gray.800">Created At: {state.data.created_at}</Text>
                    </Box>
                </Stack>
                </Box>
      </Box>
    </>
  );
}
export default Card;

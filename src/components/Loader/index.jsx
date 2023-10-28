import { Center, Spinner } from "@chakra-ui/react";
const Loader = () => {
  return (
    <Center minHeight={"80vh"} bg={"#12141d"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="#12141d"
        color="red.500"
        size="xl"
      />
    </Center>
  );
};

export default Loader;

import CharacterCard from "../CharacterCard";
import { Flex, Heading } from "@chakra-ui/react";
const CharacterList = (data) => {
  return (
    <>
      {" "}
      <Heading pl={20} pt={10} bg={"#12141d"} color={"whiteAlpha.300"}>
        CHARACTERS
      </Heading>
      <Flex
        flexWrap={{ base: "wrap", lg: "wrap" }}
        gap="24px"
        p={20}
        h={"full"}
        w={"full"}
        bg={"#12141d"}
        justifyContent="space-evenly"
      >
        {data.data.map((char) => {
          return <CharacterCard key={char.name} data={char} />;
        })}
      </Flex>
    </>
  );
};

export default CharacterList;

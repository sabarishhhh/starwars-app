import {
  Flex,
  Text,
  Box,
  ListItem,
  List,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const DetailCard = () => {
  const location = useLocation();
  const resultData = location.state?.detailedData;
  const { data, title } = resultData;

  return (
    <Flex
      p={50}
      minHeight={"80vh"}
      bg={"#12141d"}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("#12151d", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        borderColor={"whiteAlpha.200"}
        rounded="md"
        minW={[50,1000]}
        minH={500}
        shadow="lg"
        position="relative"
      >
        <Flex>
          <Box
            fontSize={"2xl"}
            fontWeight="bold"
            textTransform={"uppercase"}
            transform="rotate(90deg)"
            transformOrigin="top left"
            color={"#8f9094"}
            ml={10}
            mt={10}
          >
            <Text bgGradient="linear(to-r, gray.700, gray.900)" bgClip="text">
              {data.name}
            </Text>
          </Box>
          <Box position={"absolute"} left={20}>
            <Box
              display="flex"
              alignItems="baseline"
              fontSize={["30","40"]}
              fontWeight="bold"
              textTransform={"uppercase"}
              as="h4"
              lineHeight="tight"
            >
              <Text color={"red.500"}>{data.name}</Text>
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize={["sm","xl"]}
                color={"#8f9094"}
                fontWeight="semibold"
                lineHeight="tight"
              >
                Height: {data.height} Mass: {data.mass}
              </Box>
            </Flex>

            <Flex
              justifyContent="space-between"
              alignContent="center"
              flexDir={"column"}
              mt={10}
              borderTop={1}
              borderStyle={"solid"}
              borderColor={useColorModeValue("white.100", "gray.900")}
            >
              <Box
                as="span"
                color={"#8f9094"}
                textTransform={"uppercase"}
                mt={10}
                fontSize={["15px","20px"]}
              >
                <Text fontWeight={"semibold"}>Gender: {data.gender}</Text>
              </Box>
              <Box
                as="span"
                color={"#8f9094"}
                textTransform={"uppercase"}
                fontSize={["15px","20px"]}
              >
                <Text fontWeight={"semibold"}>
                  Skin color: {data.skin_color}
                </Text>
              </Box>
              <Box
                as="span"
                color={"#8f9094"}
                textTransform={"uppercase"}
                fontSize={["15px","20px"]}
              >
                <Text fontWeight={"semibold"}>eye color: {data.eye_color}</Text>
              </Box>
              <Box
                as="span"
                color={"#8f9094"}
                textTransform={"uppercase"}
                fontSize={["15px","20px"]}
              >
                <Text fontWeight={"semibold"}>
                  Birth Year: {data.birth_year}
                </Text>
              </Box>
              <Image
                src="./src/assets/logo.png"
                alt="logo"
                w={"300px"}
                opacity={0.1}
              />
            </Flex>
          </Box>
          <Box
            bg={"#25262f"}
            minW={["220px","400px"]}
            minH={[300,490]}
            right={[0]}
            top={['500px',0]}
            position={"absolute"}
            borderRadius={["0 0 0 0","0 0 0 70%"]}
            overflow="hidden" 
          >
            <Box
              display="flex"
              alignItems="baseline"
              fontSize={["20","50"]}
              fontWeight="bold"
              textTransform={"uppercase"}
              as="h4"
              pl={["50px","100px"]}
              pt={5}
              color={"#8f9094"}
              lineHeight="tight"
            >
              <Text>Movies</Text>
            </Box>
            <Box>
              <List spacing={3} pl={["45px","100px"]} fontSize={['15px',20]} pt={5}>
                {title?.map((name) => {
                  return (
                    <ListItem color={"#8f9094"} key={name}>
                      {name}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DetailCard;

// adding prop type validation
DetailCard.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    species: PropTypes.arrayOf(PropTypes.string).isRequired,
    vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
    starships: PropTypes.arrayOf(PropTypes.string).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

import {
  Heading,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { StarIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import authService from "../../service/auth-service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export default function CharacterCard(props) {

  const { name, films } = props.data;
  const [fav, setFav] = useState(false);
  const [favList, setFavList] = useState([]);
  const [filmsTile, setFilms] = useState();
  const navigate = useNavigate();
  const toast = useToast();

  //for getting the fav list from the localstorage
  useEffect(() => {
    const prevData = localStorage.getItem("fav");
    if (prevData) {
      setFavList(JSON.parse(prevData));
    }
  }, []);

  //handle for select the favorite and storing in ls
  const handleFavorite = () => {
    fav &&
      toast({
        title: "Added to favorite !",
        description: `${name} added to favorites`,
        position: "top-right",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    setFav((prev) => !prev);

    let prevData = localStorage.getItem("fav");
    if (!prevData) {
      prevData = new Set();
    } else {
      prevData = new Set(JSON.parse(prevData));
    }
    if (prevData.has(name)) {
      prevData.delete(name);
    } else {
      prevData.add(name);
    }
    localStorage.setItem("fav", JSON.stringify(Array.from(prevData)));
  };

  // for getting the movie title
  useEffect(() => {
    const fetchData = async () => {
      const movieNames = await authService.fetchMovieNames(films);
      setFilms(movieNames);
    };
    fetchData();
  }, []);


  //passing the data to detail page through params
  const handleDetailpage = () => {
    const detailedData = {
      data: props.data,
      title: filmsTile,
    };
    navigate("/detail", { state: { detailedData } });
  };

  return (
    <>
      <Card overflow="hidden" variant="outline" p={15} minW={250} maxW={300}>
        <Stack className="p-10">
          <CardBody>
            <Heading size="md">{name}</Heading>
          </CardBody>
          <CardFooter>
            <Box>
              <Button variant="solid" bg="#3ccf91" onClick={handleDetailpage}>
                View Details
              </Button>
              <IconButton
                 ml={["2", "5"]}
                cursor={"pointer"}
                onClick={handleFavorite}
                icon={<StarIcon />}
                isRound={true}
                variant="solid"
                color={
                  favList.includes(name) || fav
                    ? "red"
                    : !favList.includes(name) && fav
                    ? "red"
                    : "black"
                }
              />
            </Box>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

// adding prop type validation
CharacterCard.propTypes = {
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

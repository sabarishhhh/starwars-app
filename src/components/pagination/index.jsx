import PropTypes from "prop-types"; // Import PropTypes
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Center, Text } from "@chakra-ui/react";
const Pagination = ({ previous, next, onPreviousClick, onNextClick }) => {
  return (
    <Center bg={"#12141d"}>
      {previous && (
        <>
          <ChevronLeftIcon
            w={10}
            h={10}
            color={"red.500"}
            cursor={"pointer"}
            onClick={onPreviousClick}
          />
          <Text color={"red.500"} cursor={"pointer"} fontSize={15}  onClick={onPreviousClick}>
            PREVIOUS
          </Text>
        </>
      )}

      {next && (
        <>
          <Text color={"red.500"} pl={10} cursor={"pointer"} onClick={onNextClick} fontSize={15}>
            NEXT
          </Text>
          <ChevronRightIcon
            w={10}
            h={10}
            color={"red.500"}
            cursor={"pointer"}
            onClick={onNextClick}
          />
        </>
      )}
    </Center>
  );
};

// adding prop type validation
Pagination.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Pagination;

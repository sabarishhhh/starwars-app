import { useEffect, useState } from "react";
import authService from "../../service/auth-service";
import CharacterList from "../../components/CharacterList";
import Pagination from "../../components/pagination";
import Loader from "../../components/Loader";

const HomePage = () => {
  const [characterData, setCharacterData] = useState({
    next: null,
    results: [],
    previous: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await authService.getCharacters();
        setCharacterData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = async (url) => {
    setIsLoading(true);
    try {
      const data = await authService.getCharacters(url);
      setCharacterData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Conditional rendering based on the loading state
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <CharacterList data={characterData.results} />
      <Pagination
        previous={characterData.previous}
        next={characterData.next}
        onPreviousClick={() => handlePageChange(characterData.previous)}
        onNextClick={() => handlePageChange(characterData.next)}
      />
    </>
  );
};

export default HomePage;

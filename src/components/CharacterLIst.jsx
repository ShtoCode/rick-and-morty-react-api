import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character";

const NavPage = (props) => {
    return (
        <header className="d-flex justify-content-between align-items-center">
          <p className="page">Page: {props.page}</p>
      
          {props.page > 1 && (
            <button
              className="btn-rick"
              onClick={() => props.setPage(props.page - 1)}
            >
              Prev
            </button>
          )}
      
          <button
            className="btn-rick"
            onClick={() => props.setPage(props.page + 1)}
          >
            Next
          </button>
        </header>
      );

};

const CharacterLIst = () => {
  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    };
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};
export default CharacterLIst;

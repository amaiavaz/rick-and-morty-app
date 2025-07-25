import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container'
import { useParams } from 'react-router';

export const OneCharacterInfo = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    if (character?.episode?.length) {
      const episodeIds = character.episode.map(url => url.split("/").pop()).join(",");

      axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds}`)
        .then((res) => {
          setEpisodes(Array.isArray(res.data) ? res.data : [res.data]);
        });
    }
  }, [character]);

  return (
    <>
      <section className='py-5 section-characters'>
        <Container fluid>
          <article className='mx-auto p-3 d-flex justify-content-around gap-3 bg-light w-50 rounded-4 shadow'>
            <div>
              <img src={character?.image} alt={character.name}/>
            </div>
            <div className='d-flex flex-column justify-content-center'>
              <h3><b>Name:</b> {character?.name}</h3>
              <p className='fs-5'><b>Status:</b> {character?.status}</p>
              <p className='fs-5 '><b>Species:</b> {character?.species}</p>
              <p className='fs-5'><b>Location:</b> {character?.location?.name}</p>
            </div>
          </article>
          <section>
            <h4>Episodes: </h4>
            <div>{episodes.map((elem) => {
              return(
                <p>{elem.name}</p>
              )
            })}</div>
          </section>
        </Container>
      </section>
    </>
  )
}

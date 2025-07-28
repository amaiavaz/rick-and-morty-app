import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container'
import { useParams } from 'react-router';
import { EpisodesTable } from '../../components/episodesTable/EpisodesTable';
import Button from 'react-bootstrap/esm/Button';

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
  }, [id]);

  useEffect(() => {
    if (character?.episode?.length) {
      const episodeIds = character.episode.map(url => url.split("/").pop()).join(",");

      axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds}`)
        .then((res) => {
          setEpisodes(Array.isArray(res.data) ? res.data : [res.data]);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [character]);

  return (
    <>
      <section className='py-5 section-characters'>
        <Container fluid>
          <article className='mx-auto d-flex gap-4 bg-light w-50 rounded-4 shadow'>
            <div className='w-50'>
              <img src={character?.image} alt={character.name} className='w-100 rounded-start-4'/>
            </div>
            <div className='d-flex flex-column justify-content-between py-3'>
              <div className='d-flex flex-column justify-content-center'>
                <h3><b>Name:</b> {character?.name}</h3>
                <p className='fs-5'><b>Status:</b> {character?.status}</p>
                <p className='fs-5 '><b>Species:</b> {character?.species}</p>
                <p className='fs-5'><b>Origin:</b> {character?.origin?.name}</p>
                <p className='fs-5'><b>Location:</b> {character?.location?.name}</p>
              </div>
              <div>
                <Button variant="dark">Back</Button>
              </div>
            </div>
          </article>
          <section className='py-5 w-50 mx-auto'>
            <EpisodesTable episodes={episodes}/>
          </section>
        </Container>
      </section>
    </>
  )
}

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomCard } from '../../components/card/CustomCard'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Characters = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCharacters(res.data.results);
        setInfo(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <section className='py-5 bg-light'>
        <Container fluid>
          <Row className='row-cols-5 g-4'>
            {characters.map((elem) => {
              return(
                <Col>
                  <CustomCard elem={elem}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  )
}

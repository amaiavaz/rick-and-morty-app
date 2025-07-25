import './characters.css';
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
  const [searchName, setSearchName] = useState("");

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

  const goNext = () => {
    if (info.next) setUrl(info.next);
  }

  const goPrev = () => {
    if (info.prev) setUrl(info.prev);
  }

  return (
    <>
      <section className='section-characters py-5 text-white'>
        <Container fluid>
          <h3 className=' mb-3'>Characters: {info.count}</h3>
          <div className='d-flex gap-1'>
            <div className='mb-3 border-bottom border-2 border-white w-100'>
              <input
                className='border-0 w-100 bg-transparent'
                type="text"
                placeholder='Search character...'
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>
            <div>
              <button 
                className='mx-2 rounded-3 fw-bold px-2'
                onClick={() => setUrl(`https://rickandmortyapi.com/api/character/?name=${searchName}`)}
              >Search</button>
            </div>
          </div>
          <Row className='row-cols-1 row-cols-md-3 row-cols-lg-5 g-4'>
            {characters.map((elem) => {
              return(
                <Col key={elem.id}>
                  <CustomCard elem={elem}/>
                </Col>
              )
            })}
          </Row>
          <div className='my-3 text-center'>
            <button
              className='mx-2 rounded-3 fw-bold px-2'
              onClick={goPrev} 
              disabled={!info.prev}
            >← Prev</button>
            <button 
              className='mx-2 rounded-3 fw-bold px-2'
              onClick={goNext} 
              disabled={!info.next}
            >Next →</button>
          </div>
        </Container>
      </section>
    </>
  )
}

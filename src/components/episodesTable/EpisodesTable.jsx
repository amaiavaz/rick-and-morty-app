import Table from 'react-bootstrap/Table';

export const EpisodesTable = ({episodes}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Episode</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {episodes?.map((elem) => {
          return(
            <tr key={elem.id}>
              <td>{elem.episode}</td>
              <td>{elem.name}</td>
              <td>{elem.air_date}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

import Table from 'react-bootstrap/Table';
import {FaTrash } from 'react-icons/fa'

const List = ({dataFilter}) => {

  const contributors = dataFilter.map((contributor)=>(
    <tr key={contributor.id}>
      <td>{contributor.name}</td>
      <td>{contributor.mail}</td>
      <td>{contributor.age}</td>
      <td>{contributor.position}</td>
      <td>{contributor.phone}</td>
      <td>
      <FaTrash />
      </td>
    </tr>
  ))

  return (
    <div className='table-responsive col-lg- mb-2 text-center'> {/* delete col-lg-8 */}
    <Table
    variant='light'
    className='table table-striped'
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>Age</th>
          <th>Position</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{contributors}</tbody>
    </Table>
    </div>
  );
}

export default List;
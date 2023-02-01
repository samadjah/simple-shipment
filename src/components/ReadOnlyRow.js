const ReadOnlyRow = ({ client, handleEditClick, handleDeleteClick }) => {
  return (

    <>
    <tr key={client.orderNo}>
      <td>{client.orderNo}</td>
      <td>{client.date}</td>
      <td>{client.customer}</td>
      <td>{client.trackingNo}</td>
      <td>{client.status}</td>
      <td>{client.consignee}</td>

      <td><button className="btn btn-outline-info" type='button' onClick={(event) => handleEditClick(event, client)}>Edit</button></td>
      <td><button className="btn btn-danger" type='button' onClick={() => handleDeleteClick(client.orderNo)}>Delete</button></td>
    </tr>
    </>
    
  );
};
 
export default ReadOnlyRow;
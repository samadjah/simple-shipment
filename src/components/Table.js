import axios from "axios";
import { useEffect, useState } from "react";
import EditableRow from './EditableRow';



const EditShipment = () => {
  

  const [clients, setClients] = useState([]);
  const [editFormData, setEditFormData] = useState({
    orderNo: '',
    date: '',
    customer: '',
    trackingNo: '',
    status: '',
    consignee: '',
  });

  const [editClientOrderNo, setEditClientOrderNo] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const inputName = event.target.getAttribute('name')
    const inputValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[inputName] = inputValue;
    setEditFormData(newFormData);

  };
 
  
  const loadShipment = async () => {
    // setLoading(true);
    const response = await axios.get(`https://my.api.mockaroo.com/shipments.json?key=5e0b62d0#`);
    setClients(response.data);
    // setLoading(false);
  };
  
  useEffect(() => {
    loadShipment();
  }, []);

const handleEditFormeSubmit = (event) => {
  event.preventDefault();

  const editedClient = {
    orderNo: editClientOrderNo,
    date: editFormData.date,
    customer: editFormData.customer,
    trackingNo: editFormData.trackingNo,
    status: editFormData.status,
    consignee: editFormData.consignee,
  };

  const newClients = [...clients];

  const index = clients.findIndex((client) => client.orderNo === editClientOrderNo);

  newClients[index] = editedClient;

  setClients(newClients);
  setEditClientOrderNo(null);

};

const handleEditClick = (event, client) => {
event.preventDefault();
setEditClientOrderNo(client.orderNo);

const formValues = {
  orderNo: client.orderNo,
  date: client.date,
  customer: client.customer,
  trackingNo: client.trackingNo,
  status: client.status,
  consignee: client.consignee,
};
setEditFormData(formValues);
};

const handleCancelClick = () => {
setEditClientOrderNo(null);
}; 

const handleDeleteClick = (clientOrderNo) => {
const newClients = [...clients];

const index = clients.findIndex((client) => client.orderNo === clientOrderNo);

newClients.splice(index, 1);
setClients(newClients);

}; 
  
  
  return (
    <>
        <form onSubmit={handleEditFormeSubmit}>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Order No</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Tracking No</th>
          <th>Status</th>
          <th>Consignee</th>
        </tr>
      </thead>
      <tbody>
            {clients.map((client) => (
              <>
                {editClientOrderNo === client.orderNo ? (
                  <EditableRow editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick} />
                ) : (
                    
          
                  <tr key={client.orderNo}>
                    <td>{client.orderNo}</td>
                    <td>{client.date}</td>
                    <td>{client.customer}</td>
                    <td>{client.trackingNo}</td>
                    <td>{client.status}</td>
                    <td>{client.consignee}</td>

                    <td><button className="btn btn-outline-info" type='button' onClick={(event) => handleEditClick(event, client)}>Edit</button></td>
                    <td><button className="btn btn-danger" type='button' onClick={() => handleDeleteClick(client.orderNo)}>Delete</button></td>    </tr>
                )}
          </>
        ))}
      </tbody>
    </table>
  </form>
    </>
  );
  
}

export default EditShipment;
import data from '../data/mock-data.json';
import { useState } from "react";
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
// import TableForm from "./components/TableForm";
import Card from './UI/Card';



const Table = () => {
  const [clients, setClients] = useState(data);
  const [addFormData, setAddFormData] = useState({
    orderNo: '',
    date: '',
    customer: '',
    trackingNo: '',
    status: '',
    consignee: '',
  });
  const [editFormData, setEditFormData] = useState({
    orderNo: '',
    date: '',
    customer: '',
    trackingNo: '',
    status: '',
    consignee: '',
  });

  const [editClientOrderNo, setEditClientOrderNo] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
  
    const inputName = event.target.getAttribute('name')
    const inputValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[inputName] = inputValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const inputName = event.target.getAttribute('name')
    const inputValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[inputName] = inputValue;
    setEditFormData(newFormData);

  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newOrderClient = {
      orderNo: addFormData.orderNo,
      date: addFormData.date,
      customer: addFormData.customer,
      trackingNo: addFormData.trackingNo,
      status: addFormData.status,
      consignee: addFormData.consignee,
    };
    const newOrderClients = [...clients, newOrderClient];
    setClients(newOrderClients);

        
  };
  
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

const handleDeletelClick = (clientOrderNo) => {
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
                <ReadOnlyRow client={client}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeletelClick} />
                )}
          </>
        ))}
      </tbody>
    </table>
  </form>
  <h2>Add a Client</h2>
      <Card>
      <form onSubmit={handleAddFormSubmit} >
        <table>
          <tbody>


          <tr>

            <td>
              
      <label className='form-label' htmlFor="orderNo">Order No</label>
              <input
                className="form-control"
                type="text"
                required='required'
                placeholder=' Ordering number'
                name='orderNo'
                
          onChange={handleAddFormChange}
          />
      <label className='form-label' htmlFor="date">Date</label>
              <input
                className="form-control"
                type="text"
                required='required'
                placeholder='11/01/22'
                name='date'
                onChange={handleAddFormChange}
                />
            </td>
            <td>

      <label className='form-label' htmlFor="customer">Customer</label>
              <input
                className="form-control"
                type="text"
                required='required'
                name='customer'
                placeholder='Customer name'
                onChange={handleAddFormChange}
                />
        

      <label className='form-label' htmlFor="trackingNo">Tracking No</label>
              <input
                className="form-control"
          type="text"
          required='required'
          name='trackingNo'
          placeholder='Tracking No'
          onChange={handleAddFormChange}
          />
            </td>
            <td>

      <label className='form-label' htmlFor="status">Status</label>
              <select
                className="form-select"
          name="status"
          id="status"
          required='required'
          form="statusform"
          placeholder='Change Status'
          onChange={handleAddFormChange}
          >
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="inTransit">In Transit</option>
        </select>
      <label className='form-label' htmlFor="consignee">Consignee</label>
              <input
                className="form-control"
          type="text"
          name='consignee'
          required='required'
          placeholder='Consignee name'
          onChange={handleAddFormChange}
          />
            </td>
          </tr>
          </tbody>
                </table>
        <div>          
        <h2>New order for shipment</h2>
        <button className="btn btn-outline-success" type='subbmit'>Add new</button>
        </div>
    </form>
      </Card>
</>
);
};

export default Table;
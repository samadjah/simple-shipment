import React from 'react';
// import Card from './UI/Card';


const EditableRow = ({client, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (

    
    <tr>
      <td></td>
      <td></td>

          <td className='editable'>
        <label className='form-label' htmlFor="orderNo">Order No</label>
        <input
          className="form-control"
          type="text"
          required='required'
          placeholder=' Ordering number'
          name='orderNo'
          value={editFormData.orderNo}
          
          onChange={handleEditFormChange}

            />
        <label className='form-label' htmlFor="date">Date</label>
        <input
          className="form-control"
          type="text"
          required='required'
          placeholder='11/01/22'
          name='date'
          value={editFormData.date}
          onChange={handleEditFormChange}
            />
                        </td>
          <td>
        <label className='form-label' htmlFor="customer">Customer</label>
        <input
          className="form-control"
          type="text"
          required='required'
          placeholder='Customer name'
          name='customer'
          value={editFormData.customer}
          onChange={handleEditFormChange}
          />
        <label className='form-label' htmlFor="trackingNo">Tracking No</label>
        <input
          className="form-control"
          type="text"
          required='required'
          placeholder='Tracking No'
          name='trackingNo'
          value={editFormData.trackingNo}
          onChange={handleEditFormChange}
          
          />
                        </td>
          <td>
        <label className='form-label' htmlFor="status">Status</label>
        <select className="form-select"
          name="status"
          id="status"
          required='required'
          form="statusform"
          value={editFormData.status}
          placeholder='Change Status'
          onChange={handleEditFormChange}
          >
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="inTransit">In Transit</option>
            </select>
        <label className='form-label' htmlFor="consignee">Consignee</label>
        <input
          className="form-control"
          type="text"
          required='required'
          placeholder='consignee name'
          value={editFormData.consignee}
          onChange={handleEditFormChange}
          />
      </td>

    

      <td></td>

      
        
      <td><button className="btn btn-outline-success" type='submit'>Save</button></td>
      <td><button className="btn btn-outline-secondary" type='button' onClick={handleCancelClick}>Cancel</button></td>
      </tr>

  );
};
 
export default EditableRow;
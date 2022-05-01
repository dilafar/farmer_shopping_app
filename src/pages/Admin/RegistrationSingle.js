import React from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import UpdateModelAdmin from '../../components/Models/updateModelAdmin';
import DeleteModelAdmin from '../../components/Models/DeleteModelAdmin';

const RegistrationSingle = ({user}) => {
  return (
      
<tr>
      <th scope="row">
       {user._id} 
      </th>
      <td>
        {user.firstName}
      </td>
      <td>
      {user.lastName}
      </td>
      <td>
      {user.email}
      </td>
      <td>
      {user.Phone}
      </td>
      <td>
     {user.updatedAt}
      </td>
      <td>
         <span style={{backgroundColor : user.isFarmer === 'pending' ? "yellow":user.isFarmer === 'Approved' ? "green":user.isFarmer === 'Rejected' ? "red" : " " , padding: "5px", borderRadius: "10px"}}>
      {user.isFarmer}</span> 
      </td>
      <td>
          <div style={{display:"flex" }}>
        <UpdateModelAdmin user={user} /> <DeleteModelAdmin user={user} />
        </div>
      </td>
    </tr>
    
  )
}

export default RegistrationSingle
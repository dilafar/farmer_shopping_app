import React ,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {thead ,Table } from 'reactstrap';
import {getallusers} from '../../actions/user';
import RegistrationSingle from './RegistrationSingle';
const Registrations = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.user);

  useEffect(()=>{
        dispatch(getallusers());
  },[dispatch])

  return (
    <div>
      <Table hover>
  <thead>
    <tr>
      <th>
        ID
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Email
      </th>
      <th>
        PhoneNumber
      </th>
      <th>
        Last Modified
      </th>
      <th>
        Status
      </th>
      <th>
        ChangeStatus
      </th>
    </tr>
  </thead>
  <tbody>
{users.map((user)=>(
    <RegistrationSingle key={user._id} user={user}/>
))}
    
  </tbody>
</Table>

    </div>
  )
}

export default Registrations
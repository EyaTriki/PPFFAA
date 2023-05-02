import React from 'react'
import { useSelector } from 'react-redux';
export default function Profile() {
    const user = useSelector((state) => state.user.currentUser);
if(user.role==="teacher"){
    return (

        <div>teacher page</div>
           
          )
}else{
    return(
    <div>student page</div>
    )
}
 
}

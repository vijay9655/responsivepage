import React from 'react'
import {Card,Button} from "antd";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
function Smallcard() {
    const data=[{
        name:'Minimal Design'
    },
    {
        name:'Rock Fast'
    },
    {
        name:'Framework'
    },
    {
        name:'Style Guide'
    },
    {
        name:'css+saas'
    },
    {
        name:'Customizable'
    },
    {
        name:'Modular Design'
    },
    {
        name:'Html5 Valid'
    },
]
  return (
    <div style={{width:'80%',margin:'auto',marginTop:'2%'}}>
        <MDBContainer>
        <MDBRow>
            {data.map((e)=>{
  return <MDBCol size='md' style={{paddingTop:'2%'}}>
  <Card style={{ width: 250,border:'none'}}>
<p style={{textAlign:'center'}}><img src='/' alt='img'/></p>
<p style={{textAlign:'center'}}><b>{e.name}</b></p>
<p style={{color:'gray',textAlign:"center"}}>Set ut perspiciatis unde<br/> omnis isto natus</p>
</Card>
  </MDBCol>
            })}
      
        </MDBRow>

        </MDBContainer>
    
    </div>
  
  )
}

export default Smallcard
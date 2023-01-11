import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button, Input } from 'antd';
function Backgroundcomponent() {
  return (
    <div style={{width:'70%',margin:'auto',marginTop:'2%',paddingTop:'100px'}}>
        <div style={{height:'100%',}}>
        <MDBContainer style={{color:'white',}}>
       <MDBRow>
        <MDBCol>
        <p style={{textAlign:'center',fontWeight:'900',fontSize:'25px',color:'white',}}>Lorem Ipsum
      <center>  <hr style={{lineHeight:'2px',border:'2px solid yellow',width:'8%',background:'yellow'}}/></center></p>
        </MDBCol>
       </MDBRow>

      <MDBRow>
        <MDBCol size='md'>
            <label>Name</label>
          <Input  defaultValue='Name'/>
        </MDBCol>
        

        <MDBCol size='md'>
        <label>Email</label>

        <Input defaultValue='Email'/>
        </MDBCol>
      <br/>
      </MDBRow>
      <MDBRow>
        <MDBCol size='md'>
        <label>Designation</label>

        <Input defaultValue='Designation'/>

        </MDBCol>
        <MDBCol size='md'>
        <label>Contact</label>

        <Input defaultValue='Contact'/>

        </MDBCol>
      
      </MDBRow>
      <br/>
      <MDBRow style={{textAlign:'center'}}>
      <MDBCol size='md'>
      <Button style={{width:'30%',backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",color:'white',padding:'2% 0% 3% 0%',fontWeight:'bold'}}>
    submit
        </Button>

        </MDBCol>
       
      </MDBRow>
    </MDBContainer>
    </div>
    </div>
  )
}

export default Backgroundcomponent
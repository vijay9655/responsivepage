import React from 'react'
import {Card,Button} from "antd";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
function Footer() {
    const data=[
        {
        name:'Info',
        n1:'Getting started',
        n2:'Resources',
        n3:'Design',
        n4:'Tutorials',
        n5:'Pricing'
    },
        {
        name:'Support',
        n1:'Documentation',
        n2:'Requirements',
        n3:'License',
        n4:'Updates',
        n5:'Contact'
    },
        {
        name:'Connect',
        n1:'Twiter',
        n2:'Facebook',
        n3:'Instagram',
        n4:'Medium',
       
    },
      
    
]
  return (
    <div>
         <div style={{width:'80%',margin:'auto',marginTop:'2%'}}>
        <MDBContainer>
        <MDBRow>
            <MDBCol size='md'>
            <Card style={{ width: 450,border:'none'}}>
<p ><b>Opalin&#174;</b></p>
<p>We are completely remote company,working across twenty<br/>contries with over 20,000 customers</p>
</Card>
            </MDBCol>
            {data.map((e)=>{
  return <MDBCol size='md' style={{paddingTop:'2%'}}>
   <Card style={{ width: 200,border:'none'}}>
<p ><b>{e.name}</b></p>
<p>{e.n1}</p>
<p>{e.n3}</p>
<p>{e.n3}</p>
<p>{e.n4}</p>
<p>{e?.n5}</p>


</Card>
  </MDBCol>
            })}
      
        </MDBRow><br/><br/>
        

        </MDBContainer>
    
    </div>
    </div>
  )
}

export default Footer
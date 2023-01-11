import React from 'react'
import {Card,Button} from "antd";

import { Grid, Typography, Divider } from "@material-ui/core";
function Carddetail() {
    const data = [
        {
          title: 'Free Forever',
          amt:'Free',
          para1:'ut enim ad minima venlam,quls nostrum exercitatium.',
          btn:'Sign Up For Free'
        },
        { 
          title: 'For Teams',
          amt:'$20/mo',
          para1:'Nemo enim ipsam voluptatem qula voluptas sit.',
          btn:'Start 14-Day Trial'
        },
        {
          title: 'For Enterprises',
          amt:'$140/mo',
          para1:'Sunt in culpa qui officia desecrunt mollit anim id est laborum.',
          btn:'Sign 14-Day Trial'
        }
      ];
  return (
    <div style={{width:'90%',margin:'auto'}} ><br/> 
        <div>
        <Grid  container item xs={12}>
        <Grid container item sm={12}>
          <Grid container item lg={4} style={{ marginBottom: 25,paddingRight:'2%' }}>
          <Card id='card1' title={data[0].title}>
        <b>{data[0].amt}</b>
            <div>
                {data[0].para1}<br/>
                <ul>
                    <li>At vero eos et accusamus</li>
                    <li>Odio dignissimos ducimus</li>
                    <li>Blanditils praesentium</li>
                </ul>
                </div>
              <center> <Button id='card1btn'>{data[0].btn}</Button> </center> 

       
        </Card>
          </Grid>
          <Grid container style={{ marginBottom: 25,paddingRight:'2%'  }} item lg={4}>
          <Card id='card2' title={data[1].title}>
        <b>{data[1].amt}</b>
            <div>
                {data[1].para1}<br/>
                <ul>
                    <li>At vero eos et accusamus</li>
                    <li>Odio dignissimos ducimus</li>
                    <li>Blanditils praesentium</li>
                </ul>
                </div><br/>
                <center> <Button id='card2btn'>{data[1].btn}</Button> </center> 


       
        </Card>
          </Grid>
          <Grid container item lg={4} style={{ marginBottom: 25 }}>
          <Card id='card3' title={data[2].title}>
        <b>{data[2].amt}</b>
            <div>
                {data[2].para1}<br/>
                <ul>
                    <li>At vero eos et accusamus</li>
                    <li>Odio dignissimos ducimus</li>
                    <li>Blanditils praesentium</li>
                </ul>
                </div>
                <center> <Button id='card3btn'>{data[1].btn}</Button> </center> 


       
        </Card>
          </Grid>
        </Grid>
        
      </Grid>

        </div>
       
   
           
         
    </div>
  )
}

export default Carddetail
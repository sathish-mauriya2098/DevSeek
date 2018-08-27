import React, { Component } from 'react';
import {Card,Row,Input,Col,Button} from 'react-materialize';
import axios from 'axios';
export default class Forms extends Component {
    constructor(){
        super();
        this.state={
            user:{
            Name:"",
            Email:"",
            Branch:"",
            Degree:""
        }

        }
    }
      inputHandler=(event)=>{
        //   alert(event.target.value);
        const user={...this.state.user};
        var name=event.target.name;
        if(name==="Name")
        user.Name=event.target.value;
        if(name==="Email")
        user.Email=event.target.value;
        if(name==="Branch")
        user.Branch=event.target.value;
        if(name==="Degree")
        user.Degree=event.target.value;
       this.setState({
         user:user
       }
      
       );
      }
      inputSubmit=(event)=>{
          event.preventDefault();
       const user={
           name:this.state.user.Name,
           email:this.state.user.Email,
           branch:this.state.user.Branch,
           degree:this.state.user.Degree,

       }
       console.log(user);
      axios.get("/data",user)
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
      
    }
    render() {
 return (
     
            <div className="container">
            <Col m={6} s={12}>
            <Card className='hoverable'>
            <center><h5>FORM</h5></center>
            <p>{this.state.user.Name}</p>
            <p>{this.state.user.Email}</p>
            <p>{this.state.user.Branch}</p>
            <p>{this.state.user.Degree}</p>
            <Row>
                <body>
                <form onSubmit={this.inputSubmit}>
                <Input  s={12} label="Name" onChange={this.inputHandler} name="Name"/>
                <Input type="email" label="Email" onChange={this.inputHandler} name="Email" s={12} />
                <Input s={12} type='select' label="Degree" onChange={this.inputHandler}  name="Degree" defaultValue='2'>
                    <option value='B.E'>B.E</option>
                    <option value='B.Tech'>B.Tech</option>
               </Input>
               <Input s={12} type='select' label="Branch" onChange={this.inputHandler} name="Branch" >
                    <option value='CSE'>CSE</option>
                    <option value='IT'>IT</option>
                    <option value='EEE'>EEE</option>
                    <option value='ECE'>ECE</option>
               </Input>
               <Input s={12} type='select' label="Year Of Passing" onChange={this.inputHandler}  defaultValue='2'>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
               </Input>
               <p>Are you Deveoper?</p>
               <div>
               <Input type="radio" value="Yes" onChange={this.inputHandler} label="Yes" name="Dev" />
               <Input type="radio" value="No" onChange={this.inputHandler}  label="No" name="Dev" />
               </div>
               <br/>
               <br/>
               <div className="Developer col s12">
               <Input s={12} type='select' label="Front-End Skills" onChange={this.inputHandler} name="skill" multiple>
                    <option value='HTML'>HTML</option>
                    <option value='HTML5'>HTML5</option>
                    <option value='CSS'>CSS</option>
                    <option value='CSS3'>CSS3</option>
                    <option value='JAVASCRIPT'>JAVASCRIPT</option>
                    <option value='JQUERY'>JQUERY</option>
                    <option value='REACTJS'>REACTJS</option>
                    <option value='ANGULARJS'>ANGULARJs</option>
               </Input>
               <Input s={12} type='select' label="Back-End Skills" onChange={this.inputHandler}  multiple>
                    <option value='PHP'>PHP</option>
                    <option value='JAVA'>JAVA</option>
                    <option value='PYTHON'>PYTHON</option>
                    <option value='NODEJS'>NODEJS</option>
                    <option value='SQL'>SQL</option>
                    <option value='ASP.NET'>ASP.NET</option>
               </Input>
               </div>
               <Input type="url" label="GitHub Link" s={12} />
               <Input type="url" label="Youtube channel Link" s={12} />
               <Input type="url" label="Personal Blogs/Website Link" s={12} />
               <div className="center">
               <Button waves='light' type="submit" className="blue">register</Button>
               </div>
               </form>
               </body>
           </Row>
          </Card>
          </Col>
          </div>
        );
    }
}

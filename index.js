import React from "react";
import ReactDOM  from "react-dom";
import App from './App.css';

class Reactform extends React.Component{
    constructor(){
        super();
        this.state= {sport:"",name:"",phno:null,add:"",fees:null,refer:null,amount:null,errmsg:"",imgscr:""};
      }
      uservalue=(event)=> {
        let n=event.target.name;
        let v=event.target.value;
        let err=" ";
        if(n==="phno"){
          if(v!==" "&&!Number(v)){
            err=<strong>invalid,This must be number</strong>
          }
          this.setState({errmsg1:err});
        }
        if(n==="fees"){
          if(v!==" "&&!Number(v)){
            err=<strong>invalid,This must be number</strong>
          }
          this.setState({errmsg2:err});
        }
        if(n==="refer"){
          if(v!==" "&&!Number(v)){
            err=<strong>invalid,This must be number</strong>
            this.setState({errmsg3:err});
          }else{
            this.setState({errmsg3:""});
          var r = document.getElementById("Refer").value;
          var f = document.getElementById("Fees").value;
          var t = r*f;
          document.getElementById("Total").value=t;  
          }
        }
        
      }
                                                                                             
      render(){
        return(
          <div>
          <form onSubmit={this.formSubmit}>
            <h1>Sports registration</h1>
    
            
            Name: <input type="text" name="username" onChange={this.uservalue} /> <br /><br />
    
            Phone : <input type="text" name="phno" onChange={this.uservalue}/>
            {this.state.errmsg1}<br /><br />
    
            Address : <input type="text" name="add" onChange={this.uservalue}/><br /><br />
    
            Fees: <input type="text" id='Fees' name="fees" onChange={this.uservalue}/>
            {this.state.errmsg2}<br /><br />
    
            References : <input type="text" id="Refer" name="refer" onChange={this.uservalue}/>
            {this.state.errmsg3}<br /><br />
    
            Total amount :<input type='text' id='Total' disabled /><br /><br/>
    
            <input type='submit' />
          </form>
          </div>
        );
      }
    }
    ReactDOM.render(<Reactform /> ,document.getElementById('root'));
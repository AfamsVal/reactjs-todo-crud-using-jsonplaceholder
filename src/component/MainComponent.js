import React, {Component} from 'react';
import ButtonComponent from './ButtonComponent';
import AddTodos from './AddTodos';


class MainComponent extends Component {


    toggleNow = (data) =>{
        if(data.completed){
            return {
                textDecoration:'line-through',
                backgroundColor:'grey',
                padding:'10px'
                }   
        }else{
            return {
                textDecoration:'none',
                padding:'10px',
                backgroundColor:'#ccc',
                }     
        }
    }


render(){
   return (
    <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2  col-lg-8 offset-lg-2" style={{paddingTop:'30px'}}>
        <AddTodos submitHandle={this.props.submitHandle} />
        {this.props.todo.map((data)=>{
            const {id,title,completed} = data;
            return (
             <div key={id} style={this.toggleNow(data)} >
                <input checked={completed} onChange={this.props.isChecked.bind(this,id)} type="checkbox"/> {title} &nbsp; 
                <ButtonComponent btnClick={this.props.btnClick} id={id}/>
             </div>
            )
        })
        }    
    </div>
); 
}
}

export default MainComponent;
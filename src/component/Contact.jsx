import React ,{Component} from 'react';
import {Formik,Field} from 'formik';
import {connect} from 'react-redux';
class Contact extends Component{
state={
    users:{}
}
 sub=(values)=>{
     this.setState({
         users:values
     })
        this.props.users(this.state.users);


 }

Form=(props)=>{
        return <form onSubmit={props.handleSubmit}>
            <Field name="name" placeholder="Name" className="form-control"/>
            <Field name="email" type="email" placeholder="Email"  className="mt-3 form-control"/>
            <Field name="subject" placeholder="Subject" className="mt-3 form-control"/>
            <Field name="message" placeholder="Message" className="mt-3 form-control"/>
            <button type="submit"  className="mt-3 btn btn-dark mt-3 form-control">Send</button>
        </form>
    }

    render(){
        return(
            <div className='text-center'>
                <h5>Contact</h5>
                <p>Questions? Go ahead.</p>
                <Formik 
                   initialValues={{name:'',email:'',subject:'',message:''}}
                   onSubmit={this.sub}
              >{this.Form}</Formik>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
   return{
       users:(user)=>dispatch({type:"USERS",users:user})
   }
}
export default connect('',mapDispatchToProps)(Contact);
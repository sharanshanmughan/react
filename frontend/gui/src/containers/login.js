import React from 'react';
import {  Input, Button } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
class CustomLogin extends React.Component {

    handleFormSubmit = (event) => {
        //alert('wopbhkhg')
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
       

        axios.post('http://127.0.0.1:8000/rest-auth/login/',{
            username : username,
            password : password,
           
        }).then(res =>{       
           alert(res)
           this.props.history.push('/articles');
        }).catch(err=>{
            alert(err)
        })
    }

    render() {
        return (
            <form style={{ textAlign:'center'}}onSubmit={(event) => this.handleFormSubmit(
                event
                )}>
                
                <Input name="username" style={{top:30,position:'relative',width:300}} placeholder="username" />
               <br/>
                <Input name="password" style={{top:50,position:'relative',width:300}} placeholder="password" />
            <br/>
                <Button style={{top:80,position:'relative',width:300}} type='primary'  htmlType="submit">Login</Button>
           <br/>
           <label style={{top:80,position:'relative'}}>or</label>
           <br/>
           
           <Button style={{top:80,position:'relative',width:300}} type='danger'>
           <Link to="/signup" >SignUp</Link>
               </Button>
            </form>
        )
    }
}
export default CustomLogin;

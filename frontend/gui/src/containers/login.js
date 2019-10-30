import React from 'react';
import {  Input, Button } from 'antd';
import {Link} from 'react-router-dom';
class CustomLogin extends React.Component {
    render() {
        return (
            <form style={{ textAlign:'center'}}>
                
                <Input name="title" style={{top:30,position:'relative',width:300}} placeholder="username" />
               <br/>
                <Input name="content" style={{top:50,position:'relative',width:300}} placeholder="password" />
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

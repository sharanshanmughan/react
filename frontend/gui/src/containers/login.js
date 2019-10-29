import React from 'react';
import { Form, Input, Button } from 'antd';

class CustomLogin extends React.Component {
    render() {
        return (
            <form style={{ textAlign:'center'}}>
                
                <Input name="title" style={{top:30,position:'relative',width:300}} placeholder="username" />
               <br/>
                <Input name="content" style={{top:50,position:'relative',width:300}} placeholder="password" />
            <br/>
                <Button style={{top:90,position:'relative',width:300}} type='primary'  htmlType="submit">Login</Button>
           
            </form>
        )
    }
}
export default CustomLogin;

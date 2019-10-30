import React from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
class CustomSignup extends React.Component {
    handleFormSubmit = (event) => {
        //alert('wopbhkhg')
        event.preventDefault();
        const username = event.target.elements.username.value;
        // alert(username)
        const password1 = event.target.elements.password.value;
        const password2 = event.target.elements.repassword.value;

        axios.post('http://127.0.0.1:8000/rest-auth/registration/',{
            username : username,
            password1 : password1,
            password2 : password2
        }).then(res =>{
                    
           alert(JSON.stringify(res['data']['key']))
        }).catch(err=>{
            alert(err)
        })
    }
    render() {
        return (
            <form style={{ textAlign: 'center' }} onSubmit={(event) => this.handleFormSubmit(
                event
                )}>

                <Input name="username" style={{ top: 30, position: 'relative', width: 300 }} placeholder="username" />
                <br />
                <Input name="password" style={{ top: 50, position: 'relative', width: 300 }} placeholder="password" />
                <br />
                <Input name="repassword" style={{ top: 70, position: 'relative', width: 300 }} placeholder="confirm-password" />
                <br />
                <Button style={{ top: 90, position: 'relative', width: 300 }} type='danger' htmlType="submit">SignUp</Button>
            </form>
        )
    }
}
export default CustomSignup;

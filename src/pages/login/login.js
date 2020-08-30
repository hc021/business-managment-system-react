import React, { Component } from 'react'
import './login.less';
import logo from './images/logo.png'
import { Button, Form, Input } from 'antd'



const Item = Form.Item;
// login route
export default class Login extends Component {
    state = {
        username: '',
        password: '',
        userError:  'Please input your Username!',
        useStatus: true,
        passwordError: 'Please input your Password!' ,
        passwordStatus: true,
    }
    userOnchange = event => {
        const value = event.target.value;
        this.setState({ username: value })
        if(value!='') this.setState({useStatus:true});
        if(value.length>=12) this.setState({useStatus:false,userError:"length not over than 12"})
    }
    passwordOnchange = event => {
        this.setState({ password: event.target.value })
        if(event.target.value!='') this.setState({passwordStatus:true});
    };
    onFinish = event => {
        const state = this.state;
        if (!state.username)  this.setState({ useStatus: false})
        if (!state.password) this.setState({passwordStatus:false})      
    }
    render() {
        const state = this.state;
        return (
            <div className='login'>
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>Business management system</h1>
                </header>
                <section className="login-content">
                    <h2>Login</h2>
                    <div className="form-group">
                        <Form className="login-form">
                            <div className="user-box" >
                                <Input maxLength="30"  name='usename' type="text" placeholder="Username" onChange={this.userOnchange} value={this.state.username} />
                                <div hidden={state.useStatus} className="user-err-msg">{state.userError}</div>
                            </div>
                            <div className="password-box">
                                <Input maxLength="12" type="password" placeholder="Password" onChange={this.passwordOnchange} />
                                <div hidden={state.passwordStatus} className="password-err-msg">{state.passwordError}</div>
                            </div>
                            <div>
                                <Button type="primary" htmlType="submit" onClick={this.onFinish} className="login-form-button">Submit</Button>
                            </div>
                        </Form>
                    </div>
                </section>

            </div>
        )
    }
}



import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import Logo from '../logo.svg'
// import style from "./styles/auth.css"

export default class Login extends Component {

    render() {

        const header = (
            <img height="250em" alt="logo" src={Logo}/>
        );

        const footer = (
            <span>
                <Button style={{ width: '100px', margin: 'auto' , display: 'flex' }} onClick={e => window.location.href='/auth/42'} label="Login"/>
            </span>
        );

        return (
              <div className="p-grid p-fluid p-justify-center">
                <Card title="Login" subTitle="connect with your 42 student account" style={{ width: '25em', marginTop: '5em'}} className="ui-card-shadow" footer={footer} header={header}>
                    <form>
                        <div className="p-grid p-dir-col">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-key"></i>
                                </span>
                                <Password autoComplete="on" placeholder="Password" feedback={false}/>
                            </div>
                        </div>
                    </form>
                </Card>
              </div>
        );
    }
}
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import Logo from '../logo.svg'

export default class Register extends Component {

    render() {

        const header = (
            <img height="250em" alt="logo" src={Logo}/>
        );

        const footer = (
            <span>
                <Button label="Login" icon="pi pi-check" />
            </span>
        );

        return (
            <div className="App-body">
                
                <Card title="Register" subTitle="Create your account" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    {/* <p className="p-m-0" style={{lineHeight: '1.5'}}></p> */}
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
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
                                <Password placeholder="Password" feedback={false}/>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            
        );
    }
}
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import Logo from '../logo.svg'

export default class InputGroupDemo extends Component {

    render() {

        const header = (
            <img height="250em" alt="logo" src={Logo}/>
        );

        const footer = (
            <span>
                <Button label="Login" icon="pi pi-check" />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
            </span>
        );

        return (
            <div className="App-body">
                
                <Card title="Login" subTitle="connect with your 42 student account" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    {/* <p className="p-m-0" style={{lineHeight: '1.5'}}></p> */}
                    <div>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                        </div>

                         <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-key"></i>
                                </span>
                                <InputText placeholder="Password" />
                            </div>
                        </div>
                    </div>
                </div>
                </Card>
            </div>
            
        );
    }
}
                 
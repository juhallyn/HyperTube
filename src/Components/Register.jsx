import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import Logo from '../logo.svg'

import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

class FileUploadBtn extends Component {

    constructor(props) {
        super(props);
        this.onBasicUpload = this.onBasicUpload.bind(this);
    }

    onBasicUpload() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>
                    <h5>Profile picture</h5>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />
            </div>
        )
    }
}

export default class Register extends Component {

    render() {

        const header = (
            <img height="250em" alt="logo" src={Logo}/>
        );

        const footer = (
            <span>
                <Button label="Create" icon="pi pi-check" />
            </span>
        );

        return (
            <div className="App-body">
                <Card title="Register" subTitle="Create your account" style={{ width: '35em' }} className="ui-card-shadow" footer={footer} header={header}>
                    <form>
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-envelope"></i>
                                    </span>
                                    <InputText placeholder="Email" />
                                </div>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Name" />
                                </div>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Firstname" />
                                </div>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-key"></i>
                                    </span>
                                    <Password autoComplete="on" placeholder="Password" feedback={true}/>
                                </div>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-key"></i>
                                    </span>
                                    <Password autoComplete="on" placeholder="Password confirmation" feedback={false}/>
                                </div>
                            </div>
                            <div className="p-col-fixed" style={{ width: '100px'}}>
                                <FileUploadBtn/>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        );
    }
}
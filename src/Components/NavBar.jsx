import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Logo from '../logo.svg'

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'Disconnect',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }

    render() {
        const start = <img alt="logo" src={Logo} height="35" className="p-mr-2"></img>;
        const end = <InputText placeholder="Search" type="text" />;

        return (
            <div className="sticky">
                <div  style={{marginBottom: '2em'}} className="card">
                    <Menubar model={this.items} start={start} end={end} />
                </div>
            </div>
        );
    }
}
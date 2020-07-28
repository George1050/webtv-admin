import {Datagrid, List, TextField} from "react-admin";
import React from "react";

export const CargoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nome"/>
        </Datagrid>
    </List>
);
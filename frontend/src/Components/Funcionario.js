import React from "react";
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    NumberInput,
    EditButton,
    BooleanInput,
} from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";

export const FuncionarioCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="contato" />
            <BooleanInput label="Status" source="status" />
            <TextInput source="cargo.nome" label="Cargo"/>
        </SimpleForm>
    </Create>
);

export const FuncionarioList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="nome" />
            <TextField source="contato"/>
            <BooleanField source="status"/>
            <TextField source="cargo.nome" label="Cargo"/>
            <EditButton />
        </Datagrid>
    </List>
);
export const FuncionarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="contato" />
            <BooleanInput source="status" />
            <TextInput source="cargo.nome"/>
        </SimpleForm>
    </Edit>
)


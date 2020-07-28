import React from "react";
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    UrlField,
    EditButton,
    BooleanInput,
    ReferenceInput,
    SelectInput
} from "react-admin";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";

export const FuncionarioCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="contato" />
            <BooleanInput source="status" />
            <ReferenceInput label="Cargo" source="cargo_id" reference="cargo">
                <SelectInput
                    optionText="nome"
                    optionValue="id"/>
            </ReferenceInput>
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


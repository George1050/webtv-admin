import React from "react";
import {
    List,
    Create,
    Edit,
    SimpleForm,
    UrlField,
    DateInput,
    DateField,
    TextInput,
    Datagrid,
    TextField,
    ReferenceInput,
    SelectInput, EditButton
} from "react-admin";

export const VideoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="titulo"/>
            <TextInput label="Url do Video" source="urlVideo" />
            <DateInput source="data"/>
            <ReferenceInput source="programa.id" reference="programa">
                <SelectInput optionText="titulo" optionValue="id"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const VideoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="titulo"/>
            <TextInput label="Url do Video" source="urlVideo" />
            <DateInput source="data"/>
            <TextField disable label="Programa" source="programa.titulo"/>
        </SimpleForm>
    </Edit>
)

export const VideoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="titulo" />
            <UrlField source="urlVideo" />
            <DateField source="data" />
            <EditButton />
        </Datagrid>
    </List>
);


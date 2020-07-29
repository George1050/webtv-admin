import React from "react";
import {
    List,
    Create,
    Edit,
    SimpleForm,
    ImageField,
    DateInput,
    DateField,
    ArrayInput,
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
)

export const VideoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="titulo" />
            <ImageField source="urlVideo" />
            <DateField source="data" />
            <EditButton />
        </Datagrid>
    </List>
);


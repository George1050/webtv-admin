import React from "react";
import { List, Datagrid, TextField, UrlField, ArrayField, SingleFieldList, ChipField } from "react-admin";
import {
    Create,
    Edit,
    EditButton,
    SimpleForm,
    TextInput,
    SelectInput,
    ReferenceInput,
    ArrayInput,
    SimpleFormIterator
} from "react-admin";
import RichTextInput from 'ra-input-rich-text';

export const ProgramaCreate = props =>(
  <Create {...props}>
      <SimpleForm>
          <TextInput source="titulo" />
          <RichTextInput source="descricao" />
          <TextInput source="uriLogo" />
          <ArrayInput source="equipe">
              <SimpleFormIterator>
                  <ReferenceInput label="Equipe" source="funcionario_id" reference="funcionario">
                      <SelectInput
                          optionText={record => `${record.cargo.nome}, ${record.nome}`}
                          optionValue="id"/>
                  </ReferenceInput>
              </SimpleFormIterator>
          </ArrayInput>
      </SimpleForm>
  </Create>
);

export const ProgramaList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="titulo" />
            <TextField source="descricao" />
            <UrlField source="uriLogo" />
            <ArrayField source="equipw" label="Equipe">
                <SingleFieldList>
                    <ChipField source="cargo.nome"/>
                </SingleFieldList>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
);

export const ProgramaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="titulo" />
            <RichTextInput source="descricao" />
            <TextInput source="uriLogo" />
            <ArrayField source="equipe" label="Equipe">
                <SingleFieldList>
                    <ChipField source="nome" optionValue={record => `${record.cargo.nome}, ${record.nome}`}/>
                </SingleFieldList>
            </ArrayField>

        </SimpleForm>
    </Edit>
)
import React from "react";
import {
    List,
    Datagrid,
    TextField,
    UrlField,
    ArrayField,
    SingleFieldList,
    ChipField,
    DateInput,
    BooleanField
} from "react-admin";
import {
    Create,
    Edit,
    Show,
    EditButton,
    SimpleForm,
    NumberInput,
    BooleanInput,
    DateField,
    SimpleShowLayout,
    NumberField,
    TextInput,
    ImageField,
    ArrayInput,
    RichTextField,
    SimpleFormIterator
} from "react-admin";
import RichTextInput from 'ra-input-rich-text';

export const ProgramaCreate = props =>(
  <Create {...props}>
      <SimpleForm>
          <TextInput source="titulo" />
          <TextInput source="descricao" />
          <TextInput label="Url da Logo do Programa" source="uriLogo" />
          <ArrayInput label="Adicionar membro a Equipe:" source="equipe">
              <SimpleFormIterator>
                  <TextInput label="Nome" source="nome" />
                  <NumberInput label="Contato" source="contato" />
                  <BooleanInput label="Status" source="status" />
                  <TextInput label="Cargo" source="cargo.nome" />
              </SimpleFormIterator>
          </ArrayInput>
      </SimpleForm>
  </Create>
);

export const ProgramaList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ImageField label="Logo do Programa" source="uriLogo" />
            <TextField source="titulo" />
            <TextField source="descricao" />
            <ArrayField source="equipe" label="Equipe">
                <SingleFieldList>
                    <ChipField source="cargo.nome"/>
                </SingleFieldList>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
);

export const ProgramaShow = props => (
    <Show {...props}>
            <SimpleShowLayout>
                <ImageField label=" " source="uriLogo" />
                <TextField source="titulo" />
                <RichTextField source="descricao" />
                <ArrayField source="equipe">
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="nome" />
                        <TextField source="contato" />
                        <BooleanField source="status" />
                        <NumberField source="cargo.id" />
                    </Datagrid>
                </ArrayField>
                <ArrayField source="videos">
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="titulo" />
                        <UrlField source="urlVideo" />
                        <DateField source="data" />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
    </Show>
)

export const ProgramaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField disable source="id"/>
            <TextInput source="titulo" />
            <RichTextInput source="descricao" />
            <TextInput label="Url da Logo do Programa" source="uriLogo" />
            <ArrayInput source="equipe">
                <SimpleFormIterator>
                    <TextInput label="Nome" source="nome" />
                    <NumberInput label="Contato" source="contato" />
                    <BooleanInput label="Status" source="status" />
                    <TextInput label="Cargo" source="cargo.nome" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="videos">
                <SimpleFormIterator>
                    <TextInput label="Titulo do Video" source="titulo"/>
                    <TextInput label="Url do Video" source="urlVideo" />
                    <DateInput label="Data de Envio" source="data"/>
                    <TextField label="Id do Programa"  disable source="programa.id" value={record => record.id}/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
)
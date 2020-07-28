import React from "react";
import { Admin, Resource } from 'react-admin';
import { ProgramaList, ProgramaEdit, ProgramaCreate } from "./Components/Programa"
import { FuncionarioList, FuncionarioCreate } from "./Components/Funcionario"
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:8080/api/');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="programa" list={ProgramaList} edit={ProgramaEdit} create={ProgramaCreate}/>
        <Resource name="funcionario" list={FuncionarioList} create={FuncionarioCreate} />
        <Resource name="cargo" />
    </Admin>
)

export default App;


import React from "react";
import { Admin, Resource, ShowGuesser } from 'react-admin';
import { ProgramaList, ProgramaEdit, ProgramaCreate, ProgramaShow } from "./Components/Programa"
import { FuncionarioList, FuncionarioCreate, FuncionarioEdit } from "./Components/Funcionario"
import { VideoCreate, VideoList } from "./Components/Video"
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:8080/api/');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="programa" show={ProgramaShow} list={ProgramaList} edit={ProgramaEdit} create={ProgramaCreate}/>
        <Resource name="funcionario" list={FuncionarioList} create={FuncionarioCreate}  edit={FuncionarioEdit}/>
        <Resource name="cargo" />
        <Resource name="video" create={VideoCreate} list={VideoList}/>
    </Admin>
)

export default App;


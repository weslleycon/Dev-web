

import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TelaCadastro from "@/components/TelaCadastro.vue";
import BarraMenu from "@/components/BarraMenu.vue";
import AtualizarUser from "@/components/AtualizarUser.vue";
import AtualizarSenha from "@/components/AtualiazarSenha.vue";


const rotas: RouteRecordRaw [] = [{
    path:'/',
    name:'BarraMenu',
    component: BarraMenu
},
{
    path:'/atualizar',
    name:'AtualizarUser',
    component:AtualizarUser
},

{
    path:'/login',
    name:'TelaCadastro',
    component:TelaCadastro
},{
    path:'/atualizarLogin',
    name:'AtualizarSenha',
    component:AtualizarSenha
},
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas

})

export default roteador;


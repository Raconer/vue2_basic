import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Main from '@/views/Main';
import Parent from '@/views/Parent';

Vue.use(VueRouter);

const routes = [
    {
        path : "/",
        redirect: {
            name: "main"
        }
    },
    {
        path : "/login",
        name : "login",
        component : Login
    },
    {
        path : "/main",
        name : "main",
        component : Main
    },
    {
        path : "/parent",
        name : "parent",
        component : Parent
    }
];

export default new VueRouter({
    mode : "history",
    routes
});
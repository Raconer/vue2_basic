import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Main from '@/views/Main';

Vue.use(VueRouter);

const routes = [
    {
        path : "/",
        redirect: {
            name: "login"
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
    }
];

export default new VueRouter({
    mode : "history",
    routes
});
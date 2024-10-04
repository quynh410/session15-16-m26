import HomeView from "@/components/HomeView.vue"
import ContactView from "@/components/ContactView.vue"
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductDetail from "@/views/ProductDetail.vue";
import ProfileDetail from "@/views/ProfileDetail.vue";
import ProductView from "@/components/ProductView.vue";
import ProductReview from "@/views/ProductReview.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import NotFound from "@/components/NotFound.vue";
import Account from "@/components/Account.vue";
import DashBoard from "@/components/DashBoard.vue";
import ListUser from "@/components/ListUser.vue";
import UserDetail from "@/components/UserDetail.vue";
// dinh nghia cac route
const routes = [
    {
        path: "/user/:id",
        name: "UserDetail",
        component: UserDetail
    },
    {
        path: "/list-user",
        name: "list-user",
        component: ListUser
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashBoard
    },
    {
        path: "/account",
        name: "account",
        component: Account
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: NotFound
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/",
        name: 'home',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    },
    {
        path: '/product-detail/:id',
        name: 'productDetail',
        component: ProductDetail
    },
    {
        path: "/profile/:id",
        name: "profileDetail",
        component: ProfileDetail
    },
    {
        path: '/product',
        name: 'product',
        component: ProductView,
        children: [
            {
                path: "detail",
                name: "product-detail",
                component: ProductDetail,
            },
            {
                path: "review",
                name: "product-review",
                component: ProductReview,
            }
        ]
    },
];
// Tao co che dinh tuyen cho ung dung
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
// day ra ben ngoai cho ung dung su dung

export default router;
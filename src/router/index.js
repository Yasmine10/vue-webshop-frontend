import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/dog",
    name: "Dog",
    component: () => import("../views/Dog"),
  },
  {
    path: "/cat",
    name: "Cat",
    component: () => import("../views/Cat"),
  },
  {
    path: "/rodent",
    name: "Rodent",
    component: () => import("../views/Rodent"),
  },
  {
    path: "/bird",
    name: "Bird",
    component: () => import("../views/Bird"),
  },
  {
    path: "/:animal/product-id=:id",
    name: "ProductDetail",
    component: () => import("../views/ProductDetail"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout"),
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

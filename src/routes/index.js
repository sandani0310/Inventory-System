import VueRouter from "vue-router";
import Home from "../components/home/Home";
import Invoice from "../components/invoice/Invoice";
import Product from "../components/product/Product";
import Report from "../components/report/Report";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: Invoice,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

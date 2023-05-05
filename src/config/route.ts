//
import Team from '../pages/TeamPage.vue';
import Index from "../pages/Index.vue";
import User from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User },
    { path: '/search', component: SearchPage },
]

export default routes;
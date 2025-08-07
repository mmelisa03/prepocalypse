import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CheckListView from '../views/CheckListView.vue'
import MyBagView from '../views/MyBagView.vue'
import AddItemView from '../views/AddItemView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/checklist', name: 'Checklist', component: CheckListView },
  { path: '/my-bag', name: 'MyBag', component: MyBagView },
  { path: '/add-item', name: 'AddItem', component: AddItemView },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

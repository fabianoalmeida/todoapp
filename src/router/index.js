import Vue from 'vue';
import Router from 'vue-router';

import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

import Todo from "../components/Todo";
import Tasks from "../components/Tasks";
import NotesModal from "../components/NotesModal";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "todo",
      component: Todo,
      children: [
        {
          path: "list/:id",
          name: "tasks",
          components: {
            tasks: Tasks
          },
          children: [
            {
              path: "task/:taskId",
              name: "notes",
              components: {
                notes: NotesModal
              },
            }
          ]
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    }
  ]
});
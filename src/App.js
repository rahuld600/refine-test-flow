import { Refine } from "@refinedev/core";
import { notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "./pages/posts";
import {
  UserTypesList,
  UserTypesCreate,
  UserTypesEdit,
  UserTypesShow,
} from "./pages/userTypes";

const API_URL = "http://localhost:4000";

const App = () => {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider(API_URL)}
        routerProvider={routerProvider}
        resources={[
          {
            name: "users",
            list: "/users",
            create: "/users/create",
            edit: "/users/edit/:id",
            show: "/users/show/:id",
          },
          {
            name: "userTypes",
            list: "/userTypes",
            create: "/userTypes/create",
            edit: "/userTypes/edit/:id",
            show: "/userTypes/show/:id",
          },
        ]}
        notificationProvider={notificationProvider}
        options={{
          warnWhenUnsavedChanges: true,
          syncWithLocation: true,
        }}
      >
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<NavigateToResource resource="users" />} />

            <Route path="users">
              <Route index element={<PostList />} />
              <Route path="show/:id" element={<PostShow />} />
              <Route path="create" element={<PostCreate />} />
              <Route path="edit/:id" element={<PostEdit />} />
            </Route>

            <Route
              index
              element={<NavigateToResource resource="userTypes" />}
            />

            <Route path="userTypes">
              <Route index element={<UserTypesList />} />
              <Route path="show/:id" element={<UserTypesShow />} />
              <Route path="create" element={<UserTypesCreate />} />
              <Route path="edit/:id" element={<UserTypesEdit />} />
            </Route>

            <Route path="*" element={<ErrorComponent />} />
          </Route>
        </Routes>
        <UnsavedChangesNotifier />
      </Refine>
    </BrowserRouter>
  );
};

export default App;

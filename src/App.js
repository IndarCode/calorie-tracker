import React, {Suspense} from "react";
import * as ReactDOM from "react-dom/client";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
  } from "react-router-dom";

import AuthLayout from "./layouts/authLayout";
import PublicLayout from "./layouts/publicLayout";
import LoginLayout from "./layouts/loginLayout";
import RequireAuth from "./features/app/requireAuth";
import Tracker from "./features/tracker/tracker";
import AddFoodItem from "./features/tracker/add-food-item";

// Routes components
const Home = React.lazy(() => import("./features/home/home"));
const Login = React.lazy(() => import("./features/app/login"));
const Signup = React.lazy(() => import("./features/app/signUp"));
const Dashboard = React.lazy(() => import("./features/dashboard/dashboard"));
const NotFoundPage = React.lazy(() => import("./routes/notFound"));


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<PublicLayout />}>
          <Route index path="/" element={ 
              <Suspense fallback={<div>Loading...</div>}>
                <Tracker />
              </Suspense>
            } 
          />
           <Route path="/add-food-item" element={ 
            <Suspense fallback={<div>Loading...</div>}>
              <AddFoodItem />
            </Suspense>
          } />
           <Route path="/" element={ 
            <Suspense fallback={<div>Loading...</div>}>
          <Home />
          </Suspense>
          } />
        </Route>
        <Route element={<LoginLayout />} errorElement={<div>Error..</div>}>
            <Route path="/login" element={
            <RequireAuth>
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
                </Suspense>
            </RequireAuth>
            } 
            />
            <Route path="/signup" element={
              <Suspense fallback={<div>Loading...</div>}>
                <Signup />
                </Suspense>
            } />
        </Route>
        
        <Route element={<AuthLayout />} errorElement={<div>Error Auth</div>}>
            <Route
                path="/dashboard"
                element={
                <RequireAuth>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Dashboard />
                  </Suspense>
                </RequireAuth>
                }
            />
        </Route>
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ),
    { basename: '/calorie-tracker' }
  );

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
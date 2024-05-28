import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/users/homePage/indexHome";
import MasterLayout from "../pages/users/theme/masterLayout";
import Profile from "../pages/users/profile/indexProfile";


const renderUserRouter = () => {
    const userRouters = [
        {
            path: '/',
            component: <HomePage />,
        },{
            path: '/profile',
            component: <Profile />,
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}

const CreateBrowserRouter = () => {
    return renderUserRouter();

};

export default CreateBrowserRouter;
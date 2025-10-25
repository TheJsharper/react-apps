import { Outlet, Route, Routes } from "react-router"
import { AboutPage } from "./pages/about/AboutPage"
import { ProfilePage } from "./pages/profile/ProfilePage"
import { LoginPage } from "./pages/auth/LoginPage"
import { UserContextProvider } from "./context/UserContext"
import { PrivateRoute } from "./router/PrivateRoute"

export const ProfessionalApp = () => {
    return (
        <UserContextProvider>
            <div className="bg-gradient">

                <Outlet></Outlet>
                <Routes>
                    <Route path="/" element={<AboutPage />} index />
                    <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<AboutPage />} />

                </Routes>
            </div>
        </UserContextProvider>
    )
}

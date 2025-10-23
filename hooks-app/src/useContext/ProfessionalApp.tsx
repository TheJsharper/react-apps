import { Outlet, Route, Routes } from "react-router"
import { AboutPage } from "./pages/about/AboutPage"
import { ProfilePage } from "./pages/profile/ProfilePage"
import { LoginPage } from "./pages/auth/LoginPage"

export const ProfessionalApp = () => {
    return (
        <div className="bg-gradient">
            <Outlet></Outlet>
            <Routes>
                <Route path="/" element={<AboutPage />} index  />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<AboutPage />}  />

            </Routes>
        </div>
    )
}

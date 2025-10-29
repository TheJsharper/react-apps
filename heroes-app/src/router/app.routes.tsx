import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroPages } from "@/heroes/pages/hero/HeroPages";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/SearchPage";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomePage/>
        },
        {
            path:'/heroes/1',
            element: <HeroPages/>
        },
        {
            path:'/search',
            element: <SearchPage/>
        },
        
        {
            path:'/admin',
            element: <AdminPage/>
        },

    ]
)
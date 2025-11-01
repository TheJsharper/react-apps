import { AdminLayout } from "@/admin/layout/AdminLayout";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layout/HeroesLayout";
import HeroPages from "@/heroes/pages/hero/HeroPages";
import { HomePage } from "@/heroes/pages/home/HomePage";
//import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module => ({ default: module.SearchPage })))

export const appRouter = createBrowserRouter(
    [

        {
            path: '/',
            element: <HeroesLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: 'heroes/:idSlug',
                    element: <HeroPages />
                },
                {
                    path: 'search',
                    element: <SearchPage />
                },
                {
                    path: '*',
                    element: <Navigate to="/" />
                }
            ]
        },


        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    index: true,
                    element: <AdminPage />
                }
            ]
        },

    ]
)
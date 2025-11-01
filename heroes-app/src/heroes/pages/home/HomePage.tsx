"use client"

import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs"
import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron"
import { CustomPagination } from "@/components/ui/custom/CustomPagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getHeroesByPage as getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"



export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');


  const { data } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5
  })

  /*useEffect(()=>{
    getHeroesByPage().then( heroes => {
      console.log('component', heroes)
    })
  },[])*/
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Superhero Database" description="Discover and manage your favorite superheroes" />

        <CustomBreadcrumbs currentPage="Super heroes" breadcrumbs={[]} />

        {/* Stats Dashboard */}
        <HeroStats />


        {/* Search and Add Hero Section */}

        {/* Results Count */}


        {/* Hero Cards Grid */}


        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab('favorites')}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>Favoritos!!!</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            <h1>Héroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los Villanos */}
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>
        <CustomPagination totalPages={10} />


      </>
    </>
  )
}

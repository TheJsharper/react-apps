import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs"

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Searching super heroes" description="Discover and manage your favorite superheroes" />
      <CustomBreadcrumbs currentPage="Seaching heroes" breadcrumbs={[ ]} />
      <HeroStats />
      <SearchControls />

    </>
  )
}

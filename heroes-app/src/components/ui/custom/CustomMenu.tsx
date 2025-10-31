import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Link, useLocation } from "react-router"

export const CustomMenu = () => {
    const { pathname } = useLocation();
    const isActive = (path: string) => {
        return pathname === path;
    }
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Home navigation */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/') && "bg-slate-200 round-md ", "p-2")}>
                        <Link to="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Search navigation */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/search') && "bg-slate-200 round-md", "p-2)")}>
                        <Link to="/search">Search super heroe</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

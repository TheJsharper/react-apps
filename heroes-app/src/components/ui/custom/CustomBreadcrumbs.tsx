import { Link } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../breadcrumb"
import { SlashIcon } from "lucide-react";
interface Breadcrumb {
    label: string;
    to: string;
}


interface Props {
    currentPage: string;
    breadcrumbs: Breadcrumb[];
}


export const CustomBreadcrumbs = ({ currentPage, breadcrumbs }: Props) => {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/" >Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {
                    breadcrumbs.map((crumb) => (
                        <div className="flex items-center">
                            <BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                                <BreadcrumbLink asChild>
                                    <Link to={crumb.to} >{crumb.label}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>
                    ))
                }
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-black">{currentPage}</BreadcrumbPage>
                </BreadcrumbItem> 
            </BreadcrumbList>
        </Breadcrumb>
    )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropsWithChildren } from "react";
import type React from "react";

interface Props extends PropsWithChildren {
    title: string;
    icon: React.ReactNode;
}

export const HeroStatsCard = ({ title, icon, children }: Props) => {
    return (
        <Card>
            <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>

            <CardContent> {children}

            </CardContent>

        </Card>
    )
}

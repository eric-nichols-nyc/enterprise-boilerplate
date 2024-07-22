import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Car } from "lucide-react";
import Image from "next/image";

type Item = {
    name: string
    description: string
}

type TechCardProps = {
    item: Item
}

export const TechCard = ({ item }: TechCardProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-col justify-center items-center">
                <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
                <p>{item.description}</p>
            </CardContent>
        </Card>
    )
}

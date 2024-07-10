import { Card, CardContent, CardHeader } from "./ui/card";


const StatsCard = ({
    title,
    value,
    unit,
    note
}: {
    title: string,
    value: string,
    unit: string,
    note: string
}) => {

    return (
        <Card className="w-[350px]">
            <CardContent>
                <div className="flex flex-row justify-between pt-3">
                    <h6 className="text-sm">{title}</h6>
                    <div className="text-sm">{unit}</div>
                </div>
                <div className="text-2xl font-bold mt-3">{unit === "$"? "$": ""}{value}</div>
                <p className="text-xs text-muted-foreground">{note}</p>
            </CardContent>
        </Card >
    )
}

export default StatsCard;
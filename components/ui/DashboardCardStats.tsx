import StatsCard from "../StatsCard"


const DashboardCardStats = () => {

    return (
        <div className="flex flex-row gap-3">
            <StatsCard
                title="Total Revenue"
                value="$54,234.99"
                unit="$"
                note="+12.2% over last month" />
            <StatsCard
                title="Subscriptions"
                value="365"
                unit="#"
                note="-32.% form last month" />
            <StatsCard
                title="Sales"
                value="$32,999.23"
                unit="$"
                note="+20% increase" />
            <StatsCard
                title="Daily Trade Count"
                value="788"
                unit="#"
                note="" />
        </div>
    )
}

export default DashboardCardStats
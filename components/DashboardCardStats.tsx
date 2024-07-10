import StatsCard from "./StatsCard"
import { faker } from "@faker-js/faker"

const totalReturns = faker.finance.amount();
const totalTrades = faker.finance.amount();
const lastPurchase = faker.finance.amount();
const wallet = faker.finance.bic();

const DashboardCardStats = () => {

    return (
        <div className="flex flex-row gap-3">
            <StatsCard
                title="Total Returns"
                value={totalReturns}
                unit="$"
                note="+12.2% over last month" />
            <StatsCard
                title="Total Trades"
                value={totalTrades}
                unit="#"
                note="-32.% form last month" />
            <StatsCard
                title="Last Purchase"
                value={lastPurchase}
                unit="$"
                note="+20% increase" />
            <StatsCard
                title="Wallet Number"
                value={wallet}
                unit="#"
                note="" />
        </div>
    )
}

export default DashboardCardStats
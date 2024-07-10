import StatsCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import DashboardCardStats from "@/components/DashboardCardStats";
import Image from "next/image";
import DashboardBarChart from "@/components/DashboardBarChart";
import DashboardLastTransactions from "@/components/DashboardLastTransactions";
import TransactionTable from "@/components/transaction-table/TransactionTable";

export default function Home() {
  return (
    <div>
      <header className="dark-gradient-right flex justify-between bg-secondary px-4 items-center">
        <div className="font-medium text-2xl">On-Demand Trading</div>
        <Button>Login</Button>
      </header>
      <main className="flex min-h-screen flex-col px-12 py-16 gap-5">
        <div className="text-4xl">Dashboard</div>

        <DashboardCardStats />
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-4">
            <DashboardBarChart />
          </div>
          <div className="col-span-2">
            <TransactionTable />
          </div>
        </div>
      </main>
    </div>
  );
}

import StatsCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import DashboardCardStats from "@/components/ui/DashboardCardStats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="dark-gradient-right flex justify-between bg-secondary px-4 items-center">
        <div className="font-medium text-2xl">On-Demand Trading</div>
        <Button>Login</Button>
      </header>
      <main className="flex min-h-screen flex-col px-12 pt-16 gap-5">
        <div className="text-4xl">Dashboard</div>

        <DashboardCardStats />
      </main>
    </div>
  );
}

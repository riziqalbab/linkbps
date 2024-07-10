import { MyCard } from "@/components/Me/mycard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function Home() {
  return (
    <main className="p-5 flex gap-3 flex-wrap items-center justify-center">
      <MyCard />
      <MyCard />
      <MyCard />
    </main>
  );
}

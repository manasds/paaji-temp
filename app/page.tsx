import ModeToggle from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-display">
    <ModeToggle />
    <p className="font-sans">agents that do the work , approvals that keep you safe </p>
    </div>
  );
}

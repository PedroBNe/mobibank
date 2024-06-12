import Link from "next/link";
import SidebarButton from "@/components/common/dashboard/Sidebar/Sidebar-button";
import { HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <Link href="/dashboard">
      <SidebarButton
        variant="secondary"
        className="w-full h-full text-xl"
        icon={HomeIcon}
      >
        Dashboard
      </SidebarButton>
    </Link>
  );
}

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import SidebarButton from "./Sidebar-button";
import { SidebarItems } from "@/types/sidebarItems";
import Link from "next/link";
import PigBank from "./PigBank";
import { Settings } from "lucide-react";

interface SidebarProps {
  sideBarItems: SidebarItems;
}

export default function SidebarDescktop(props: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-[270px] max-w-xs h-full min-h-screen bg-[#1A1A1A] text-white">
      <div className="h-full px-3 py-4">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="mt-2">
          <div className="p-2 font-medium">
            <p>Menu</p>
          </div>
          <div className="flex flex-col gap-1 w-full">
            {props.sideBarItems.links.map((link, index) => (
              <Link href={link.href} key={index}>
                <SidebarButton
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  icon={link.icon}
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
          </div>
          <div className="p-2 font-medium">
            <p>Cofrinhos</p>
          </div>
          <div>
            <PigBank />
          </div>
          <div className="mt-4">
            <Link href="/dashboard/configuracao">
              <SidebarButton
                variant={
                  pathname === "/dashboard/configuracao" ? "secondary" : "ghost"
                }
                icon={Settings}
              >
                Configurações
              </SidebarButton>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

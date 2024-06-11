"use client";

import {
  HandCoins,
  Home,
  QrCode,
  Radio,
  Smartphone,
  Wallet,
} from "lucide-react";
import SidebarDescktop from "./SidebarDescktop";
import { SidebarItems } from "@/types/sidebarItems";

const sidebarItems: SidebarItems = {
  links: [
    { label: "Overview", href: "/dashboard", icon: Home },
    { label: "Pix", href: "/dashboard/pix", icon: Radio },
    { label: "Pagamentos", href: "/dashboard/pagamentos", icon: QrCode },
    {
      label: "Recarga de Celular",
      href: "/dashboard/recarga",
      icon: Smartphone,
    },
    { label: "Transferir", href: "/dashboard/transferir", icon: HandCoins },
    { label: "Depositar", href: "/dashboard/depositar", icon: Wallet },
  ],
};

function Sidebar() {
  return <SidebarDescktop sideBarItems={sidebarItems} />;
}

export default Sidebar;

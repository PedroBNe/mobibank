import { Plus } from "lucide-react";
import SidebarButton from "./Sidebar-button";

function PigBank() {
  return (
    <div className="flex flex-col ml-4 gap-4 bg-[#333333] text-white p-5 rounded-xl">
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-black"></div>Casamento
        </li>
        <li className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-600"></div>acbook Pro M2
        </li>
        <li className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-600"></div>Viagem
        </li>
        <li className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-600"></div>Moto nova
        </li>
      </ul>
      <SidebarButton variant={"secondary"} icon={Plus}>
        Adicionar
      </SidebarButton>
    </div>
  );
}

export default PigBank;

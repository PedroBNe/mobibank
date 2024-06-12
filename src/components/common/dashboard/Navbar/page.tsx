import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

function Navbar() {
  return (
    <nav className="flex justify-around bg-white w-full min-w-screen p-2">
      <div>
        <Input placeholder="Pesquisar" />
      </div>
      <div>
        <Avatar />
      </div>
    </nav>
  );
}

export default Navbar;

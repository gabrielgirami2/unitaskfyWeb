import Link from "next/link";

export default function Navbar(){
    return(
    <nav className="flex bg-pink-600 w-full justify-between items-center py-4">
        <h1 className="text-4xl ml-8 font-bold">Unitaskfy</h1>
        <div className="w-14 rounded-full overflow-hidden mr-8">
          <img  src="https://i.pravatar.cc/300" alt="avatar do usuário" />
        </div>
      </nav>
    )
}
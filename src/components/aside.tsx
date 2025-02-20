'use client'

import SearchButton from "@/components/SearchButton";
import { IconMdiHome } from "@/ui/iconHome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Activity, Compass, Home, HomeIcon, LucideHome, Menu, MessageCircle, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDot, MessageSquareMore, MoreHorizontal, Search, Send, Settings, Tv, Tv2, TvIcon, Upload, User, UserPlus, Users, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
    const pathname = usePathname()



    return (
        <div>
            <aside className="fixed z-50 flex-col justify-center">
                {/* logo */}
                <div>
                <Image alt="logo" src={'/images/JuanTok.png'} width={180} height={200} quality={100} />
                </div>

                {/* Search Button*/}
                <div className="ml-4 mt-3 ">


                <SearchButton></SearchButton>
                </div>

                {/* For You */}
                <div className="ml-4 mt-3  " >
                <Link href="/foryou" className={pathname === '/foryou' ? 'ativo' : ''}>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/foryou" ? "text-[#FF3B53]" : "text-white"} `}>
                <IconMdiHome fontSize={33} />
                <span>Para Você</span>
            </button>
        </Link>
                </div>

                {/* Explorar */}

                <div className="ml-4 mt-1  " >
                <Link href="/explore" >    
                <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/explore" ? "text-[#FF3B53]" : "text-white"} `}>
                    <Compass size={34} className="p-1" fontSize={33} />
                    <span>Explorar</span>
                </button>
                </Link>
                </div>

       { /* Seguindos */}

                <div className="ml-4 mt-1">
                <Link href="/seguindo" legacyBehavior>
                <a>
                <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/seguindo" ? "text-[#FF3B53]" : "text-white"} `}>
                <UserPlus size={34} className="p-1" fontSize={33} />
                <span>Seguindo</span>
                </button>
                </a>
                </Link>
                </div>

                {/* Amigos */}

                <div className="ml-4 mt-1">
    <Link href="/amigos" legacyBehavior>
        <a>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/amigos" ? "text-[#FF3B53]" : "text-white"} `}>
                <Users size={34} className="p-1" fontSize={33} />
                <span>Amigos</span>
            </button>
        </a>
    </Link>
</div>

{/* carregar upload */}


<div className="ml-4 mt-1">
    <Link href="/carregar" legacyBehavior>
        <a>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/carregar" ? "text-[#FF3B53]" : "text-white"} `}>
                <Upload size={34} className="p-1" fontSize={33} />
                <span>Carregar</span>
            </button>
        </a>
    </Link>
</div>

{/* atividade */}


<div className="ml-4 mt-1">
    <Link href="/atividade" legacyBehavior>
        <a>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/atividade" ? "text-[#FF3B53]" : "text-white"} `}>
                <MessageSquareMore size={34} className="p-1" fontSize={33} />
                <span>Atividade</span>
            </button>
        </a>
    </Link>
</div>

{/* mensagems */}


<div className="ml-4 mt-1">
    <Link href="/mensagens" legacyBehavior>
        <a>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/mensagens" ? "text-[#FF3B53]" : "text-white"} `}>
                <Send size={34} className="p-1" fontSize={33} />
                <span>Mensagens</span>
            </button>
        </a>
    </Link>
</div>

{/* live */}


<div className="ml-4 mt-1">
    <Link href="/live" legacyBehavior>
        <a>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/live" ? "text-[#FF3B53]" : "text-white"} `}>
                <TvIcon   size={34} className="p-1" fontSize={33} />
                <span>Live</span>
            </button>
        </a>
    </Link>
</div>

{/* user */}


<div className="ml-4 mt-1">
    <Link href="/perfil" legacyBehavior>
        <a>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/perfil" ? "text-[#FF3B53]" : "text-white"} `}>
                <User size={34} className="p-1" fontSize={33} />
                <span>Perfil</span>
            </button>
        </a>
    </Link>
</div>

{/* mais */}

<div className="ml-4 mt-1">
    <Link href="/configuracoes" legacyBehavior>
        <a>
            <button className={`hover:bg-[#262626] p-1 rounded-md pr-[100px]  font-bold transition duration-300 flex items-center gap-2 ${pathname === "/configuracoes" ? "text-[#FF3B53]" : "text-white"} `}>
                <MoreHorizontal size={34} className="p-1" fontSize={33} />
                <span>mais</span>
            </button>
        </a>
    </Link>
</div>



                
            </aside>
        </div>
    );
}
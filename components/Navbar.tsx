"use client"
import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useEffect, useState } from "react";


const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  // useEffect ne s'exécute que sur le client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Tant que le composant n'est pas monté, on ne rend rien ou un placeholder
  // Cela évite que le serveur rende quelque chose de différent du client
  if (!isMounted) {
    return (
      <nav className="navbar">
        <div className="flex items-center gap-x-4">
           {/* Un simple cercle gris pour simuler le bouton pendant le chargement */}
           <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar">
        <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems/>
            <SignedOut>
              <SignInButton>
                  <button className="btn-signin">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar
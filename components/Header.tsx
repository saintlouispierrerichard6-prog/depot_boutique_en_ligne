"use client";

import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function AfficherHeader() {

    const pathname = usePathname();

    const isActive = (path: string) =>
        pathname === path ? "active-link" : "";

    return (
        <header className="containerHeader">

            <div id="containerHeader2">
                <div id="premierbarmenu">
                    <Image src="/images/logo.png" alt="Logo de Elite Store" height={100} width={100} />
                    <h1>Elite Store</h1>
                </div>

                <div id="containerreseauxsociaux">
                    <ul>
                        <li><FaFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaYoutube /></li>
                        <li><FaTwitter /></li>
                        <li><FaTiktok /></li>
                    </ul>
                </div>
            </div>

            <nav className="barmenu">
                <ul>
                    <li className={isActive("/")}>
                        <Link href="/">Accueil</Link>
                    </li>

                    <li className={isActive("/produits")}>
                        <Link href="/produits">Produits</Link>
                    </li>

                    <li className={isActive("/panier")}>
                        <Link href="/panier">Panier</Link>
                    </li>

                    <li className={isActive("/actualites")}>
                        <Link href="/actualites">Actualités</Link>
                    </li>

                    <li className={isActive("/contacts")}>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

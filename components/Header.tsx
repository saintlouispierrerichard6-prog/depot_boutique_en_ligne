"use client";

import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";
import { useLang } from "@/app/context/LangContext";

export default function AfficherHeader() {

    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang } = useLang();

    const isActive = (path: string) =>
        pathname === path ? "active-link" : "";

    const text = {
        fr: {
            accueil: "Accueil",
            produits: "Produits",
            panier: "Panier",
            actualites: "Actualités",
            contact: "Contacts",
        },
        en: {
            accueil: "Home",
            produits: "Products",
            panier: "Cart",
            actualites: "News",
            contact: "Contact",
        }
    };

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

                {/* Boutons Theme + Lang */}
                <div id="headerButtons">
                    <button onClick={toggleTheme}>
                        {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
                    </button>

                    <button onClick={toggleLang}>
                        {lang === "fr" ? "🇫🇷 Français" : "🇬🇧 English"}
                    </button>
                </div>
            </div>

            <nav className="barmenu">
                <ul>
                    <li className={isActive("/")}>
                        <Link href="/">{text[lang].accueil}</Link>
                    </li>

                    <li className={isActive("/produits")}>
                        <Link href="/produits">{text[lang].produits}</Link>
                    </li>

                    <li className={isActive("/panier")}>
                        <Link href="/panier">{text[lang].panier}</Link>
                    </li>

                    <li className={isActive("/actualites")}>
                        <Link href="/actualites">{text[lang].actualites}</Link>
                    </li>

                    <li className={isActive("/contact")}>
                        <Link href="/contact">{text[lang].contact}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

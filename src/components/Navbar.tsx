"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Updated link text to uppercase to match design
    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "TEAM", href: "/team" },
        { name: "DOMAINS", href: "/domains" },
        { name: "EVENTS", href: "/events" },
        { name: "GALLERY", href: "/gallery" },
    ];

    return (
        <div className="w-full z-50">
            {/* Top Bar: White with Logo */}
            <div className="bg-white px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link href="/" className="relative h-16 w-64">
                        <Image
                            src="/logo.webp"
                            alt="SWE Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>
                </div>
            </div>

            {/* Bottom Bar: Purple with Nav Links */}
            <nav className="bg-[#5f5a74] relative shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end md:justify-center h-16">

                        {/* Desktop Menu - Centered/Right */}
                        <div className="hidden md:block">
                            <div className="flex space-x-12">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-white font-bold tracking-widest hover:text-purple-200 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-white/80 p-2"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#4d4860] border-t border-white/10 absolute w-full z-50 shadow-xl">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white block px-3 py-2 rounded-md text-base font-bold tracking-wider hover:bg-white/10 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

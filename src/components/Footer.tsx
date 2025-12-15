import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#4d4860] text-white pt-12 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-6">

                    {/* Logo/Title */}
                    <div className="text-center">
                        <h3 className="font-poppins font-bold text-xl tracking-wider">
                            SWE SRM KTR
                        </h3>
                        <p className="text-white/60 text-sm mt-2">
                            Empowering Women, Engineering the Future
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/80">
                        <a href="mailto:swe@srmist.edu.in" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={16} />
                            <span>Contact via Email</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>+91 123 456 7890</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>

                    {/* Copyright */}
                    <div className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Society of Women Engineers - SRM KTR Chapter. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

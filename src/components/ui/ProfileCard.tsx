"use client";

import { Linkedin } from "lucide-react";
import Card from "./Card";
import Link from "next/link";

interface ProfileCardProps {
    name: string;
    role: string;
    bio?: string;
    imageUrl?: string; // In real app this would be used, but we'll use a placeholder for now
    linkedinUrl?: string;
}

export default function ProfileCard({ name, role, bio, linkedinUrl }: ProfileCardProps) {
    return (
        <Card className="flex flex-col items-center text-center p-6 h-full group">
            {/* Circular Image Placeholder with 3D effect */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-300 to-indigo-300 mb-6 relative overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] border-4 border-white/10">
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/50">
                    {name.charAt(0)}
                </div>
            </div>

            <h3 className="text-xl font-bold font-poppins text-white mb-1 group-hover:text-purple-200 transition-colors">
                {name}
            </h3>

            <p className="text-purple-300 font-medium text-sm mb-4 tracking-wide uppercase">
                {role}
            </p>

            {bio && (
                <p className="text-white/70 text-sm mb-6 font-light leading-relaxed flex-grow">
                    {bio}
                </p>
            )}

            {linkedinUrl && (
                <Link
                    href={linkedinUrl}
                    target="_blank"
                    className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-md hover:bg-[#005582] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                    aria-label={`${name}'s LinkedIn`}
                >
                    <Linkedin size={20} className="fill-current" />
                    <span className="text-sm font-medium">LinkedIn</span>
                </Link>
            )}
        </Card>
    );
}

"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Code, Palette, Handshake, Briefcase, Users } from "lucide-react";

export default function Domains() {
    const domains = [
        {
            title: "Technical & R&D",
            icon: <Code className="w-8 h-8 text-purple-300" />,
            tagline: "Innovate. Build. Lead.",
            description: "A domain focused on cutting-edge technologies, research initiatives, and hands-on engineering experiences that shape future innovators. From technical bootcamps to high-impact research collaborations, we turn curiosity into capability."
        },
        {
            title: "Creatives & Communications",
            icon: <Palette className="w-8 h-8 text-pink-300" />,
            tagline: "Creating Identity. Crafting Impact.",
            description: "From branding to storytelling, this domain designs stunning creatives. Through design excellence and strategic communication, we ensure every initiative is seen, heard, and remembered."
        },
        {
            title: "Community Outreach",
            icon: <Handshake className="w-8 h-8 text-red-300" />,
            tagline: "Empower. Educate. Elevate.",
            description: "The heart of SWE’s social mission, leading empowerment drives, STEM awareness programs, and community initiatives that create meaningful and lasting change."
        },
        {
            title: "Corporate Affairs",
            icon: <Briefcase className="w-8 h-8 text-blue-300" />,
            tagline: "Connect. Collaborate. Grow.",
            description: "Forging industry partnerships, hosting professional engagements, and unlocking mentorship, internship, and career pathways."
        },
        {
            title: "HR & Member Welfare",
            icon: <Users className="w-8 h-8 text-green-300" />,
            tagline: "Support. Strengthen. Shine.",
            description: "Nurturing an inclusive, supportive, and growth-focused community through onboarding, engagement, and welfare initiatives."
        }
    ];

    return (
        <div className="pt-20"> {/* Add padding top for sticky navbar */}
            <Section
                title="Our Domains"
                subtitle="Explore the pillars that drive our mission forward. Each domain plays a vital role in empowering women in engineering."
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain, index) => (
                        <Card key={index} className="flex flex-col h-full hover:shadow-2xl hover:shadow-purple-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    {domain.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-poppins">{domain.title}</h3>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-r from-purple-400/50 to-transparent rounded-full mb-4" />
                            <p className="text-purple-200 font-medium italic mb-4">{domain.tagline}</p>
                            <p className="text-white/80 leading-relaxed font-light flex-grow">
                                {domain.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}

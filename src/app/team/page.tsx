"use client";

import Section from "@/components/ui/Section";
import ProfileCard from "@/components/ui/ProfileCard";

export default function Team() {
    const coreTeam = [
        { name: "Student Name", role: "President", bio: "Leading with vision and purpose." },
        { name: "Student Name", role: "Vice President", bio: "Driving operational excellence." },
        { name: "Student Name", role: "Secretary", bio: "Ensuring seamless coordination." },
        { name: "Student Name", role: "Treasurer", bio: "Managing resources effectively." },
    ];

    const boardDomains = [
        {
            domain: "Technical & R&D",
            members: [
                { name: "Student Name", role: "Director" },
                { name: "Student Name", role: "Associate Director" }
            ]
        },
        {
            domain: "Creatives & Communications",
            members: [
                { name: "Student Name", role: "Director" },
                { name: "Student Name", role: "Associate Director" }
            ]
        },
        {
            domain: "Community Outreach",
            members: [
                { name: "Student Name", role: "Director" },
                { name: "Student Name", role: "Associate Director" }
            ]
        },
        {
            domain: "Corporate Affairs",
            members: [
                { name: "Student Name", role: "Director" },
                { name: "Student Name", role: "Associate Director" }
            ]
        },
        {
            domain: "HR & Member Welfare",
            members: [
                { name: "Student Name", role: "Director" },
                { name: "Student Name", role: "Associate Director" }
            ]
        },
    ];

    return (
        <div className="pt-20">
            {/* Header */}
            <Section title="The Minds Behind the Mission" subtitle="Meet the dedicated team working to empower women in engineering.">
                <div className="space-y-20">

                    {/* Faculty Section */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white/80 mb-8 border-b border-white/10 pb-2 inline-block">Faculty Advisors</h3>
                        <div className="flex justify-center">
                            <div className="max-w-xs w-full">
                                <ProfileCard name="Faculty Name" role="Faculty Advisor" bio="Guiding the chapter with years of experience." />
                            </div>
                        </div>
                    </div>

                    {/* Founders Section */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white/80 mb-8 border-b border-white/10 pb-2 inline-block">Founder & Co-Founders</h3>
                        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            <ProfileCard name="Founder Name" role="Founder" bio="Established the vision for SWE SRM KTR." />
                            <ProfileCard name="Co-Founder Name" role="Co-Founder" bio="Pioneering the mission alongside the founder." />
                        </div>
                    </div>

                    {/* Core Team */}
                    <div>
                        <h3 className="text-2xl font-bold text-white/80 mb-8 text-center border-b border-white/10 pb-2 inline-block relative left-1/2 -translate-x-1/2">Core Team</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreTeam.map((member, idx) => (
                                <ProfileCard key={idx} {...member} linkedinUrl="#" />
                            ))}
                        </div>
                    </div>

                    {/* Board of Directors */}
                    <div>
                        <h3 className="text-2xl font-bold text-white/80 mb-12 text-center border-b border-white/10 pb-2 inline-block relative left-1/2 -translate-x-1/2">Board of Directors</h3>
                        <div className="space-y-12">
                            {boardDomains.map((group, idx) => (
                                <div key={idx} className="bg-white/5 rounded-2xl p-8 border border-white/5">
                                    <h4 className="text-xl font-semibold text-purple-200 mb-6 text-center">{group.domain}</h4>
                                    <div className="grid sm:grid-cols-2 justify-center gap-6 max-w-3xl mx-auto">
                                        {group.members.map((member, mIdx) => (
                                            <ProfileCard key={mIdx} {...member} linkedinUrl="#" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}

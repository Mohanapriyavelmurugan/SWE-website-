"use client";

import Section from "@/components/ui/Section";
import EventCard from "@/components/ui/EventCard";

export default function Events() {
    const upcomingEvents = []; // Empty array for now

    const pastEvents = [
        {
            title: "Community Outreach Program 2025",
            date: "Jan 10, 2025",
            description: "A flagship initiative focused on empowering underprivileged communities through STEM education and awareness drives.",
            location: "Chengalpattu District",
            speakers: ["TBA"]
        }
    ];

    return (
        <div className="pt-20">
            <Section
                title="Empowering Women, One Event at a Time"
                subtitle="Stay updated with our latest workshops, summits, and outreach programs."
            >
                {/* Upcoming Events */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-400 pl-4">Upcoming Events</h3>

                    {upcomingEvents.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-8">
                            {upcomingEvents.map((event, idx) => (
                                <EventCard key={idx} {...event} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white/5 rounded-xl p-12 text-center border border-white/10 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold text-white/90 mb-2">Coming Soon!</h4>
                            <p className="text-white/60 text-lg">
                                We are crafting exciting events for you. Stay tuned for updates!
                            </p>
                        </div>
                    )}
                </div>

                {/* Past Events */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-white/30 pl-4">Past Events</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {pastEvents.map((event, idx) => (
                            <EventCard key={idx} {...event} />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}

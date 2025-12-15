"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { useState } from "react";

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Outreach Programs", "Celebrations"];

    const galleryItems = [
        { title: "Community Outreach 2025", category: "Outreach Programs", date: "Jan 2025", color: "from-green-400 to-emerald-400" },
        { title: "Inauguration Program", category: "Celebrations", date: "Jan 2025", color: "from-purple-400 to-pink-400" },
    ];

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="pt-20">
            <Section title="Snapshots & Stories" subtitle="Milestones Captured. Stories of Growth.">

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? "bg-white text-[#5f5a74] shadow-lg scale-105"
                                : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, idx) => (
                        <Card key={idx} className="group relative overflow-hidden h-64 border-0 p-0 hover:shadow-2xl hover:shadow-purple-500/20">
                            {/* Placeholder Image Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-110 transition-transform duration-500`} />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    {item.category} • {item.date}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center text-white/50 py-12 italic">
                        No photos available in this category yet.
                    </div>
                )}

            </Section>
        </div>
    );
}

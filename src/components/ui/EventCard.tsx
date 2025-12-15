"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import Card from "./Card";
import Image from "next/image";
import { useState } from "react";

interface EventCardProps {
    title: string;
    description: string;
    date: string;
    time?: string;
    location?: string;
    speakers?: string[];
    images?: string[]; // Array of image URLs for carousel
}

export default function EventCard({ title, description, date, time, location, speakers, images }: EventCardProps) {
    const [currentImage, setCurrentImage] = useState(0);

    // Mock image for placeholder if none provided
    const displayImages = images && images.length > 0 ? images : ["/file.svg"]; // Using Next.js default svg as placeholder if needed or just a colored box

    return (
        <Card className="flex flex-col h-full hover:shadow-2xl hover:shadow-purple-500/20 group">
            {/* Carousel Placeholder */}
            <div className="relative h-48 -mx-6 -mt-6 mb-6 bg-gray-800 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center text-white/20 text-4xl font-bold">
                    EVENT IMAGE
                </div>
                {/* In a real implementation, we would map over displayImages and show currentImage */}
            </div>

            <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold font-poppins text-white group-hover:text-purple-200 transition-colors">
                    {title}
                </h3>
                <span className="bg-purple-500/20 text-purple-200 text-xs font-semibold px-2.5 py-1 rounded border border-purple-500/20 whitespace-nowrap">
                    {date}
                </span>
            </div>

            <div className="space-y-2 mb-6 text-sm text-white/70">
                {time && (
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-purple-400" />
                        <span>{time}</span>
                    </div>
                )}
                {location && (
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-purple-400" />
                        <span>{location}</span>
                    </div>
                )}
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                {description}
            </p>

            {speakers && speakers.length > 0 && (
                <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Speakers</p>
                    <div className="flex flex-wrap gap-2">
                        {speakers.map((speaker, idx) => (
                            <span key={idx} className="bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full text-xs transition-colors">
                                {speaker}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </Card>
    );
}

"use client";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`
        glass-card rounded-2xl p-8 
        transition-all duration-500 ease-out
        hover:-translate-y-2 
        group
        ${className}
      `}
        >
            {/* Subtle glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </div >
    );
}

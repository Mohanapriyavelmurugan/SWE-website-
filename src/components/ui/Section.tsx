interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
}

export default function Section({ children, className = "", id, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
            {(title || subtitle) && (
                <div className="text-center mb-12 sm:mb-16 fade-in-up">
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4 tracking-tight">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
                            {subtitle}
                        </p>
                    )}
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full opacity-80" />
                </div>
            )}
            {children}
        </section>
    );
}

"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Aurora Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5f5a74] via-[#6d6685] to-[#4a455a] animate-aurora opacity-100 -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay -z-10"></div> {/* Subtle noise texture */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5f5a74]/80 z-0" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">

            {/* Left Side Quote */}
            <div className="font-poppins italic font-light tracking-wide text-white/90 text-2xl md:text-4xl leading-tight">
              <p>EMPOWERING WOMEN</p>
              <p>ENGINEERING THE FUTURE</p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-32 bg-white/50"></div>
            <div className="md:hidden w-32 h-px bg-white/50 my-4"></div>

            {/* Right Side Title */}
            <div className="font-poppins font-bold text-white text-4xl md:text-6xl leading-tight tracking-tight">
              <p>SOCIETY</p>
              <p>OF</p>
              <p>WOMEN</p>
              <p>ENGINEERS</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About SWE" className="bg-white/5 backdrop-blur-sm rounded-3xl mx-4 my-8 shadow-2xl border border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            The Society of Women Engineers (SWE) is a global organization dedicated to supporting and advancing women in engineering and technology. Founded in 1950 in the United States, SWE has grown into an international community that provides women with leadership opportunities, career development, and a strong professional network.
          </p>
        </div>
      </Section>

      {/* Mission & Vision Grid */}
      <Section id="mission-vision">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-full flex flex-col justify-center text-center p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
              Our Mission
            </h3>
            <p className="text-white/90 leading-relaxed font-light">
              Empower women to achieve their full potential in careers as engineers and leaders; expand the image of the engineering and technology professions as a positive force in improving the quality of life, and demonstrate the value of diversity and inclusion.
            </p>
          </Card>

          <Card className="h-full flex flex-col justify-center text-center p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
              Our Vision
            </h3>
            <p className="text-xl text-white/90 leading-relaxed font-light">
              A world with gender parity and equality in engineering and technology.
            </p>
          </Card>
        </div>
      </Section>

      {/* What Our Chapter Does */}
      <Section id="what-we-do" title="What Our Chapter Does">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-transparent p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center mb-6">
              SWE SRM KTR advances women in engineering through initiatives focused on technical competency, professional development, strategic communication, community engagement, and member welfare.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center font-semibold">
              Our chapter fosters an environment that supports excellence, leadership, and meaningful impact within both academic and industry spheres.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

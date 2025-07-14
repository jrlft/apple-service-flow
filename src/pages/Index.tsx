
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useEffect, useState } from "react";

import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { BlogSection } from "@/components/home/blog-section";
import { Helmet } from "react-helmet";

// Add Facebook Pixel Script
const FacebookPixelScript = () => {
  return (
    <Helmet>
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '581961359233767');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=581961359233767&ev=PageView&noscript=1"
          />
        `}
      </noscript>
      
      {/* Google Ads Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10888031582"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10888031582');
        `}
      </script>
    </Helmet>
  );
};

const sectionMap: Record<string, any> = {
  "section.hero": HeroSection,
  "section.services": ServicesSection,
  "section.about": AboutSection,
  "section.contact": ContactSection,
  "section.cta": CtaSection,
  "section.blog": BlogSection,
};

// Default metadata when Strapi is unavailable
const DEFAULT_METADATA = {
  title: "Link TI - Assistência Técnica Apple Especializada",
  description: "Assistência técnica especializada em produtos Apple em Cuiabá. Conserto de iPhone, iPad, MacBook e Apple Watch com qualidade e garantia.",
  ogTitle: "Link TI - Assistência Técnica Apple",
  ogDescription: "Assistência técnica especializada em produtos Apple em Cuiabá"
};

const Index = () => {
  const metadata = DEFAULT_METADATA;

  const renderStaticContent = () => {
    return (
      <>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <CtaSection />
        <BlogSection />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metadata?.title || DEFAULT_METADATA.title}</title>
        <meta name="description" content={metadata?.description || DEFAULT_METADATA.description} />
        <meta property="og:title" content={metadata?.ogTitle || metadata?.title || DEFAULT_METADATA.ogTitle} />
        <meta property="og:description" content={metadata?.ogDescription || metadata?.description || DEFAULT_METADATA.ogDescription} />
      </Helmet>
      
      {/* Facebook Pixel and Google Ads Tag */}
      <FacebookPixelScript />
      
      <Navbar />
      <main className="flex-grow">
        {renderStaticContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

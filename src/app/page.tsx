"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { BarChart, Globe, Lock, MessageCircle, Share2, Shield, Target, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noise"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Nexum Premium"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Nexum Premium"
      description="Experience the next evolution of digital connection. Tailored for creators, innovators, and leaders seeking a superior social networking environment."
      buttons={[
        {
          text: "Start Exploring",
          href: "#pricing",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-techno-background-with-connecting-dots-lines_1048-5771.jpg",
          imageAlt: "Digital connectivity platform",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/panoramic-view-dubai-city-illuminated-neon-spectrum_23-2151305287.jpg",
          imageAlt: "Network nodes visualization",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-smartphone-with-blank-screen_9975-32787.jpg",
          imageAlt: "App interface preview",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/glitter-powder-dust-scatter-golden-sparkle-background_1017-41837.jpg",
          imageAlt: "Abstract digital aesthetic",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241197.jpg",
          imageAlt: "Advanced dashboard view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-business-leaders-meeting-sharing-ideas-corporate-growth_482257-128585.jpg",
          imageAlt: "Collaborative workspace hub",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Elite Networking",
          description: "Connect with curated circles of industry leaders and innovators in an exclusive digital ecosystem.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/colors-noise-grainy-background-copy-space_272375-3054.jpg",
            imageAlt: "Networking interface",
          },
          items: [
            {
              icon: Users,
              text: "Curated Circles",
            },
            {
              icon: Shield,
              text: "Verified Peers",
            },
            {
              icon: Zap,
              text: "Real-time Connect",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-techno-background-with-connecting-dots-lines_1048-5771.jpg",
          imageAlt: "abstract tech dark background blue glow",
        },
        {
          title: "Live Intelligence",
          description: "Access deep analytics and real-time insights into your influence and network growth.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/ceo-leading-meeting-online-teleconference-call-boardroom_482257-112640.jpg",
            imageAlt: "Intelligence dashboard",
          },
          items: [
            {
              icon: BarChart,
              text: "Influence Analytics",
            },
            {
              icon: Globe,
              text: "Global Trends",
            },
            {
              icon: Target,
              text: "Growth Tracking",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/panoramic-view-dubai-city-illuminated-neon-spectrum_23-2151305287.jpg",
          imageAlt: "abstract digital connectivity network dark",
        },
        {
          title: "Secure Communication",
          description: "End-to-end encrypted messaging designed for high-stakes conversations and collaboration.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/woman-using-tablet_23-2149370580.jpg",
            imageAlt: "Communication interface",
          },
          items: [
            {
              icon: Lock,
              text: "Military-Grade Encryption",
            },
            {
              icon: MessageCircle,
              text: "Private Channels",
            },
            {
              icon: Share2,
              text: "Seamless Sharing",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-smartphone-with-blank-screen_9975-32787.jpg",
          imageAlt: "mobile application feed mockup dark",
        },
      ]}
      title="Redefined Social Tools"
      description="Powerful features designed to elevate your professional presence and creative influence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Game Changer",
          quote: "The most professional social platform I have used to date. The interface is breathtaking.",
          name: "Sarah Johnson",
          role: "CEO, TechFlow",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-tattoo-artist-indoors-side-view_23-2149445974.jpg",
        },
        {
          id: "2",
          title: "Unmatched Quality",
          quote: "Exquisite design and features that truly respect the time and focus of creators.",
          name: "Michael Chen",
          role: "Creative Lead, DesignPulse",
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-female-supervisor-dressed-elegant-suit-grey-background_613910-10394.jpg",
        },
        {
          id: "3",
          title: "Top-tier Network",
          quote: "Found opportunities here that I couldn't access elsewhere. It is a premium hub.",
          name: "Emily Rodriguez",
          role: "Strategy Director, VisionaryCorp",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",
        },
        {
          id: "4",
          title: "Essential Growth",
          quote: "Analytics are flawless. Helped me grow my reach significantly in just a few months.",
          name: "David Kim",
          role: "Head of Product, Innovate",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-suit-fashion-male-posing-street-near-fence-sunset-sunglassesusing-smartphone-apps_158538-22406.jpg",
        },
        {
          id: "5",
          title: "Stunning Experience",
          quote: "Finally a social platform that treats professional networking as a work of art.",
          name: "Chloe Bennett",
          role: "Content Creator, StyleFlow",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-unknown-young-man-posing_23-2149417574.jpg",
        },
      ]}
      title="Trusted by Visionaries"
      description="Join the community of forward-thinkers who are already redefining their professional digital landscape."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "InnovateX",
        "GlobalFlow",
        "DesignSystems",
        "TechBridge",
        "CreativeNexus",
        "StrategistHub",
        "ProductGenie",
      ]}
      title="Supported by Industry Titans"
      description="Our platform is built to integrate seamlessly with the tools and brands that define modern business."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",
          badge: "Core",
          price: "$49/mo",
          subtitle: "Essential access for budding creators.",
          buttons: [
            {
              text: "Get Started",
              href: "#",
            },
          ],
          features: [
            "Unlimited connections",
            "Advanced analytics",
            "Priority support",
            "Secure messaging",
          ],
        },
        {
          id: "pro",
          badge: "Pro",
          price: "$129/mo",
          subtitle: "Enhanced growth tools for professionals.",
          buttons: [
            {
              text: "Upgrade Pro",
              href: "#",
            },
          ],
          features: [
            "Everything in Core",
            "Exclusive networking events",
            "Personal influence reports",
            "API access",
          ],
        },
        {
          id: "enterprise",
          badge: "Elite",
          price: "$299/mo",
          subtitle: "Unrestricted access for industry leaders.",
          buttons: [
            {
              text: "Apply Now",
              href: "#",
            },
          ],
          features: [
            "Everything in Pro",
            "Dedicated partnership manager",
            "Global networking priority",
            "White-glove concierge",
          ],
        },
      ]}
      title="Exclusive Membership Tiers"
      description="Choose the level of connection that aligns with your ambition."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Inquiries"
      title="Request Your Invitation"
      description="Nexum Premium is by invite only to maintain the highest standard of networking. Apply to join our exclusive community today."
      buttons={[
        {
          text: "Apply for Access",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Community",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Help Center",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "#",
            },
            {
              label: "LinkedIn",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Nexum"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

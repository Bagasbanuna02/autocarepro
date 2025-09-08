import {
  Button,
  Container,
  Group,
  Text,
  Title,
  Card,
  Badge,
  Grid,
  Stack,
  TextInput,
  Textarea,
  SimpleGrid,
} from "@mantine/core";
import {
  IconPhone,
  IconShield,
  IconClock,
  IconStar,
  IconCar,
  IconMapPin,
  IconMail,
} from "@tabler/icons-react";
import Header from "./header";
import HeroSection from "./hero-section";
import ServicesSection from "./service-section";
import TestimonialsSection from "./testimonial-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import Footer from "./footer";

export default function CarRepairLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--mantine-color-dark-8)",
        color: "var(--mantine-color-gray-0)",
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

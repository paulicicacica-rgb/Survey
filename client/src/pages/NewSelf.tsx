import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Clock, Users, HeartPulse } from "lucide-react";

const AFFILIATE_LINK =
  "https://afflat3e1.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=32359&c=918277&a=798445&k=4D4B4D5ECC2D9D1C8A7E83017644E570&l=38108&s1=ns";

const doctors = [
  { name: "Dr. Sarah Chen", credential: "MD, Internal Medicine", specialty: "Weight Management" },
  { name: "Dr. James Rodriguez", credential: "MD, Endocrinology", specialty: "Metabolic Health" },
  { name: "Dr. Emily Watson", credential: "MD, Family Medicine", specialty: "Preventive Care" },
];

function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className} bg-primary rounded-full flex items-center justify-center flex-shrink-0`}>
      <HeartPulse className="w-1/2 h-1/2 text-white" />
    </div>
  );
}

export default function NewSelf() {
  return (
    <div className="newself-theme min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold text-primary">newself</span>
          </div>
          <Button
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.open(AFFILIATE_LINK, "_blank")}
          >
            Start Free Visit
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-2 border-primary/10">
        <div className="relative w-full">
          <img
            src="/images/newself-hero.png"
            alt="Your weight doesn't define you. Your results do. Personalized weight loss support, real results, real life."
            className="w-full h-auto block"
          />
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start My Free Visit"
            className="absolute cursor-pointer"
            style={{ left: "5.5%", top: "66.5%", width: "26%", height: "6%" }}
          />
        </div>
      </section>

      {/* Doctor Credibility Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Your Care Team</h2>
            <p className="text-gray-600">Licensed physicians with years of weight management expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doctor, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">👨‍⚕️</div>
                <h3 className="font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{doctor.credential}</p>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to your medication</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Chat with a Doctor", desc: "Start a free consultation with a licensed physician. No appointment needed.", icon: Users },
              { step: 2, title: "Get Prescribed", desc: "If approved, receive your personalized prescription within hours.", icon: Check },
              { step: 3, title: "Receive Medication", desc: "Your medication arrives discreetly at your door in 3-5 business days.", icon: Clock },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="text-center p-6 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full mb-4 text-2xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {item.step < 3 && <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Patients Choose newself</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Licensed Doctors", desc: "All consultations with board-certified physicians" },
              { icon: Clock, title: "Fast Delivery", desc: "Medication in your hands in 3-5 business days" },
              { icon: Users, title: "Trusted by Thousands", desc: "4.5★ rating from real patients on Trustpilot" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become Your newself?</h2>
          <p className="text-xl mb-8 text-blue-100">Start your free consultation today. No credit card required.</p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6"
            onClick={() => window.open(AFFILIATE_LINK, "_blank")}
          >
            Start Free Visit <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="w-6 h-6" />
                <span className="font-bold text-white">newself</span>
              </div>
              <p className="text-sm">Medical weight loss, delivered.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@newself.com" className="hover:text-white transition">hello@newself.com</a></li>
                <li><a href="tel:+1-800-NEWSELF" className="hover:text-white transition">1-800-NEWSELF</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-center">
              © 2026 newself. All rights reserved. newself is not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header with Branding */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.webp" alt="Surveoo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-green-700">Surveoo</h1>
              <p className="text-xs text-green-600">Earn on Your Terms</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Tired of the Daily Grind?
                </h2>
                <p className="text-xl text-green-700 font-semibold">
                  Single Moms, Discover a New Way to Earn from Your Phone
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Imagine earning extra income right from your couch, during naptime, or while waiting in the carpool line. Being a single mom is a superpower—but it's also incredibly tough. You juggle work, kids, household, and constant financial worries. What if there was a simple, legitimate way to turn spare moments into real income?
              </p>
              <div className="pt-4">
                <a href="https://afflat3e1.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=31078&c=918277&a=798445&k=B1CC33744E2E31EB6369E323E616FB43&l=36077" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                    Start Earning Today - It's Free!
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl opacity-30 blur-2xl"></div>
              <img 
                src="/images/hero-mom-phone.webp"
                alt="Single mom earning money from phone" 
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Introducing Surveoo: Your Path to Flexible Earnings
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Companies need your valuable insights, and they're willing to pay for them. Here's what you can earn:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Cards */}
            {[
              { icon: "💰", title: "Earn Up to $5 Per Survey", desc: "Or even more for specialized studies" },
              { icon: "📱", title: "Work from Your Phone", desc: "Fit it into your schedule, whenever you want" },
              { icon: "⚡", title: "Register in 30 Seconds", desc: "100% free—no hidden costs or catches" },
              { icon: "🎁", title: "Multiple Payment Options", desc: "PayPal, Amazon gift cards, or bank transfer" },
              { icon: "📈", title: "Earn $120+/Month", desc: "By sharing your honest opinions regularly" },
              { icon: "✅", title: "No Experience Needed", desc: "Just your authentic voice and perspective" },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-white rounded-3xl opacity-40 blur-2xl"></div>
              <img 
                src="/images/community.webp"
                alt="Community of single moms" 
                className="relative w-full h-auto rounded-3xl shadow-xl"
              />
            </div>

            {/* Testimonial */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                "This Has Been a Game-Changer for Me!"
              </h3>
              <blockquote className="text-lg text-gray-800 leading-relaxed italic border-l-4 border-amber-400 pl-6 py-4 bg-white/60 rounded-lg">
                "As a single mom, every penny counts, and my time is precious. Surveoo has allowed me to earn extra money during times I'd normally be scrolling aimlessly. It's not a get-rich-quick scheme, but it's real, flexible income that helps me provide more for my kids without sacrificing our time together."
              </blockquote>
              <p className="text-gray-700 font-semibold">— A fellow mom, just like you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-green-100 rounded-3xl opacity-30 blur-2xl"></div>
              <img 
                src="/images/flexibility.webp"
                alt="Flexibility in earning" 
                className="relative w-full h-auto rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                Flexibility That Fits Your Life
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                No rigid schedules. No commute. No childcare needed. You decide when, where, and how much you want to work. Whether it's 15 minutes during lunch or an hour in the evening, Surveoo adapts to your life—not the other way around.
              </p>
              <ul className="space-y-3">
                {[
                  "Take surveys whenever you have spare time",
                  "Work from home, coffee shops, or anywhere with your phone",
                  "No minimum hours or commitments",
                  "Withdraw earnings whenever you reach the threshold",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h3 className="text-4xl font-bold">
            Ready to Take Control of Your Finances and Your Time?
          </h3>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            It's time to stop hustling and start earning smarter. Surveoo is designed for real people with real lives, offering a straightforward way to boost your income without added stress.
          </p>
          <a href="https://afflat3e1.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=31078&c=918277&a=798445&k=B1CC33744E2E31EB6369E323E616FB43&l=36077" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Join Surveoo Now - It's Free & Easy!
            </Button>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { q: "Is it really free?", a: "Yes, 100% free to register and participate. No hidden fees or charges." },
              { q: "Do I need experience?", a: "No, just your honest opinions! Companies value your authentic perspective." },
              { q: "How much time does it take?", a: "You decide! Take surveys whenever you have a few spare minutes." },
              { q: "Is it legitimate?", a: "Absolutely. Surveoo partners with reputable companies like Dynata, Lucid, and Cint." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-green-50 border-t border-green-200">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">
            Start Your Journey Today
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Every survey you complete brings you closer to financial flexibility. Join thousands of single moms who are already earning with Surveoo.
          </p>
          <a href="https://afflat3e1.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=31078&c=918277&a=798445&k=B1CC33744E2E31EB6369E323E616FB43&l=36077" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Register Now - 30 Seconds to Start
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2026 Surveoo. All rights reserved.</p>
          <p className="text-sm">Surveoo is an independent platform connecting survey participants with market research companies.</p>
        </div>
      </footer>
    </div>
  );
}

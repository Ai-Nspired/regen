import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Microscope, Activity, 
  MapPin, Phone, Mail, Clock, ChevronDown,
  ArrowRight, Heart, Sparkles, Wind, CircleDot
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero load animation
      gsap.fromTo('.hero-image', 
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
      
      gsap.fromTo('.hero-headline span',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.2 }
      );
      
      gsap.fromTo('.hero-subtext',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.5 }
      );
      
      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.65 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven animations for pinned sections
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll exit animation
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set('.hero-headline, .hero-subtext, .hero-cta, .hero-image', { 
              opacity: 1, x: 0, clearProps: 'all' 
            });
          }
        }
      });

      heroTl
        .fromTo('.hero-headline', 
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-subtext',
          { x: 0, opacity: 1 },
          { x: '-14vw', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo('.hero-cta',
          { x: 0, opacity: 1 },
          { x: '-10vw', opacity: 0, ease: 'power2.in' },
          0.74
        )
        .fromTo('.hero-image',
          { x: 0, opacity: 1 },
          { x: '10vw', opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Philosophy section
      const philosophyTl = gsap.timeline({
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      philosophyTl
        .fromTo('.philosophy-image',
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.philosophy-headline',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo('.philosophy-body',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('.philosophy-image',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.philosophy-headline',
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.philosophy-body',
          { y: 0, opacity: 1 },
          { y: '4vh', opacity: 0, ease: 'power2.in' },
          0.72
        );

      // Approach section
      const approachTl = gsap.timeline({
        scrollTrigger: {
          trigger: approachRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      approachTl
        .fromTo('.approach-text',
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.approach-image',
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo('.approach-caption',
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.18
        )
        .fromTo('.approach-text',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.approach-image',
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.approach-caption',
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.75
        );

      // Results section
      const resultsTl = gsap.timeline({
        scrollTrigger: {
          trigger: resultsRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      resultsTl
        .fromTo('.results-image',
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.results-text',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo('.results-card',
          { y: '18vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.12
        )
        .fromTo('.results-image',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.results-text',
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.results-card',
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.72
        );

      // Location section
      const locationTl = gsap.timeline({
        scrollTrigger: {
          trigger: locationRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      locationTl
        .fromTo('.location-text',
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.location-image',
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo('.location-text',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.location-image',
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Closing CTA section
      const closingTl = gsap.timeline({
        scrollTrigger: {
          trigger: closingRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        }
      });

      closingTl
        .fromTo('.closing-content',
          { y: '18vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.closing-content',
          { y: 0, opacity: 1 },
          { y: '-10vh', opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Flowing sections reveal animations
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-[9vw] py-6 flex justify-between items-center bg-[#F6F7F3]/80 backdrop-blur-md">
        <div className="font-mono-label text-[#2B2F28]">Cascade</div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('approach')} className="text-sm text-[#6F756B] hover:text-[#7E8F7C] transition-colors">Approach</button>
          <button onClick={() => scrollToSection('services')} className="text-sm text-[#6F756B] hover:text-[#7E8F7C] transition-colors">Services</button>
          <button onClick={() => scrollToSection('location')} className="text-sm text-[#6F756B] hover:text-[#7E8F7C] transition-colors">Location</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm text-[#6F756B] hover:text-[#7E8F7C] transition-colors">Contact</button>
          <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm py-2.5 px-5">Book a visit</button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="section-pinned bg-[#F6F7F3] z-10">
        <div className="absolute left-[9vw] top-[10vh]">
          <span className="font-mono-label text-[#6F756B]">CASCADE WELLNESS</span>
        </div>
        
        {/* Hero Image */}
        <div className="hero-image absolute left-[52vw] top-[18vh] w-[42vw] h-[64vh] rounded-[34px] overflow-hidden image-shadow">
          <img 
            src="/hero_woman.jpg" 
            alt="Calm wellness portrait" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Headline */}
        <div className="hero-headline absolute left-[9vw] top-[26vh] w-[38vw]">
          <h1 className="headline-xl text-[#2B2F28]">
            <span className="block">Find your</span>
            <span className="block">body's <span className="text-accent">natural</span></span>
            <span className="block">rhythm.</span>
          </h1>
        </div>
        
        {/* Subheadline */}
        <div className="hero-subtext absolute left-[9vw] top-[56vh] w-[34vw]">
          <p className="body-text">
            Functional medicine and regenerative therapies for people who want to feel at home in their bodies.
          </p>
        </div>
        
        {/* CTAs */}
        <div className="hero-cta absolute left-[9vw] top-[70vh] flex items-center gap-4">
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Book a free 15-min consult
          </button>
          <button onClick={() => scrollToSection('services')} className="btn-secondary flex items-center gap-2">
            Explore services <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Section 2: Philosophy */}
      <section ref={philosophyRef} className="section-pinned bg-[#F6F7F3] z-20">
        {/* Left Image */}
        <div className="philosophy-image absolute left-[9vw] top-[18vh] w-[40vw] h-[64vh] rounded-[34px] overflow-hidden image-shadow">
          <img 
            src="/philosophy_labs.jpg" 
            alt="Reviewing lab work" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Headline */}
        <div className="philosophy-headline absolute left-[55vw] top-[26vh] w-[38vw] text-right">
          <h2 className="headline-lg text-[#2B2F28]">
            <span className="block">We don't mask</span>
            <span className="block">symptoms. We <span className="text-accent">map</span> the</span>
            <span className="block">root cause.</span>
          </h2>
        </div>
        
        {/* Body */}
        <div className="philosophy-body absolute left-[55vw] top-[54vh] w-[34vw] text-right">
          <p className="body-text mb-6">
            Labs, history, and your daily patterns tell a story. We use that story to build a plan that actually fits your life.
          </p>
          <button onClick={() => scrollToSection('approach')} className="text-[#7E8F7C] font-medium hover:underline inline-flex items-center gap-2">
            Read our approach <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Section 3: Approach */}
      <section ref={approachRef} id="approach" className="section-pinned bg-[#F6F7F3] z-30">
        {/* Left Text */}
        <div className="approach-text absolute left-[9vw] top-[26vh] w-[40vw]">
          <h2 className="headline-lg text-[#2B2F28] mb-6">
            <span className="block">A calm,</span>
            <span className="block"><span className="text-accent">structured</span></span>
            <span className="block">path forward.</span>
          </h2>
          <p className="body-text">
            Testing, acupuncture, nutrition, and regenerative options—integrated into one clear plan.
          </p>
        </div>
        
        {/* Right Image */}
        <div className="approach-image absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] rounded-[34px] overflow-hidden image-shadow">
          <img 
            src="/approach_profile.jpg" 
            alt="Peaceful profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Caption */}
        <div className="approach-caption absolute left-[54vw] top-[86vh] w-[40vw]">
          <p className="text-sm text-[#6F756B]">
            Sarah Piestrup, MS, LAc — Functional Medicine + East Asian Medicine
          </p>
        </div>
      </section>

      {/* Section 4: Services (Flowing) */}
      <section id="services" className="bg-[#E8E9E2] py-[10vh] z-40 relative">
        <div className="px-[9vw]">
          <div className="reveal-up mb-12">
            <h2 className="headline-lg text-[#2B2F28] mb-4">What we offer</h2>
            <p className="body-text max-w-xl">Personalized care that meets you where you are.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Card 1 */}
            <div className="reveal-up bg-[#F6F7F3] rounded-[28px] p-7 card-shadow hover:translate-y-[-6px] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center">
                  <Microscope size={20} className="text-[#7E8F7C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2F28]">Integrative Functional Medicine</h3>
              </div>
              <p className="body-text">Root-cause labs, nutrition, and a plan built around your life.</p>
            </div>
            
            {/* Card 2 */}
            <div className="reveal-up bg-[#F6F7F3] rounded-[28px] p-7 card-shadow hover:translate-y-[-6px] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center">
                  <CircleDot size={20} className="text-[#7E8F7C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2F28]">Acupuncture + Herbal Support</h3>
              </div>
              <p className="body-text">Gentle, evidence-informed sessions to support sleep, stress, and recovery.</p>
            </div>
            
            {/* Card 3 */}
            <div className="reveal-up bg-[#F6F7F3] rounded-[28px] p-7 card-shadow hover:translate-y-[-6px] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center">
                  <Activity size={20} className="text-[#7E8F7C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2F28]">Regenerative Joint Therapies</h3>
              </div>
              <p className="body-text">PRP, Prolo, StemWave, and exosome support for joints and tissue repair.</p>
            </div>
            
            {/* Card 4 */}
            <div className="reveal-up bg-[#F6F7F3] rounded-[28px] p-7 card-shadow hover:translate-y-[-6px] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center">
                  <Wind size={20} className="text-[#7E8F7C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2F28]">Qi Gong + Breathwork</h3>
              </div>
              <p className="body-text">Movement and breath practices to regulate your nervous system.</p>
            </div>
          </div>
          
          <div className="reveal-up text-center py-8">
            <p className="text-[#6F756B] mb-4">Not sure what you need? Book a free 15-minute call.</p>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">Book a call</button>
          </div>
        </div>
      </section>

      {/* Section 5: Results */}
      <section ref={resultsRef} className="section-pinned bg-[#F6F7F3] z-50">
        {/* Left Image */}
        <div className="results-image absolute left-[9vw] top-[18vh] w-[40vw] h-[64vh] rounded-[34px] overflow-hidden image-shadow">
          <img 
            src="/results_woman.jpg" 
            alt="Happy patient" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Text */}
        <div className="results-text absolute left-[55vw] top-[26vh] w-[38vw]">
          <h2 className="headline-lg text-[#2B2F28] mb-6">
            Real <span className="text-accent">results</span>.
          </h2>
          <p className="body-text">
            Less pain. Better sleep. Clearer labs. A plan you can actually follow.
          </p>
        </div>
        
        {/* Testimonial Card */}
        <div className="results-card absolute left-[38vw] top-[60vh] w-[28vw] bg-[#F6F7F3] border border-[#6F756B]/18 rounded-[26px] p-6 card-shadow">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Sparkles key={i} size={16} className="text-[#7E8F7C]" fill="#7E8F7C" />
            ))}
          </div>
          <p className="text-[#2B2F28] mb-4 italic">
            "For the first time, my labs made sense. Sarah connected the dots and gave me steps I could actually follow."
          </p>
          <p className="text-sm text-[#6F756B]">— Cascade patient</p>
        </div>
      </section>

      {/* Section 6: Location */}
      <section ref={locationRef} id="location" className="section-pinned bg-[#F6F7F3] z-[60]">
        {/* Left Text */}
        <div className="location-text absolute left-[9vw] top-[26vh] w-[40vw]">
          <h2 className="headline-lg text-[#2B2F28] mb-6">
            <span className="block">Visit us in</span>
            <span className="text-accent">Leavenworth</span>.
          </h2>
          <p className="body-text mb-4">
            In-person visits in the mountains. Telehealth available across Washington.
          </p>
          <div className="flex items-center gap-2 text-[#2B2F28] mb-2">
            <MapPin size={18} className="text-[#7E8F7C]" />
            <span>10454 Fox Rd, Leavenworth, WA</span>
          </div>
          <button className="text-[#7E8F7C] font-medium hover:underline inline-flex items-center gap-2 mt-2">
            Get directions <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Right Image */}
        <div className="location-image absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] rounded-[34px] overflow-hidden image-shadow">
          <img 
            src="/location_map.jpg" 
            alt="Leavenworth location" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 7: Contact (Flowing) */}
      <section id="contact" className="bg-[#E8E9E2] py-[10vh] z-[70] relative">
        <div className="px-[9vw]">
          <div className="reveal-up mb-12">
            <h2 className="headline-lg text-[#2B2F28] mb-4">Let's build your plan.</h2>
            <p className="body-text max-w-xl">Tell us what's going on. We'll reply within 1–2 business days.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="reveal-up bg-[#F6F7F3] rounded-[28px] p-8 card-shadow">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-[#6F756B] mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#6F756B]/20 bg-white focus:outline-none focus:border-[#7E8F7C] transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-[#6F756B] mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-[#6F756B]/20 bg-white focus:outline-none focus:border-[#7E8F7C] transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm text-[#6F756B] mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-[#6F756B]/20 bg-white focus:outline-none focus:border-[#7E8F7C] transition-colors" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm text-[#6F756B] mb-2">What are you hoping to address?</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-[#6F756B]/20 bg-white focus:outline-none focus:border-[#7E8F7C] transition-colors h-24 resize-none" placeholder="Tell us briefly..." />
                </div>
                <button type="submit" className="btn-primary w-full">Request a consult</button>
              </form>
            </div>
            
            {/* Contact Details */}
            <div className="reveal-up space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#7E8F7C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2F28] mb-1">Phone</h4>
                  <p className="text-[#6F756B]">(509) 555-0147</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#7E8F7C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2F28] mb-1">Email</h4>
                  <p className="text-[#6F756B]">hello@cascadewellness.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#7E8F7C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2F28] mb-1">Hours</h4>
                  <p className="text-[#6F756B]">Mon–Thu: 9am–5pm</p>
                  <p className="text-[#6F756B]">Friday: 9am–2pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7E8F7C]/10 flex items-center justify-center flex-shrink-0">
                  <Heart size={18} className="text-[#7E8F7C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2F28] mb-1">Accessibility</h4>
                  <p className="text-[#6F756B]">Our clinic is wheelchair accessible with ample parking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ (Flowing) */}
      <section className="bg-[#F6F7F3] py-[10vh] z-[80] relative">
        <div className="px-[9vw]">
          <div className="reveal-up mb-10">
            <h2 className="headline-lg text-[#2B2F28]">Common questions</h2>
          </div>
          
          <div className="max-w-3xl space-y-4">
            {[
              { q: "Do I need a referral?", a: "No. You can book directly." },
              { q: "Do you take insurance?", a: "We don't bill insurance, but we provide a superbill for out-of-network reimbursement." },
              { q: "What should I bring to the first visit?", a: "Recent labs, a list of medications/supplements, and your goals." },
              { q: "Can I do telehealth?", a: "Yes. Telehealth is available for Washington residents." },
              { q: "How soon will I see changes?", a: "Many patients notice shifts within 4–6 weeks; complex cases may take longer." },
            ].map((faq, i) => (
              <div key={i} className="reveal-up bg-[#E8E9E2] rounded-[20px] p-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-medium text-[#2B2F28]">{faq.q}</span>
                    <ChevronDown size={20} className="text-[#7E8F7C] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-[#6F756B]">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section ref={closingRef} className="section-pinned bg-[#F6F7F3] z-[90]">
        <div className="closing-content absolute inset-0 flex flex-col items-center justify-center text-center px-[9vw]">
          <h2 className="headline-lg text-[#2B2F28] mb-6">
            Ready to feel at <span className="text-accent">home</span> in your body?
          </h2>
          <p className="body-text max-w-xl mb-8">
            Book a free 15-minute consult. We'll map a path that fits your life.
          </p>
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Book a free consult
          </button>
          
          <div className="absolute bottom-[12vh] left-1/2 -translate-x-1/2">
            <p className="text-sm text-[#6F756B]">© Cascade Wellness — Leavenworth, WA</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

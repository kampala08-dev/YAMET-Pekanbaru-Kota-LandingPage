import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import WhyYamet from "@/components/WhyYamet";
import Conditions from "@/components/Conditions";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ClosingCta from "@/components/ClosingCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

function Landing() {
    return (
        <div className="min-h-screen bg-yamet-cream text-yamet-ink" data-testid="landing-root">
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <Services />
                <WhyYamet />
                <Conditions />
                <Workflow />
                <Testimonials />
                <FAQ />
                <ClosingCta />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsapp />
            <Toaster position="top-center" richColors closeButton />
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

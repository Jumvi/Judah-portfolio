import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Fullstack Developer &amp; Technical Coach
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Crafting innovative digital experiences with precision and purpose
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link to="/cv">View My CV</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Teaser */}
      <section className="container mx-auto px-4 sm:px-6 py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            Looking for a developer who can transform your ideas into reality?
            I'm ready to bring my technical expertise and creativity to your next project.
          </p>
          <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

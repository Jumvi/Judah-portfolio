import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg text-gray-600">
              Let's discuss how we can work together on your next project
            </p>
          </header>

          <Card className="border-black/10">
            <CardHeader className="pb-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                <a 
                  href="mailto:Judahmvi@gmail.com" 
                  className="text-lg hover:underline"
                >
                  Judahmvi@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Phone</h3>
                <a 
                  href="tel:+243818379907" 
                  className="text-lg hover:underline"
                >
                  +243 818 379 907
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/judah-mvi-mukanime" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg hover:underline"
                >
                  @Judah Mvi Mukanime
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">GitHub</h3>
                <a 
                  href="https://github.com/Jumvi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg hover:underline"
                >
                  github.com/Jumvi
                </a>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Available for new opportunities and collaborations.
            </p>
            <p className="text-sm text-gray-500">
              Based in Kinshasa, Democratic Republic of Congo
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
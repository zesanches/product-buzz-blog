import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        contact@productbuzz.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        Av. Paulista, 1000
                        <br />
                        São Paulo - SP
                        <br />
                        ZIP: 01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Other Reasons to Contact
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Partnerships</h3>
                    <p className="text-muted-foreground">
                      For business proposals and partnerships, send an email to:
                      <a
                        href="mailto:partnerships@productbuzz.com"
                        className="text-primary ml-1 hover:underline"
                      >
                        partnerships@productbuzz.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Product Suggestions</h3>
                    <p className="text-muted-foreground">
                      Have a product you’d like us to review? Use the form and
                      select the subject as “Product Suggestion”.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Report Issues</h3>
                    <p className="text-muted-foreground">
                      Found an error on our site or in our reviews? Please let
                      us know so we can fix it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

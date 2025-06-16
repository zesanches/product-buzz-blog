import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    Product Buzz was born with a clear purpose: to help
                    consumers make more informed and smarter choices. In a
                    market full of options and marketing noise, our commitment
                    is to offer unbiased reviews and recommendations based on
                    real testing and hands-on experience.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    How We Test Products
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Each product recommended on our site goes through a rigorous
                    evaluation process:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      We purchase products with our own resources to maintain
                      independence
                    </li>
                    <li>
                      We test each item for at least 2 weeks under real usage
                      conditions
                    </li>
                    <li>
                      We evaluate criteria like performance, value for money,
                      durability, and user experience
                    </li>
                    <li>
                      We compare directly with competitors in the same category
                    </li>
                    <li>We monitor user feedback to complement our analysis</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                  <p className="text-muted-foreground">
                    We are a group of experts passionate about technology,
                    sports, and wellness. Our team includes engineers, personal
                    trainers, tech specialists, and enthusiasts who are
                    constantly seeking the best solutions in each category we
                    cover.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Affiliate Links
                  </h2>
                  <p className="text-muted-foreground">
                    To keep our site running and continue offering high-quality
                    content, we use affiliate links. This means we may receive a
                    small commission if you make a purchase through the links on
                    our site, at no extra cost to you. This does not influence
                    our recommendations – we only suggest products we truly
                    believe are high-quality and good value.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <p className="text-muted-foreground mb-4">
                    Have any questions or suggestions? Get in touch with us:
                  </p>
                  <p className="text-muted-foreground">
                    Email: contact@productbuzz.com
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Suggest a Product
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Is there a product you'd like us to review?
                  </p>
                  <Link href="/contact">
                    <button className="bg-primary text-slate-950 px-4 py-2 rounded-md w-full hover:bg-primary/90 transition-colors">
                      Suggest a product
                    </button>
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Policies</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/privacy-police"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms-of-use"
                        className="text-primary hover:underline"
                      >
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";

export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>Terms of Use – ProductBuzz</title>
        <meta
          name="description"
          content="Review our Terms of Use for ProductBuzz."
        />
      </Head>
      <Layout>
        <main className="max-w-3xl mx-auto px-4 py-12">
          <Card className="bg-white dark:bg-gray-900 shadow-md">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4">
                Terms of Use – ProductBuzz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-xl font-semibold mb-2">1. Purpose</h2>
                <p>
                  These Terms of Use govern access to and use of the blog{" "}
                  <a
                    href="https://product-buzz-blog.vercel.app/"
                    className="text-blue-600 hover:underline"
                  >
                    https://product-buzz-blog.vercel.app/
                  </a>
                  , which provides reviews, product recommendations, and
                  information on various topics. Our goal is to deliver useful
                  and high-quality content to our users.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  2. Use of Content
                </h2>
                <p>
                  <strong>Original Content:</strong> All content published on
                  the blog, including texts, images, videos, logos, and design,
                  is the exclusive property of ProductBuzz or its licensors and
                  is protected by copyright and intellectual property laws.
                </p>
                <p>
                  <strong>Permission to Use:</strong> You may view, download,
                  and print pages from the blog for your personal,
                  non-commercial use. Any other form of reproduction,
                  distribution, modification, display, or use of the content
                  without prior written permission from ProductBuzz is strictly
                  prohibited.
                </p>
                <p>
                  <strong>Citations:</strong> When quoting our content, please
                  mention the source, crediting ProductBuzz, and if possible,
                  include a link to the original article.
                </p>
              </section>
              {/* Continue with the remaining sections similarly */}
              <section>
                <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
                <p>
                  If you have any questions about these Terms of Use, please
                  contact us through our contact form at{" "}
                  <a
                    href="https://product-buzz-blog.vercel.app/"
                    className="text-blue-600 hover:underline"
                  >
                    https://product-buzz-blog.vercel.app/
                  </a>
                  .
                </p>
              </section>
            </CardContent>
          </Card>
        </main>
      </Layout>
    </>
  );
}

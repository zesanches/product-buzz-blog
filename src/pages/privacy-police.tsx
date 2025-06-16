import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

export default function PrivacyPolicyPage() {
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
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>
          <Card>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none py-6">
              <p>
                Your privacy is extremely important to{" "}
                <strong>ProductBuzz</strong>. This Privacy Policy describes how
                we collect, use, store, and protect your personal information
                when you use our blog. By accessing and using ProductBuzz, you
                agree to the practices described in this Privacy Policy.
              </p>

              <h2>1. Collection of Personal Information</h2>
              <h3>Information Provided by You:</h3>
              <ul>
                <li>
                  <strong>Newsletter:</strong> When you subscribe, we collect
                  your name and email address.
                </li>
                <li>
                  <strong>Contact Form:</strong> We collect your name, email
                  address, and your message content.
                </li>
                <li>
                  <strong>Comments:</strong> We collect your name (or nickname),
                  email, and your comment content.
                </li>
              </ul>

              <h3>Automatically Collected Information:</h3>
              <p>
                We may collect data such as IP address, browser type, ISP, pages
                visited, and timestamps to analyze traffic and user behavior.
              </p>

              <h3>Cookies and Similar Technologies:</h3>
              <p>
                We use cookies to improve your experience, personalize content,
                and analyze traffic. You can manage cookies through your browser
                settings.
              </p>

              <h2>2. Use of Personal Information</h2>
              <ul>
                <li>To send newsletters and updates</li>
                <li>To respond to messages sent through the contact form</li>
                <li>To publish and manage comments</li>
                <li>To improve content and user experience</li>
                <li>To personalize ads</li>
                <li>To protect the blog and its users</li>
              </ul>

              <h2>3. Sharing of Personal Information</h2>
              <p>
                We do not sell or rent your data. However, we may share it in
                these cases:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Trusted third parties
                  assisting in blog operations.
                </li>
                <li>
                  <strong>Affiliate Partners:</strong> Aggregated,
                  non-identifiable data for analysis.
                </li>
                <li>
                  <strong>Legal Requirement:</strong> If required by law or
                  legal process.
                </li>
                <li>
                  <strong>Protection of Rights:</strong> To protect ProductBuzz,
                  our users, or the public.
                </li>
              </ul>

              <h2>4. Affiliate Links</h2>
              <p>
                Our blog may contain affiliate links. When you make a purchase
                through these links, the partner may collect your transaction
                data. Please review their privacy policies before sharing
                personal data.
              </p>

              <h2>5. Your Rights (LGPD)</h2>
              <p>
                Under the Brazilian General Data Protection Law (LGPD), you may:
              </p>
              <ul>
                <li>Request access to your data</li>
                <li>Request corrections</li>
                <li>Request deletion or anonymization</li>
                <li>Request data portability</li>
                <li>Withdraw your consent</li>
                <li>Object to processing when not aligned with LGPD</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us through the
                contact form or via email at{" "}
                <a href="mailto:your@email.com">your@email.com</a>.
              </p>

              <h2>6. Information Security</h2>
              <p>
                We adopt technical and organizational measures to protect your
                data. However, no system is 100% secure.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                We keep your data only for as long as necessary to fulfill the
                purposes for which it was collected or as required by law.
              </p>

              <h2>8. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Updates take
                effect upon publication on this page.
              </p>

              <h2>9. Contact</h2>
              <p>
                If you have any questions, reach out via our{" "}
                <a href="/contact">contact form</a> or email us at{" "}
                <a href="mailto:your@email.com">your@email.com</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    </>
  );
}

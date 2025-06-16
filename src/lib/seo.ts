
import { DefaultSeoProps } from 'next-seo';

const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: '%s | ProductBuzz',
  defaultTitle: 'ProductBuzz - As Melhores Recomendações de Produtos',
  description: 'Recomendações imparciais dos melhores produtos e equipamentos testados por especialistas.',
  canonical: 'https://product-buzz-blog.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://product-buzz-blog.vercel.app/',
    siteName: 'ProductBuzz',
    images: [
      {
        url: 'https://product-buzz-blog.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ProductBuzz',
      },
    ],
  },
  twitter: {
    handle: '@productbuzz',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};

export default SEO_CONFIG;

import type { Metadata } from 'next'
import DefaultLayout from '@/src/layout/DefaultLayout';
import { MenuDataType, PersonalInformationDataType } from '@/src/types';
import { fetchInformationData, fetchMenuData } from '@/src/hooks/useApi';

const fetchData = async (): Promise<{
  menuData: MenuDataType[],
  personalInformationData: PersonalInformationDataType,
}> => {
  try {
    const [
      menuData,
      personalInformationData
    ] = await Promise.all([
      fetchMenuData(),
      fetchInformationData(),
    ]);

    return {
      menuData,
      personalInformationData,
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      menuData: [],
      personalInformationData: {} as PersonalInformationDataType,
    };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { personalInformationData } = await fetchData();
  if (!personalInformationData) {
    return {
      title: "Portfolio",
      description: "Alipasha Askerov Personal Website",
    };
  }
  return {
    metadataBase: new URL(`https://alipashaskerov.vercel.app`),
    title: personalInformationData.title,
    description: personalInformationData.description,
    keywords: personalInformationData.keywords,
    authors: {
      name: personalInformationData.author_name,
      url: personalInformationData.author_url,
    },
    icons: {
      icon: '/vectors/code.svg',
    },
    openGraph: {
      type: "website",
      title: personalInformationData.title,
      siteName: personalInformationData.title,
      description: personalInformationData.description,
      locale: 'en_GB',
      images: [personalInformationData.image]
    },
    alternates: {
      canonical: "https://alipashaskerov.vercel.app",
    },
    twitter: {
      card: "summary_large_image",
      title: personalInformationData.title,
      description: personalInformationData.description,
      images: [personalInformationData.image],
      creator: personalInformationData.author_name,
    }
  }
}


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { menuData, personalInformationData } = await fetchData();
  if (!menuData.length || !personalInformationData) {
    return (
      <html lang="en">
        <body>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            Error loading data ❌
          </p>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": personalInformationData.author_name,
            "url": "https://alipashaskerov.vercel.app",
            "image": personalInformationData.image,
            "sameAs": [
              personalInformationData.social.github,
              personalInformationData.social.linkedin,
              personalInformationData.social.whatsapp,
              personalInformationData.social.mail
            ],
            "jobTitle": "Frontend Developer",
          })
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </head>
      <body>
        <DefaultLayout menuData={menuData} personalInformationData={personalInformationData}>
          {children}
        </DefaultLayout>
      </body>
    </html>
  )

}

export default RootLayout
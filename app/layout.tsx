import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry';
import SiteLayout from '@/src/layout/SiteLayout';
import { MenuDataType, PersonalInformationDataType } from '@/src/types';
import { fetchInformationData, fetchMenuData } from '@/src/utils/fetch';

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
    throw new Error('Failed to fetch data');
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { personalInformationData } = await fetchData();

    return {
      metadataBase: new URL(`https://alipashaskerov.vercel.app`),
      title: personalInformationData.title,
      description: personalInformationData.aboutText,
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
        description: personalInformationData.aboutText,
        locale: 'en_GB',
        images: [personalInformationData.image]
      },
      alternates: {
        canonical: "https://alipashaskerov.vercel.app",
      },
      twitter: {
        card: "summary_large_image",
        title: personalInformationData.title,
        description: personalInformationData.aboutText,
        images: [personalInformationData.image],
        creator: personalInformationData.author_name,
      }
    }
  } catch {
    return {
      title: "Portfolio",
      description: "Alipasha Askerov Personal Website",
    };
  }
}


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  try {
    const { menuData, personalInformationData } = await fetchData();
    if (menuData && personalInformationData) {
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
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" rel="stylesheet"></link>
          </head>
          <body>
            <StyledComponentsRegistry>
              <SiteLayout menuData={menuData} personalInformationData={personalInformationData}>
                {children}
              </SiteLayout>
            </StyledComponentsRegistry>
          </body>
        </html>
      )
    } else {
      <html>
        <body>
          Error
        </body>
      </html>
    }
  } catch (error) {
    console.error('Error:', error);
  }
  return (
    <html lang='az'>
      <body>Error</body>
    </html>
  );

}

export default RootLayout
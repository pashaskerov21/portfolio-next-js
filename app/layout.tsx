import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry';
import SiteLayout from '@/src/components/SiteLayout';
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

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Alipasha Askerov Personal Website",
}


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  try {
    const { menuData, personalInformationData } = await fetchData();
    if (menuData && personalInformationData) {
      return (
        <html lang="en">
          <head>
            <link rel="icon" href="vectors/code.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
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
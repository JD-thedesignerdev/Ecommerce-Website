export const metadata = {
  title: 'E-shop',
  description: 'E-commerce website, E-shop products, clothing, E-shop clothing, popular clothes',
}
import AppLayout from "./AppLayout"
import StoreProvider from "./StoreProvider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
        <StoreProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </StoreProvider>
      </body>
    </html>
  )
}

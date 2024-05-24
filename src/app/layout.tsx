
import StyledComponentsRegistry from '../../lib/registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </html>
  )
}
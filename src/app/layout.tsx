import './globals.css'

export const metadata = {
  title: 'Marco Giacoppo - Portfolio',
  description: 'Mobile App & Website Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div> {/* Wrapping children */}
      </body>
    </html>
  );
}

import React, { ReactNode } from 'react';

interface AboutMeLayoutProps {
  children: ReactNode;
}

export default function AboutMeLayout({ children }: AboutMeLayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

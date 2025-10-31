import React from "react";

type Props = { children?: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
      {children}
    </div>
  );
}

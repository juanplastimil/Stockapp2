import React from "react";
import type { Page } from "../../types";

type Props = {
  activePage: Page;
  setActivePage: (p: Page) => void;
  children?: React.ReactNode;
};

export default function Layout({ activePage, setActivePage, children }: Props) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "100vh" }}>
      <aside style={{ background: "#111", color: "#eee", padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>StockApp</h2>
        {(["dashboard","materials","suppliers","movements","categories"] as Page[]).map(p => (
          <button
            key={p}
            onClick={() => setActivePage(p)}
            style={{
              display: "block",
              width: "100%",
              marginBottom: 8,
              padding: "8px 10px",
              background: activePage === p ? "#444" : "#222",
              color: "#fff",
              border: "1px solid #555",
              cursor: "pointer",
              textAlign: "left",
              borderRadius: 6
            }}
          >
            {p}
          </button>
        ))}
      </aside>
      <main style={{ padding: 16 }}>{children}</main>
    </div>
  );
}

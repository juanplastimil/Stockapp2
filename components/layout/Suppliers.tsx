import React from "react";
import type { Supplier } from "../types";

type Props = {
  suppliers: Supplier[];
  setSuppliers: (v: Supplier[]) => void;
};

export default function Suppliers({ suppliers }: Props) {
  return (
    <>
      <h1>Proveedores</h1>
      <ul>
        {suppliers.map(s => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </>
  );
}

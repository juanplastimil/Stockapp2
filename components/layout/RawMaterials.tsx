import React from "react";
import type { RawMaterial, Supplier, StockInflow, StockOutflow, Category } from "../types";

type Props = {
  rawMaterials: RawMaterial[];
  setRawMaterials: (v: RawMaterial[]) => void;
  suppliers: Supplier[];
  stockData: Map<string, number>;
  inflows: StockInflow[];
  outflows: StockOutflow[];
  categories: Category[];
};

export default function RawMaterials({ rawMaterials, stockData }: Props) {
  return (
    <>
      <h1>Materias primas</h1>
      <ul>
        {rawMaterials.map(rm => (
          <li key={rm.id}>
            {rm.name} — stock: {stockData.get(rm.id) ?? 0} {rm.unit}
          </li>
        ))}
      </ul>
    </>
  );
}

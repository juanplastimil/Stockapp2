import React from "react";
import type { RawMaterial, Supplier, StockInflow, StockOutflow, Category } from "../types";

type Props = {
  rawMaterials: RawMaterial[];
  suppliers: Supplier[];
  inflows: StockInflow[];
  outflows: StockOutflow[];
  stockData: Map<string, number>;
  categories: Category[];
};

export default function Dashboard({
  rawMaterials, suppliers, inflows, outflows, stockData, categories
}: Props) {
  const totalStock = Array.from(stockData.values()).reduce((a, b) => a + b, 0);
  return (
    <>
      <h1>Dashboard</h1>
      <p>Materias primas: {rawMaterials.length}</p>
      <p>Proveedores: {suppliers.length}</p>
      <p>Categorías: {categories.length}</p>
      <p>Movimientos — Ingresos: {inflows.length} | Egresos: {outflows.length}</p>
      <p>Stock total (sumatoria): {totalStock}</p>
    </>
  );
}

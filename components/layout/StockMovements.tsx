import React from "react";
import type { StockInflow, StockOutflow, RawMaterial, Supplier } from "../types";

type Props = {
  inflows: StockInflow[];
  setInflows: (v: StockInflow[]) => void;
  outflows: StockOutflow[];
  setOutflows: (v: StockOutflow[]) => void;
  rawMaterials: RawMaterial[];
  suppliers: Supplier[];
};

export default function StockMovements({ inflows, outflows, rawMaterials }: Props) {
  return (
    <>
      <h1>Movimientos</h1>
      <h3>Ingresos</h3>
      <ul>
        {inflows.map((i, idx) => (
          <li key={idx}>
            {rawMaterials.find(r => r.id === i.rawMaterialId)?.name} +{i.quantity} ({i.date})
          </li>
        ))}
      </ul>
      <h3>Egresos</h3>
      <ul>
        {outflows.map((o, idx) => (
          <li key={idx}>
            {rawMaterials.find(r => r.id === o.rawMaterialId)?.name} -{o.quantity} (OT {o.workOrder ?? "-"})
          </li>
        ))}
      </ul>
    </>
  );
}

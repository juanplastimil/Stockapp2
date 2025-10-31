import React, { useMemo, useState } from 'react';
import { useSessionStorage } from './src/hooks/useSessionStorage';
import { RawMaterial, Supplier, StockInflow, StockOutflow, Page, Category } from './types';
import { sampleRawMaterials, sampleSuppliers, sampleInflows, sampleOutflows, sampleCategories } from './constants';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  // Podés dejar esto por si más adelante volvemos a agregar páginas
  const [activePage] = useState<Page>('dashboard');

  const [rawMaterials, setRawMaterials] =
    useSessionStorage<RawMaterial[]>('rawMaterials', sampleRawMaterials);
  const [suppliers, setSuppliers] =
    useSessionStorage<Supplier[]>('suppliers', sampleSuppliers);
  const [inflows, setInflows] =
    useSessionStorage<StockInflow[]>('inflows', sampleInflows);
  const [outflows, setOutflows] =
    useSessionStorage<StockOutflow[]>('outflows', sampleOutflows);
  const [categories, setCategories] =
    useSessionStorage<Category[]>('categories', sampleCategories);

  const stockData = useMemo(() => {
    const stockMap = new Map<string, number>();
    rawMaterials.forEach(rm => stockMap.set(rm.id, 0));
    inflows.forEach(inflow => {
      stockMap.set(
        inflow.rawMaterialId,
        (stockMap.get(inflow.rawMaterialId) || 0) + inflow.quantity
      );
    });
    outflows.forEach(outflow => {
      stockMap.set(
        outflow.rawMaterialId,
        (stockMap.get(outflow.rawMaterialId) || 0) - outflow.quantity
      );
    });
    return stockMap;
  }, [rawMaterials, inflows, outflows]);

  // Por ahora solo renderizamos el Dashboard (no hay carpeta components/)
  return (
    <>
      <Dashboard
        rawMaterials={rawMaterials}
        suppliers={suppliers}
        inflows={inflows}
        outflows={outflows}
        stockData={stockData}
        categories={categories}
      />
    </>
  );
};

export default App;

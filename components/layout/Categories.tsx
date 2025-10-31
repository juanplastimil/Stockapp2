import React from "react";
import type { Category, RawMaterial } from "../types";

type Props = {
  categories: Category[];
  setCategories: (v: Category[]) => void;
  rawMaterials: RawMaterial[];
};

export default function Categories({ categories }: Props) {
  return (
    <>
      <h1>Categorías</h1>
      <ul>
        {categories.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
}

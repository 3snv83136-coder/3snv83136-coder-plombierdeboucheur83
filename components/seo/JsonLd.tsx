// ============================================================
// JsonLd — Server Component minuscule
// ============================================================
// Injecte un ou plusieurs blocs <script type="application/ld+json">.
// Toute la logique de construction des objets reste dans lib/seo.ts.
// ============================================================

export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}

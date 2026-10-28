export default function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
      {items.map((t) => (
        <li key={t} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t}</div>
        </li>
      ))}
    </ul>
  );
}

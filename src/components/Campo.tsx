export function Campo({
  label,
  name,
  erro,
  children,
}: {
  label: string;
  name: string;
  erro?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      {children}
      {erro && <p className="mt-1 text-sm text-red-600">{erro}</p>}
    </div>
  );
}

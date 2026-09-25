export default function Fact({ label, value }) {
  return (
    <div>
      <dt className="text-sm text-stone-500">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
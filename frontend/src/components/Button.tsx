export default function Button({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
}) {
  return (
    <button
      className={`bg-blue-900 px-5 py-2 text-white rounded-lg ${className} hover:bg-slate-600`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

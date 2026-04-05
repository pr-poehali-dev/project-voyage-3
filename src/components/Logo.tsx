export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-white tracking-tight">Black Save 53</span>
        <span className="text-xs font-semibold text-primary tracking-wide uppercase">Антикоррозийная обработка</span>
      </div>
    </div>
  )
}

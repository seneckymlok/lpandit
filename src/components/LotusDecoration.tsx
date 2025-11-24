export default function LotusDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-divine-gold opacity-60">
        <path d="M20 0C20 0 24 12 32 16C40 20 40 20 32 24C24 28 20 40 20 40C20 40 16 28 8 24C0 20 0 20 8 16C16 12 20 0 20 0Z" fill="currentColor" />
      </svg>
    </div>
  );
}

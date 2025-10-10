export default function MountainDivider2({ className = "" }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg
        className="w-full h-auto"
        width="1440"
        height="60"
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60L240 20L480 45L720 10L960 50L1200 25L1440 60"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 60L360 30L600 50L840 20L1080 40L1320 15L1440 60"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
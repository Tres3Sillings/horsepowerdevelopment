export default function MountainDivider({ className = "" }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg
        className="w-full h-auto text-gray-200"
        width="1440"
        height="112"
        viewBox="0 0 1440 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 112L600 20L840 72L1440 0V112H0Z"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <path
          d="M0 112L480 40L720 82L1080 30L1440 92V112H0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
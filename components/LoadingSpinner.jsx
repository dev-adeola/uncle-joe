// components/LoadingSpinner.js

const LoadingSpinner = ({
  name = "ratefy",
  size = "w-20 h-20",
  color = "text-blue-500",
  className,
}) => {
  return (
    <div className="flex justify-center h-screen flex-col items-center">
      <svg
        className={`${size} ${color} animate-spin ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.088 0-3.998-.81-5.416-2.123l1.416-1.417z"
        ></path>
      </svg>
      <span className="mt-1 text-xs">{name}</span>
    </div>
  );
};

export default LoadingSpinner;

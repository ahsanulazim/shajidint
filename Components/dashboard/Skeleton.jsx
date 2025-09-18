export default function Skeleton({ className }) {
  return (
    <span
      className={`skeleton h-4 w-full ${className ? className : ""}`}
    ></span>
  );
}

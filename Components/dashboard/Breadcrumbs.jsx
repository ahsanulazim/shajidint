import Link from "next/link";

export default function Breadcrumbs({ title }) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li>{title}</li>
      </ul>
    </div>
  )
}

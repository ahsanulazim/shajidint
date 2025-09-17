import Link from "next/link";

export default function Breadcrumbs({ title, secTitle }) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        {secTitle ? <>
          <li><Link href={`/dashboard/${title?.slice(0, 1).toLowerCase() + title?.slice(1, title?.length)}`}>{title}</Link></li>
          <li>{secTitle}</li>
        </> :
          <li>{title}</li>
        }

      </ul>
    </div>
  )
}

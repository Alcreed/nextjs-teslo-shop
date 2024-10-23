import Link from "next/link"

interface Props {
  path: string,
  icon: React.ReactNode,
  title: string
}

export const SidebarItem = ({ path, icon, title }: Props) => {
  return (
    <li>
      <Link
        href={path}
        className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
      >
        {icon}
        <span className="ml-3 text-xl">{title}</span>
      </Link>
    </li>
  )
}


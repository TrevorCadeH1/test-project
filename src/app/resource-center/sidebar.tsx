import Link from 'next/link';

const links = [
    { href: '/resource-center', label: 'Resource Center - Vendor Literature' },
    { href: '/resource-center/videolibrary', label: 'Resources - Video Library' },
];

export default function Sidebar() {
    return (
        <nav className="w-56 min-h-full bg-white flex flex-col md:py-10 px-4">
            {links.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="mb-4 text-black border-b border-gray-200 hover:cursor-pointer pb-2 pt-1"
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

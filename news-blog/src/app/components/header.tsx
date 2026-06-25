import Link from "next/link";
import styles from "../header.module.css";

export default function Header() {
    interface NavItem {
        label: string;
        href: string;
    }

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        { label: 'Games', href: '/games' },
        { label: 'News', href: '/news' },
        { label: 'StudyH', href: '/study'},
    ]

    return (
        <div className={styles.header}>
            <h1 className="siteTitle">news-site</h1>
            <div className={styles.navBar}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={styles.navItem}>
                        {item.label}
                    </Link>
                ))}
            </div>

        </div>
    );
}
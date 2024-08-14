import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

interface BreadcrumbItem {
    label: string;
    path: string;
}

const formatLabel = (label: string) => {
    return decodeURIComponent(label)
        .replace(/-/g, ' ') 
        .replace(/\b\w/g, char => char.toUpperCase()); 
};

const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);

    const breadcrumbs: BreadcrumbItem[] = paths.map((path, index) => {
        const to = `/${paths.slice(0, index + 1).join('/')}`;
        return {
            label: formatLabel(path),
            path: to,
        };
    });

    return (
        <nav className="flex items-center gap-2">
            <Link to="/" className='text-neutral-500'>Home</Link>
            {breadcrumbs.map((crumb, index) => (
                <span key={crumb.path} className={`flex items-center gap-2 ${breadcrumbs.length - 1 == index ? "text-teak-600" : "text-neutral-500"}`}>
                    <FaChevronRight className="pt-1" />
                    <Link to={crumb.path}>{crumb.label}</Link>
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;

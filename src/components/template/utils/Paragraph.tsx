import { ReactNode } from "react";

interface TextProps {
    className?: string;
    children: ReactNode;
    title?: string;
    as?: 'span'
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    hover?: boolean;
}

export function Paragraph({children, as, className, size, hover}: TextProps) {
    const Comp = as ?? 'p'
    const textSize = size ?? 'sm'
    const isHover = hover ? 'hover:text-black/75 dark:hover:text-white/75' : ''

    return (
        <Comp className={`transition-all
            font-default text-${textSize} text-black dark:text-white
            ${isHover}
            ${className}
        `}>
            {children}
        </Comp>
    )
}
import classNames from "classnames";
import { useEffect, useState } from "react";

interface FlagProps {
    src: string;
    className?: string;
}

export default function Flag({ src, className }: FlagProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
    }, [src]);

    const imgClasses = classNames(
        "h-2/3 object-contain pointer-events-none",
        className,
        {
            hidden: !loaded,
        }
    );

    return (
        <img src={src} className={imgClasses} onLoad={() => setLoaded(true)} />
    );
}

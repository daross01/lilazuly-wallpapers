import { Link } from "react-router-dom";

export default function Logo() {

    return (

        <Link
            to="/"
            className="flex items-end gap-2"
        >

            <span
                style={{fontFamily:"var(--font-logo)"}}
                className="
                text-3xl
                uppercase
                tracking-[0.30em]
                leading-none
                "
            >
                LILAZULY
            </span>

            <span
                className="
                text-[11px]
                lowercase
                tracking-[0.18em]
                pb-[2px]
                text-[var(--text-light)]
                "
            >
                wallpapers
            </span>

        </Link>

    );

}
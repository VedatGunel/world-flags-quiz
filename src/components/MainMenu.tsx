import { Link } from "react-router-dom";

export default function MainMenu() {
    return (
        <div className="py-3">
            <Link
                className="bg-zinc-700 p-3 rounded border cursor-pointer hover:bg-zinc-500"
                to="/play"
            >
                Play
            </Link>
        </div>
    );
}

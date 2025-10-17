import { useEffect, useState } from "react";

export interface SearchBarProps {
    placeholder: string;
    onSearchSubmit: (search: string) => void
}

export default function SearchBar({ placeholder, onSearchSubmit }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearchSubmit(searchTerm);
        console.log("Search submitted:", searchTerm);
        setSearchTerm('');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Effect ran: ", searchTerm);
            onSearchSubmit(searchTerm);
        }, 700);

        return () => {
            clearTimeout(timer);
            console.log("Cleanup on unmount or before next effect");
        };
    }, [searchTerm, onSearchSubmit]);

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)} />
            <button onClick={handleSubmit}> Search</button>
        </form>
    )
}


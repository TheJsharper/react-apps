
export interface PreviousSearchesProps {
    title: string;
    searches: string[];
    onSearchClick?: (search: string) => void;
}

export default function PreviousSearches({ title, searches, onSearchClick }: PreviousSearchesProps) {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {searches.map((search, index) => (
                    <li key={index} onClick={() => onSearchClick?.(search)}>{search}</li>
                ))}
            </ul>
        </div>
    )
}

PreviousSearches.defaultProps = {
    title: 'Previous Searches',
    searches: ['Cats', 'Dogs', 'Memes', 'Movies', 'Sports'],
}     
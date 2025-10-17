
import GifList from './gifs/components/GifList';
import PreviousSearches from './gifs/components/previousSearches';
import { useGif } from './gifs/hooks/useGif';
import GifsHeader from './shared/components/GifsHeader';
import SearchBar from './shared/components/SearchBar';
const GifsApp = () => {
 const  { gifs, previousSearches, handleSearchClick, handleSearchSubmit } = useGif();
    return (
        <>
            {/* Header */}
            <GifsHeader title='Search Gifs' description='Find the best GIFs for your needs!' />
            {/* Search Form */}
            <SearchBar onSearchSubmit={handleSearchSubmit} placeholder="Search a gif here..." />
            {/* List of Gifs */}
            <PreviousSearches title="Previous Searches" searches={previousSearches}
                onSearchClick={handleSearchClick} />
            <GifList gifs={gifs} />
        </>)
}



export default GifsApp

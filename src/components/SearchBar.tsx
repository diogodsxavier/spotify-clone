import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import type { DebouncedFunc } from 'lodash';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const debounceRef = useRef<DebouncedFunc<(query: string) => void> | null>(null);

    useEffect(() => {
        debounceRef.current = debounce(onSearch, 500); // Debounce the search function with a 500ms delay

        return () => {
            debounceRef.current?.cancel();
        };
    }, [onSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        console.log('Valor do input:', value);
        debounceRef.current?.(value); // Call the debounced function immediately on input change, This ensures that the search is triggered immediately when the user types
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Buscar por artista, álbum ou música...'
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            autoComplete='off'
        />
    );
};

export default SearchBar;

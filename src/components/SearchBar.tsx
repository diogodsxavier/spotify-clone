import { DebouncedFunc } from 'lodash';
import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const debounceRef = useRef<DebouncedFunc<(query: string) => void> | null>(null);

    useEffect(() => {
        debounceRef.current = debounce((query: string) => {
            onSearch(query);
        }, 500);

        return () => {
            debounceRef.current?.cancel();
        };
    }, [onSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);

        if (debounceRef.current) {
            debounceRef.current(value);
        }
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Buscar por artista, álbum ou música...'
        />
    );
};

export default SearchBar;

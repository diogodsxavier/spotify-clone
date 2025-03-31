import { debounce } from 'lodash.debounce';

interface Props {
    onSearch: (query: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const debouncedSearch = debounce((query: string) => {
        onSearch(query);
    }, 500);
};


// CORRIGIR O PROBLEMA DE TIPO DO DEBOUNCE
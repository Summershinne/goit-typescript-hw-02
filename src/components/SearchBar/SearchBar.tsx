import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css";
import React, { FormEvent} from 'react';

interface SearchBarProps{
    onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) =>{
    const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        if (!form) return;
        const query = form.elements.namedItem("query") as HTMLInputElement;
        if (query.value.trim() === "") {
            toast.error("Please enter search term!");
            return;
        }
        onSearch(query.value);
        form.reset();
    }

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit}>
                <input className={css.input}
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btn} type="submit">Search</button>
                <Toaster />
            </form>
        </header>
    );
};

export default SearchBar;
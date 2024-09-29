import React from "react";
import { FilteredDataContext } from "../Components/FilteredUsers";

export const HandleSearch = () => {
    const { search, setSearch, FilteredUsers } = React.useContext(FilteredDataContext);
    console.log('search)', search);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    id='searchText'
                    className='searchBox'
                    placeholder='Search for Friends'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search.length > 0 ? <FilteredUsers /> : null}
        </form>
    );
}
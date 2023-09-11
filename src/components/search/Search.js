import React, { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setNotices([]);

      const response = await fetch(
        `https://ws-public.interpol.int/notices/v1/red?forename=${debouncedSearch}&resultPerPage=200`
      );
      const data = await response.json();
      setNotices(data._embedded.notices);

      setLoading(false);
    }

    fetchData();
  }, [debouncedSearch]);
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {notices.map((notice) => {
        return (
          <div key={notice.entity_id}>
            {notice._links?.thumbnail?.href && (
              <img
                src={notice._links.thumbnail.href}
                width="100px"
                height="100px"
                alt={notice.name}
              />
            )}
            <div>
              <p>
                {notice.forename} {notice.name}
              </p>

              <p>{notice.date_of_birth}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;

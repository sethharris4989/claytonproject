import React, { useState, useEffect } from "react";
import Pagination from 'react-hooks-paginator';
import HomeCard from './HomeCard';
import { Main, HomeListContainer, SearchBar } from './Style.js';

const HomeList = (props) => {

  const [homes, setHomes] = useState([]);
  const [updatedHomes, setUpdatedHomes] = useState([]);
  const [pagedHomes, setPagedHomes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modelQuery, setModelQuery] = useState(props.model);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState("Loading...");
  const pageLimit = 20;

  const handleFilterChange = (e, filterType) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://fast-everglades-97829.herokuapp.com/homes").then(res => res.json())
      setHomes(result.Homes);
      setUpdatedHomes(result.Homes.filter(product => product.IsModel === modelQuery));
      setMessage("Sorry, No Results");
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setModelQuery(props.model);
  }, [props.model]);

  useEffect(() => {
    let filteredHomes = homes;
    if (searchQuery.length) {
      filteredHomes = filteredHomes.filter(item => item.Description.toLowerCase().includes(searchQuery.toLowerCase()) || item.HomeId.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    if (modelQuery !== "") {
      filteredHomes = filteredHomes.filter(product => product.IsModel === modelQuery)
    }
    setUpdatedHomes(filteredHomes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, modelQuery, offset])


  useEffect(() => {
    setPagedHomes(updatedHomes.slice(offset, offset + pageLimit));
  }, [offset, updatedHomes]);

  return (
    <Main>
      <HomeListContainer>
        <SearchBar
          type="text"
          value={searchQuery}
          onChange={(e) => handleFilterChange(e, "searchQ")}
          placeholder="Search for a home"
          autoFocus
        />
        {pagedHomes.length === 0 ?
          (<div>{message}</div>)
          : pagedHomes.map((item, key) => {
            return (
              <HomeCard
                key={key}
                title={item.Description}
                model={item.IsModel}
                id={item.HomeId}
                image={item.ThumbnailImage}
              />
            )
          })}
        <Pagination
          totalRecords={updatedHomes.length}
          pageLimit={pageLimit}
          pageNeighbours={1}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onClick={window.scrollTo(0, 0)}
        />
      </HomeListContainer>
    </Main>
  )
}

export default HomeList;
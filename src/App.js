import React, { useState } from "react";
import HomeList from './HomeList'
import { HeaderWrap, Container, Headline, FilterList, FilterListItem } from './Style.js';

const App = () => {

  const [state, setState] = useState({
    model: true
  });
  const handleFilterChange = (e) => {
    window.scrollTo(0, 0);
    setState({
      model: e,
    });
  };

  return (
    <React.Fragment>
      <HeaderWrap>
        <Container>
          <Headline>Home Inventory</Headline>
          <FilterList>
            <FilterListItem onClick={(e) => handleFilterChange(true)} color={state.model === true ? "#0075c9" : ""}>Inventory</FilterListItem>
            <FilterListItem onClick={(e) => handleFilterChange(false)} color={state.model === false ? "#0075c9" : ""}>Available</FilterListItem>
          </FilterList>
        </Container>
      </HeaderWrap>
      <HomeList {...state} />
    </React.Fragment>
  )
}

export default App;
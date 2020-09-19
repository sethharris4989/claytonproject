import styled from 'styled-components'

export const Main = styled.main`
  padding: 1rem 0rem;
`;

export const SearchBar = styled.input`
  padding: 10px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  background: transparent;
  border: 0px solid gray;
  border-bottom: 1px solid gray;
  border-top: 0px solid;
  border-left: 0px solid;
  border-right: 0px solid;
  color: gray;
  box-shadow: none;
  outline: none;
  width: 290px;
  max-width: 90%;
  font-size: .9rem;
  font-weight: 700; 
`;

export const HomeListContainer = styled.section`
  max-width: 940px;
  padding: 0rem 20px;
  margin: 0 auto 40px;
  position: relative;
  h1 {
    margin: 0rem;
  }
  .react-hooks-paginator {
    margin-top: 3rem;
  }
  .page-link {
    cursor: pointer;
  }
`;

export const FilterListItem = styled.li`
  margin-right: 1rem;
  text-transform: uppercase;
  color: ${props => props.color};
  border-bottom: ${props => props.color ? "2px solid #0075c9" : "none"};
  padding: .8rem 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer; 
  @media (max-width: 700px) {
    padding: .8rem 1rem;
  }
`;

export const HeaderWrap = styled.header`
  background: white;
  padding: 1rem 0rem 0rem;
  box-shadow: 2px 10px 30px #d7d7d7;
  position: sticky;
  top: 0;
  z-index: 9;
`;

export const FilterList = styled.ul`
  display: flex;
  list-style: none;
  margin: 1rem 0rem 0rem;
  padding: 0rem;
`;

export const Container = styled.div`
  max-width: 940px;
  padding: 0rem 20px;
  margin: 0 auto;
  position: relative;
`;

export const Headline = styled.h1`
  margin: 0rem 0rem 2rem 0rem;
  @media (max-width: 700px) {
    margin: 0rem 0rem 1rem 0rem;
    font-size: 1.7rem;
  }
`;


export const Card = styled.div`
  background: white;
  margin-bottom: 1.4rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 2px 19px #d9d9d9;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const CardInformation = styled.div`
  position: relative;
  flex-shrink: 1;
  h2 {
    margin: 1rem 0rem 1.4rem 0rem;
  }
  h5 {
    font-size: 1.1rem;
    margin: 0rem 0rem .4rem 0rem;
  }
  p {
    margin: 0rem;
  }
  @media (max-width: 700px) {
    order: 2;
    h2 {
      margin: 0rem 0rem 1rem 0rem;
    }
  }
`;

export const CardImage = styled.div`
  height: 180px;
  width: 300px;
  background-color: rgb(236, 236, 236);
  background-size: cover;
  background-position: 50%;
  flex-shrink: 0;
  @media (max-width: 700px) {
    order: 1;
    width: 100%;
    margin-bottom: 1rem;
  }
`;
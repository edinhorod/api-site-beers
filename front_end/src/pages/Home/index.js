import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { BeerContainer, Container, Header, PaginationContainer } from "./styles";

export function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState(localStorage.getItem("@mytapp:userName"))
  const [beers, setBeers] = useState([])
  const [totalBeers, setTotalBeers] = useState([])
  const [actualPage, setActualPage] = useState(1);

  const handleLogout = () => {
    localStorage.removeItem("@mytapp:authToken");
    navigate(`/`);
  };

  const getBeers = async (page) => {
    try {
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
      setBeers(response.data)
      setTotalBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const renderBeers = () => {
    return beers.map((item, index) => {
      return <div className="row" key={index.toString()}>
        <div className="col">
          <h2>
            {item.name} <br />
            <small>{item.tagline}</small>
          </h2>
        </div>
        <div className="col">
          <img src={item.image_url} />
        </div>
      </div>
    })
  }

  const goToNextPage = () => {
    let next = parseInt(actualPage) + 1;
    setActualPage(next);
    getBeers(next);
    goToTop();
  }

  const goToPreviousPage = () => {
    let previous = parseInt(actualPage) - 1;
    console.log(actualPage, previous);
    getBeers(previous);
    goToTop();
  }

  const renderNumberPages = () => {
    return totalBeers.map((item, index) => {
      index = index + 1
      return <button type="button" onClick={() => getCurrentPage(index)} className={index == actualPage ? "numbers active" : "numbers"}>{index}</button>
    })
  }

  const getCurrentPage = (page) => {
    setActualPage(page);
    getBeers(page);
    goToTop();
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    getBeers(actualPage);
  }, []);


  return <Container>
    <Header>
      <h1>Home</h1>

      <div>
        <span>Olá, {name}</span>
        <button type="button" onClick={handleLogout}>Sair</button>
      </div>

    </Header>

    <BeerContainer>
      {renderBeers()}

      <PaginationContainer>
        <button className="btn" type="button" onClick={goToPreviousPage}>{"<"}</button>
        <div className="content">
          {renderNumberPages()}
        </div>
        <button className="btn" type="button" onClick={goToNextPage}>{">"}</button>
      </PaginationContainer>
    </BeerContainer>
  </Container>
}
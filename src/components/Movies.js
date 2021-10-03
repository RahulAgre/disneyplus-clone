import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="" />
              </Link>
            </Wrap>
          ))}

        <Wrap>
          <img
            src="https://media.comicbook.com/2021/07/marvel-what-if-tv-series-poster-official-disney-plus-1274908.jpeg?auto=webp&width=1280&height=1897&crop=1280:1897,smart"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C28A458F3748A9550DA296E86458D6BE2CAA3D0483EDBB88013A1984F3D53CC7/scale?width=300&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C28A458F3748A9550DA296E86458D6BE2CAA3D0483EDBB88013A1984F3D53CC7/scale?width=300&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C28A458F3748A9550DA296E86458D6BE2CAA3D0483EDBB88013A1984F3D53CC7/scale?width=300&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C28A458F3748A9550DA296E86458D6BE2CAA3D0483EDBB88013A1984F3D53CC7/scale?width=300&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C28A458F3748A9550DA296E86458D6BE2CAA3D0483EDBB88013A1984F3D53CC7/scale?width=300&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C28A458F3748A9550DA296E86458D6BE2CAA3D0483EDBB88013A1984F3D53CC7/scale?width=300&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  overflow: hidden;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  margin: 15px 10px 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 8px 26px 30px -10px,
    rgb(0 0 0 / 73%) 8px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    &:hover {
      transform: scale(1.15);
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      border-color: rgba(249, 249, 249, 0.8);
    }
  }
`;

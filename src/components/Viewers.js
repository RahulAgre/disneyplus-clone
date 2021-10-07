import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Disney>
        <img src="/images/viewers-disney.png" alt="" />
      </Disney>
      <Pixar>
        <img src="/images/viewers-pixar.png" alt="" />
      </Pixar>
      <Marvel>
        <img src="/images/viewers-marvel.png" alt="" />
      </Marvel>
      <StarWars>
        <img src="/images/viewers-starwars.png" alt="" />
      </StarWars>
      <NatGeo>
        <img src="/images/viewers-national.png" alt="" />
      </NatGeo>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Disney = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 8px 26px 30px -10px,
    rgb(0 0 0 / 73%) 8px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    cursor: pointer;
    transform: scale(1.25);
    border-color: rgba(249, 249, 249, 0.8);
    background: url("/videos/disney.gif") repeat;
    background-size: 100% 100%;
  }
`;

const Pixar = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 8px 26px 30px -10px,
    rgb(0 0 0 / 73%) 8px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    cursor: pointer;
    transform: scale(1.25);
    border-color: rgba(249, 249, 249, 0.8);
    background: url("/videos/pixar.gif") repeat;
    background-size: 100% 100%;
  }
`;

const Marvel = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 8px 26px 30px -10px,
    rgb(0 0 0 / 73%) 8px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    cursor: pointer;
    transform: scale(1.25);
    border-color: rgba(249, 249, 249, 0.8);
    background: url("/videos/marvel.gif") repeat;
    background-size: 100% 100%;
  }
`;

const StarWars = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 8px 26px 30px -10px,
    rgb(0 0 0 / 73%) 8px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    cursor: pointer;
    transform: scale(1.25);
    border-color: rgba(249, 249, 249, 0.8);
    background: url("/videos/starwars.gif") repeat;
    background-size: 100% 100%;
  }
`;

const NatGeo = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 8px 26px 30px -10px,
    rgb(0 0 0 / 73%) 8px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    cursor: pointer;
    transform: scale(1.25);
    border-color: rgba(249, 249, 249, 0.8);
    background: url("/videos/natgeo.gif") repeat;
    background-size: 100% 100%;
  }
`;

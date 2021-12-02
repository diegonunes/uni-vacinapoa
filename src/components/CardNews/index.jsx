import React from 'react';
import { Container, Title } from './styles';

const CardNews = ({ data, handleOpenModal }) => {
  return (
    <Container activeOpacity={0.8} onPress={() => handleOpenModal(true, data.newsTitle, data.newsURI)}>
      <Title>{data.newsTitle}</Title>
    </Container>
  );
};

export default CardNews;

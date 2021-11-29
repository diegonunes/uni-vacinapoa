import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import CardDoses from '../../components/CardDoses';
import CardItem from '../../components/CardItem';
import CardNews from '../../components/CardNews';
import { Container, Title, SliderCard, SliderNews, SliderDoses, ContainerDoses, Icon } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import vacinados from '../../vacinados.json';

// https://api.covid19.especiaisg1.globo/api/vacina/info-pagina?format=json

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <Title>Progresso da Vacinação</Title>
        <SliderCard
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={vacinados}
          renderItem={({ item }) => <CardItem data={item} />}
        />
        <Title>Últimas Notícias</Title>
        <SliderNews showsVerticalScrollIndicator={false} data={[1, 2]} renderItem={({ item }) => <CardNews />} />
        <Title>Suas Doses</Title>
        <ContainerDoses>
          <SliderDoses
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3]}
            renderItem={({ item }) => <CardDoses />}
          />
          <Icon activeOpacity={0.7}>
            <FontAwesome name='plus' size={48} color='#044A05' />
          </Icon>
        </ContainerDoses>
      </ScrollView>
    </Container>
  );
};

export default Home;

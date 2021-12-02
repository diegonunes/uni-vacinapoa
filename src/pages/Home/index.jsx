import React, { useEffect, useState } from 'react';
import { Image, LogBox, Modal, ScrollView } from 'react-native';
import CardDoses from '../../components/CardDoses';
import CardItem from '../../components/CardItem';
import CardNews from '../../components/CardNews';
import { Container, Title, SliderCard, SliderNews, SliderDoses, ContainerDoses, Icon } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../../../assets/logo.png';
import api from '../../services/api';
import ModalLink from '../../components/ModalLink';

const Home = () => {
  const [vaccinated, setVaccinated] = useState([]);
  const [doses, setDoses] = useState([]);
  const [openNewsLink, setOpenNewsLink] = useState('false');
  const [news, setNews] = useState([]);
  const [newsURI, setNewsURI] = useState('');
  const [newsTitle, setNewsTitle] = useState('');

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    async function loadData() {
      const [dataDoses, dataVaccinated, dataNews] = await Promise.all([
        api.get('61a718bd01558c731ccbff6f/6'),
        api.get('61a7efb001558c731ccc7a31'),
        api.get('61a84dce0ddbee6f8b15ab81/1'),
      ]);
      setDoses(dataDoses.data);
      setVaccinated(dataVaccinated.data);
      setNews(dataNews.data);
    }
    loadData();
  }, []);

  function handleOpenModal(open, title, uri) {
    setOpenNewsLink(open);
    setNewsURI(uri);
    setNewsTitle(title);
  }

  return (
    <Container>
      <ScrollView>
        <Image source={logo} style={{ width: '100%', resizeMode: 'stretch', marginBottom: 14 }} />
        <Title>Progresso da Vacinação</Title>
        <SliderCard
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={vaccinated}
          renderItem={({ item }) => <CardItem data={item} keyExtractor={(item) => String(item.id)} />}
        />
        <Title>Últimas Notícias</Title>
        <SliderNews
          showsVerticalScrollIndicator={false}
          data={news}
          renderItem={({ item }) => (
            <CardNews data={item} keyExtractor={(item) => String(item.id)} handleOpenModal={handleOpenModal} />
          )}
          initialNumToRender={2}
        />
        <Title>Suas Doses</Title>
        <ContainerDoses>
          <SliderDoses
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={doses}
            renderItem={({ item }) => <CardDoses data={item} keyExtractor={(item) => String(item.id)} />}
          />
          <Icon activeOpacity={0.7}>
            <FontAwesome name='plus' size={48} color='#d3e0d3' />
          </Icon>
        </ContainerDoses>
      </ScrollView>
      <Modal animationType='slide' transparent={true} visible={openNewsLink}>
        <ModalLink link={newsURI} title={newsTitle} closeModal={() => setOpenNewsLink(false)} />
      </Modal>
    </Container>
  );
};

export default Home;

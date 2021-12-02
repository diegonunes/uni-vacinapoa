import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Modal } from 'react-native';
import { Container, SliderNews, Title } from './styles';
import CardNews from '../../components/CardNews';
import api from '../../services/api';
import logo from '../../../assets/logo.png';
import ModalLink from '../../components/ModalLink';

const News = () => {
  const [openNewsLink, setOpenNewsLink] = useState('false');
  const [news, setNews] = useState([]);
  const [newsURI, setNewsURI] = useState('');
  const [newsTitle, setNewsTitle] = useState('');

  useEffect(() => {
    async function loadNews() {
      const response = await api.get('61a84dce0ddbee6f8b15ab81/1');
      setNews(response.data);
    }
    loadNews();
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
        <Title>Últimas Notícias</Title>
        <SliderNews
          showsVerticalScrollIndicator={false}
          data={news}
          renderItem={({ item }) => (
            <CardNews data={item} keyExtractor={(item) => String(item.id)} handleOpenModal={handleOpenModal} />
          )}
        />
      </ScrollView>
      <Modal animationType='slide' transparent={true} visible={openNewsLink}>
        <ModalLink link={newsURI} title={newsTitle} closeModal={() => setOpenNewsLink(false)} />
      </Modal>
    </Container>
  );
};

export default News;

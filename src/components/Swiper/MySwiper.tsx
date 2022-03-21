import { Flex } from '@chakra-ui/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperItem } from './SwiperItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export function MySwiper() {
  const continents = [
    {
      continent: 'Europa',
      description: 'O continente mais antigo.',
      bgImage: 'europe',
      href: '/continent/europe',
    },
    {
      continent: 'Ásia',
      description: 'O continente mais populoso.',
      bgImage: 'asia',
      href: '/continent/asia',
    },
    {
      continent: 'América do Sul',
      description: 'Um continente de muitas belezas naturais.',
      bgImage: 'south_america',
      href: '/continent/south_america',
    },
    {
      continent: 'América do Norte',
      description: 'O continente das Big Techs',
      bgImage: 'north_america',
      href: '/continent/north_america',
    },
    {
      continent: 'África',
      description: 'O continente mais diversificado.',
      bgImage: 'africa',
      href: '/continent/africa',
    },
    {
      continent: 'Oceania',
      description: 'O continente dos animais exóticos.',
      bgImage: 'oceania',
      href: '/continent/oceania',
    },
  ];

  return (
    <Flex margin="auto" maxW="1240px" h={['260px', '450px']} my="10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {continents.map(({ continent, description, bgImage, href }) => (
          <SwiperSlide>
            <SwiperItem
              continent={continent}
              description={description}
              bgImage={bgImage}
              href={href}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}

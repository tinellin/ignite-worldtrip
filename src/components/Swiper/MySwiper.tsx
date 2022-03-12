import { Flex } from '@chakra-ui/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperItem } from './SwiperItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function MySwiper() {
  return (
    <Flex margin="auto" h="450px" w="1240px" my="10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SwiperItem
            continent="Europa"
            description="O continente mais antigo."
            bgImage="europe"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperItem
            continent="Ásia"
            description="O continente mais populoso."
            bgImage="asia"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

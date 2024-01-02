import {
  Box,
  Heading,
  color,
  Image,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../asserts/img1.jpg';
import img2 from '../asserts/img2.jpg';
import img3 from '../asserts/img3.jpg';
import img4 from '../asserts/img4.jpg';
import img5 from '../asserts/img5.jpg';
import serviImg from '../asserts/our-services.jpg';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '80%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  padding: '4px',
  size: '4xl',
  backgroundColor: 'whiteAlpha.500',
  color: 'black',

  // bgColor={"whiteAlpha.300"} color={"black"}
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          borderBottom={'2px solid'}
          w={'fit-content'}
          margin={'auto'}
        >
          Our Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={serviImg}
            h={['40', '400']}
            borderRadius={'6%'}
            filter={'hue-rotate(-120deg)'}
            backgroundPosition={'center'}
            boxShadow={'1px 1px 15px white'}
          />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            "In the rapidly evolving tech landscape, innovations abound, shaping
            the future of digital transformation. Cutting-edge technologies like
            artificial intelligence, blockchain, and the Internet of Things are
            revolutionizing industries. From smart cities to quantum computing
            breakthroughs, the possibilities seem limitless. Startups and
            established tech giants alike are racing to develop disruptive
            solutions, pushing boundaries and fostering a culture of continuous
            improvement. Cybersecurity remains a paramount concern, with the
            constant threat of data breaches and malicious attacks. As cloud
            computing becomes ubiquitous, the demand for skilled professionals
            in areas like DevOps and machine learning is soaring. The tech
            ecosystem thrives on collaboration, open-source contributions, and a
            relentless pursuit of excellence."
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      {/* image 1 */}

      <Box w="full" h={'100vh'}>
        <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading {...headingOptions}>Tech is Future</Heading>
      </Box>

      {/* image 2 */}

      <Box w="full" h={'100vh'}>
        <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading {...headingOptions}>Code changes world</Heading>
      </Box>

      {/* image 3 */}

      <Box w="full" h={'100vh'}>
        <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading {...headingOptions}>Code Code Code</Heading>
      </Box>

      {/* image 4*/}

      <Box w="full" h={'100vh'}>
        <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading {...headingOptions}>Hello world</Heading>
      </Box>

      {/* image 5 */}

      <Box w="full" h={'100vh'}>
        <Image src={img5} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading {...headingOptions}>New Future is here</Heading>
      </Box>
    </Carousel>
  );
};
export default Home;

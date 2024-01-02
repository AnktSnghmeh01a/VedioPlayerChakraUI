import React, { useState } from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  IconButton,
  Input,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa'; // Import the required icons
// videos
import Vedio1 from '../vedios/vedio1.mp4';
import Vedio2 from '../vedios/Vedio2.mp4';
import Vedio3 from '../vedios/Vedio3.mp4';
import Vedio4 from '../vedios/vedio4.mp4';
import Vedio5 from '../vedios/vedio5.mp4';
import Vedio6 from '../vedios/vedio6.mp4';
import Vedio7 from '../vedios/vedio7.mp4';
import Vedio8 from '../vedios/vedio8.mp4';
import Vedio9 from '../vedios/vedio9.mp4';
import Vedio10 from '../vedios/vedio10.mp4';
import Vedio11 from '../vedios/vedio11.mp4';
import Vedio12 from '../vedios/vedio12.mp4';

const VedioArray = [
  Vedio1,
  Vedio2,
  Vedio3,
  Vedio4,
  Vedio5,
  Vedio6,
  Vedio7,
  Vedio8,
  Vedio9,
  Vedio10,
  Vedio11,
  Vedio12,
];

const ParagraphsArray = [
  'Explore the latest advancements in technology with Video 1. Discover cutting-edge innovations and stay ahead in the fast-paced tech world.',
  'Dive into the world of artificial intelligence and machine learning in Video 2. Learn how these technologies are reshaping industries and solving complex problems.',
  'Uncover the secrets of cybersecurity in Video 3. Understand the importance of protecting digital assets and staying vigilant in the face of evolving threats.',
  'Embark on a journey of virtual reality with Video 4. Experience a unique blend of imagination and technology that transports you to new and exciting realms.',
  'Delve into the world of coding and programming in Video 5. Explore the power of software development and its impact on shaping the digital landscape.',
  'Get a detailed description of the latest gadgets and tech trends in Video 6. Stay informed about the coolest tech gadgets and stay on the cutting edge of consumer electronics.',
  'Explore the content creation tools and platforms in Video 7. Learn about the tools content creators use to produce engaging and captivating digital content.',
  'Get a detailed insight into the latest tech trends with Video 8. Understand how emerging technologies are transforming businesses and our daily lives.',
  'Discover the fascinating world of space technology in Video 9. Learn about the latest advancements in space exploration and satellite technology.',
  'Unravel the mysteries of quantum computing in Video 10. Explore the potential of quantum computers and their impact on solving complex problems.',
  'Learn about the role of technology in environmental sustainability with Video 11. Discover how tech innovations are contributing to a greener and more sustainable future.',
  'Get a detailed overview of the latest smartphones and mobile tech in Video 12. Stay updated on the newest features and innovations in the world of mobile devices.',
];

const Vedios = () => {
  const [videoSrc, setVideoSrc] = useState(VedioArray[0]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleVideoChange = (newSrc, index) => {
    setVideoSrc(newSrc);
    setCurrentVideoIndex(index);
    // Reset the likes and dislikes when changing the video
    setLikes(0);
    setDislikes(0);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleUnlike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <Stack direction={['column', 'row']} minH={'100vh'} p={'1em'}>
      {/* Left stack */}
      <VStack w={'full'} align="flex-start">
        <video
          controls
          controlsList="no-download"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack
          alignItems={'flex-start'}
          p={'3'}
          w={'full'}
          overflowY={'hidden'}
        >
          {/* Heading dynamically changes based on the selected video */}
          <Heading>{`Video ${currentVideoIndex + 1}`}</Heading>
          {/* Paragraph dynamically changes based on the selected video */}
          <Text marginBottom={'1em'}>{ParagraphsArray[currentVideoIndex]}</Text>

          {/* Like, Unlike, Comment section */}
          <HStack spacing={4}>
            <IconButton
              icon={<FaThumbsUp />}
              colorScheme="teal"
              aria-label="Like"
              onClick={handleLike}
            />
            <Text>{likes}</Text>

            <IconButton
              icon={<FaThumbsDown />}
              colorScheme="red"
              aria-label="Unlike"
              onClick={handleUnlike}
            />
            <Text>{dislikes}</Text>

            <Link href="#comments" color="blue">
              <FaComment />
            </Link>
          </HStack>

          {/* Comment input field */}
          <Input placeholder="Add a comment..." id="comments" marginTop={'0.5em'}/>
        </VStack>
      </VStack>

      {/* Right stack */}
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {/* Render buttons for each video with increased size */}
        {VedioArray.map((item, index) => (
          <Button
            key={index}
            variant={'ghost'}
            colorScheme="purple"
            onClick={() => handleVideoChange(item, index)}
          >
            {`Video ${index + 1}`}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Vedios;

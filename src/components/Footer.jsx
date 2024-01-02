import {Box,Stack,VStack,Heading,HStack,Button,Input,Text} from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend} from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      
      <Stack direction={['column','row']}>

        <VStack w={'full'} px={'4'} alignItems={'stretch'}>

          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Subscribe to get updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'} > 
           
            <Input placeholder='Enter Email here' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
            <Button 
            p={'0'} 
            colorScheme='purple'
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'}/>
            </Button>
          </HStack>
        </VStack>
         
         <VStack w={'full'}
          borderLeft={['none','1px solid white']}
          borderRight={['none','1px solid white']}
         >


         <Heading textTransform={'uppercase'} textAlign={'center'}>Tech hub</Heading>
         <Text fontStyle={'italic'}>All right reserved</Text>
         </VStack>


        
         <VStack 
         w={'full'}   
         >
          <Heading
           size={'md'}
           textTransform={'uppercase'}

          >Social Media</Heading>
        {/* Button 1 */}
           <button
           variant={'link'} colorScheme={'white'} >
             
             <a href="/" target='blank'>Youtube</a>

           </button>
              
        {/* Button 2 */}
         
        <button
           variant={'link'} colorScheme={'white'} >
             
             <a href="https://twitter.com/itzAnkitCodes01" target='blank'>Twitter</a>

           </button>

       {/* Button 3 */}
       <button
           variant={'link'} colorScheme={'white'} >
             
             <a href="/" target='blank'>Linkdin</a>

           </button>

         </VStack>


      </Stack>
        
     

    </Box>
  )
}

export default Footer
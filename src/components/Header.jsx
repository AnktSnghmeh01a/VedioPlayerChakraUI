import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack, }  from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';
const Header = () => {

const  {isOpen,onOpen,onClose} = useDisclosure();
   
return (

     <>
      <Button 
      position={'fixed'} 
      top={'4'} 
      left={'4'} 
      colorScheme='purple'
      p={'0'}
      height={'10'}
      width={'10'}
      borderRadius={'full'}
      onClick={onOpen}
      zIndex={'100'}
      >
      
        <BiMenuAltLeft size={'20'} />
      
      </Button>
      
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/> 
         <DrawerContent>
           <DrawerCloseButton/>

             <DrawerHeader>TECH HUB</DrawerHeader>
          
           <DrawerBody>
              
           <VStack alignItems={'flex-start'} >
            {/* Button 1 */}
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/home'} >Home</Link>
              </Button>
 
            {/* Button 2 */}
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/vedios'}>Vedios</Link>
              </Button>
 
          {/* Button 3 */}
          <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/vedios?category=free'}>Free Vedios</Link>
              </Button>
 
          {/* Button 4 */}
          <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/upload'}>Upload Vedios</Link>
              </Button>
 

           </VStack>

         
           <HStack pos={'absolute'} bottom={'10'} >
 
              <Button onClick={onClose}  colorScheme='purple'>
                <Link to={'/login'}>Log in</Link>   
              </Button>        



              <Button onClick={onClose}  colorScheme='purple' variant={'outline'}>
                <Link to={'/signup'}>Sign up</Link>   
              </Button> 

           </HStack>

           </DrawerBody>
         </DrawerContent>

      </Drawer>
     
     </>

  )
}

export default Header;
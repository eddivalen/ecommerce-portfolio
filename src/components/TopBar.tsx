import Image from 'next/image'
import Link from 'next/link'
import {Container, Flex, Box} from '@chakra-ui/react'
import { CalendarIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export function TopBar() {
  return (
    <Box bg="black" w="100%" p={2}>
      <Container as={Flex} color="white" justifyContent="space-between" fontSize="xs" size="lg">
        <Flex gap="1.5rem">
          <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><PhoneIcon /> +38 (050) 12 34 567</Flex>
        
          <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><EmailIcon /> Ukraine, Kyiv, Khreschtayk 1</Flex>
      
          <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><CalendarIcon /> All week 24/7</Flex>
        </Flex>
        <Flex gap="1rem">
          <Link href="#"><Image src="/ico-facebook.svg" alt="Search Icon" width="24" height="24" /></Link>
    
          <Link href="#"><Image src="/ico-twitter.svg" alt="Search Icon" width="24" height="24" /></Link>
      
          <Link href="#"><Image src="/ico-instagram.svg" alt="Search Icon" width="24" height="24" /></Link>
        
          <Link href="#"><Image src="/ico-pinterest.svg" alt="Search Icon" width="24" height="24" /></Link>
        </Flex>
      </Container>
    </Box>
  );
}
export default TopBar;
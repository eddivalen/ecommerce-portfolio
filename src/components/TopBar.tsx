import Image from 'next/image'
import Link from 'next/link'
import {Flex} from '@chakra-ui/react'
import { SearchIcon, InfoIcon, StarIcon, CheckCircleIcon, EmailIcon, PhoneIcon, CalendarIcon } from '@chakra-ui/icons'

export function TopBar() {
  return (
    <Flex bg='black' w='100%' p={2} color='white' justifyContent="space-between" fontSize="xs">
      
      <Flex gap="1.5rem">
        <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><PhoneIcon /> +38 (050) 12 34 567</Flex>
      
        <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><EmailIcon /> Ukraine, Kyiv, Khreschtayk 1</Flex>
    
        <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><CalendarIcon /> All week 24/7</Flex>
      </Flex>
      <Flex gap="1rem">
        <Link href="#"><SearchIcon /> </Link>
  
        <Link href="#"><InfoIcon /> </Link>
    
        <Link href="#"><StarIcon /> </Link>
      
        <Link href="#"><CheckCircleIcon /> </Link>
      </Flex>
    </Flex>
  );
}
export default TopBar;
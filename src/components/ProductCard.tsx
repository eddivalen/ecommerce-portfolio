import { Product } from "@/pages";
import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Flex, Box, Text, Trunc } from "@chakra-ui/react";
import Image from "next/image";


export function ProductCard({image, title, price, rating}: Product) {
  return (<Box width="100%" padding="1rem">
    <Box backgroundColor="gray.100" padding="0.5rem">
      <AspectRatio position="relative" ratio={1} maxW="100%" marginBottom="1rem" mixBlendMode="multiply">
        <Image src={image} alt="" fill={true} style={{
          objectFit: "contain"
        }} />
      </AspectRatio>
    </Box>
    <Text color="gray.500" marginBottom="0.75rem" noOfLines={2}>{title}</Text>
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontWeight="bold">$ {price}</Text>
      <Flex>
        <StarIcon color="orange" />
        <StarIcon color="orange" />
        <StarIcon color="orange" />
        <StarIcon color="orange" />
        <StarIcon color="gray.300" />
      </Flex>
    </Flex>
  </Box>);
}
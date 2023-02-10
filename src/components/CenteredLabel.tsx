import * as React from 'react';
import { Flex, Box } from '@chakra-ui/react'

interface ICategoryLabelProps {
  children: React.ReactNode;
}

export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({children}) => {
  return <Flex display="flex" alignItems="center" justifyContent="center" height="100%"><Box position="relative" zIndex="1" bgColor
  ="white" padding="1rem 1.5rem" width="fit-content" textTransform="uppercase" fontWeight="bold" borderRadius="0.25rem">{children}</Box></Flex>
};

import { GetServerSidePropsContext } from "next";
import Head from 'next/head'

import { Box, Container, Flex } from "@chakra-ui/react";

import  Header  from '../components/Header'
import TopBar  from '../components/TopBar'
import { HomeHeroCategories } from '@/components/HomeHeroCategories'
import { Categories } from '@/models/Categories'
import { AdvantageItem } from "@/components/AdvantageItem";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}


type Props = {
  products: Product[],
  categories: Categories[]
}


export default function Home( { products, categories } : Props) {
  return (
    <>
      <Head>
        <title>eCommerce Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TopBar />
        <Box marginBottom="2rem">
          <Header />
        </Box>
      <main>
        <Container size="lg">
          <HomeHeroCategories categories={categories} />
        <Flex justifyContent="space-between" margin="2rem 0">
          <AdvantageItem title="Free Shipping" content="On all UA order or orders above $100" icon="/ico-truck.svg" />  
          <AdvantageItem title="30 days return" content="Simply return it within 30 days for an exchange" icon="/ico-return.svg" />  
          <AdvantageItem title="Support 24/7" content="Contact us 24 hours a day, 7 days a week" icon="/ico-support.svg" />  
        </Flex>            
        </Container>
  
      </main>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext){
  const products = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());

  const categories = await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json());
  return {
    props: {
      products,
      categories
    }
  }
}
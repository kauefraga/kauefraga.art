import React from 'react';
import {
  Flex,
  Text,
  Heading,
  Avatar,
  Card,
  Inset,
} from '@radix-ui/themes';
import { ArtCard } from '@/components/artcard';

export default function Home() {
  return (
    <Flex
      direction="column"
      gap="4"
      align="center"
    >
      <Avatar
        size="9"
        alt="Artwork made by Aron (@arorok_)."
        src="/kauemago.png"
        fallback="K"
      />

      <Heading>
        Hello! My name is <span translate="no">Kauê</span> 👋
      </Heading>
      <Flex justify="center" width="max-content" wrap="wrap">
        <Text as="p" size="4">
          I start to learn about drawing right after i get my first graphic tablet (which was a Wacom CTL-472).
        </Text>
      </Flex>

      <Flex
        align="center"
        justify="center"
        gap="4"
        wrap="wrap"
      >
        <ArtCard artName="Bolas" src="/bolas.png" />
        <ArtCard artName="Céu e Formas" src="/ceueformas.png" />
        <ArtCard artName="Rua" src="/rua.png" />
      </Flex>
    </Flex>
  )
}

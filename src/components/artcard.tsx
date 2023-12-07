import React from 'react';
import {
  Inset,
  Card,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';

interface ArtCardProps {
  artName: string
  src: string
}

export const ArtCard: React.FC<ArtCardProps> = ({ artName, src }) => {
  return (
    <Card size="2">
      <Inset
        clip="padding-box"
        side="top"
        pb="current"
      >
        <Image
          style={{
            objectFit: "cover",
          }}
          src={src}
          alt={`This artwork is called "${artName}."`}
          width="250"
          height="200"
        />
      </Inset>
      <Text>{artName}</Text>
    </Card>
  )
}

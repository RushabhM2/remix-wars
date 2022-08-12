import { Card, Image, Text, Badge, Group } from '@mantine/core';
import { Link } from "@remix-run/react";
import { Film }from '../lib/films'

export default function FilmCard(props: any) {
  
  const {film, resource} = props
  console.log('film', film);
  
  function getIdFromUrl (url: string) {
    return url[url.length-2]
  }
  
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>EPISODE {film.episode_id}: {film.title}</Text>
        <Badge color="pink" variant="light">
          {film.release_date}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {film.opening_crawl}
      </Text>

      <Link to={`/${resource}/${getIdFromUrl(film.url)}`}>
        More information
      </Link>
    </Card>
  );
}
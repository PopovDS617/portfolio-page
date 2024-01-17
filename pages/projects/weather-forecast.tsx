import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';
const Project = () => {
  return (
    <ArticleLayout title="Weather forecast">
      <Container>
        <ProjectTitle>
          Weather forecast <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText
            localeFile="projects"
            text="weatherForecasctDescription"
          />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://popov-forecast.vercel.app/" isExternal>
              popov-forecast.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>TypeScript, Next.js, Tailwind, framer motion </span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/microservice-weather-forecast"
              isExternal
            >
              github.com/PopovDS617/microservice-weather-forecast
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/weather-forecast/shot-1.jpg" />
        <ProjectImage src="/images/projects/weather-forecast/shot-2.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;

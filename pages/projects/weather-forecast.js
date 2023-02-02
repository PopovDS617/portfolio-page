import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectInfo } from '../../components/project/ProjectInfo';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import TranslatedText from '../../components/TranslatedText';
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
        <List ml={4} my={4} fontSize={18}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://popov-forecast.vercel.app/" isExternal>
              https://popov-forecast.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>TypeScript, NextJS, Tailwind, framer motion </span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/microservice-weather-forecast"
              isExternal
            >
              https://github.com/PopovDS617/microservice-weather-forecast
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

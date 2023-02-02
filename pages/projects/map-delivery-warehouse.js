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
    <ArticleLayout title="Map. Delivery from a warehouse">
      <Container>
        <ProjectTitle>
          Map. Delivery from a warehouse <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText
            localeFile="projects"
            text="mapWarehouseDescription"
          />
        </Paragraph>
        <List ml={4} my={4} fontSize={18}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link
              href="https://map-warehouse-to-delivery-point.vercel.app/"
              isExternal
            >
              https://map-warehouse-to-delivery-point.vercel.app{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Javascript, React, TomTom SDK</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/map-warehouse-to-delivery-point"
              isExternal
            >
              https://github.com/PopovDS617/map-warehouse-to-delivery-point
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/map-warehouse/shot-1.jpg" />
        <ProjectImage src="/images/projects/map-warehouse/shot-2.jpg" />
        <ProjectImage src="/images/projects/map-warehouse/shot-3.jpg" />
        <ProjectImage src="/images/projects/map-warehouse/shot-4.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;

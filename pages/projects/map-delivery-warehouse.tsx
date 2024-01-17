import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

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
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link
              href="https://map-warehouse-to-delivery-point.vercel.app/"
              isExternal
            >
              map-warehouse-to-delivery-point.vercel.app{' '}
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
              github.com/PopovDS617/map-warehouse-to-delivery-point
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

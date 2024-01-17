import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

const Project = () => {
  return (
    <ArticleLayout title="url shortener">
      <Container>
        <ProjectTitle>
          URL shortener <ProjectInfo>2023</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText
            localeFile="projects"
            text="urlShortenerDescription"
          />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://geturl.vercel.app/" isExternal>
              geturl.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>MERN, Tailwind, framer-motion</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/url-shortener-MERN"
              isExternal
            >
              github.com/PopovDS617/url-shortener-MERN
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/url-shortener/shot-1.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;

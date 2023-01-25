import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  List,
  ListItem,
  Icon,
  ListIcon,
  UnorderedList
} from '@chakra-ui/react';
import Section from '../components/Section';
import { Paragraph } from '../components/styles/Paragraph';
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/styles/Bio';
import ArticleLayout from '../components/layouts/ArticleLayout';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import useTranslation from 'next-translate/useTranslation';

const StackPage = () => {
  const { t } = useTranslation('common');

  return (
    <ArticleLayout>
      <Container>
        <Box display={{ md: 'flex' }}>
          
            <Heading as="h2" variant="page-title" textAlign={{ sm: 'justify' }}>
              {t('title')}
            </Heading>
            <Paragraph>разработчик из России</Paragraph>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
           
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph fontSize={20}>
            Hello this is mine description hello and welcome
          </Paragraph>
          
        </Section>
        { <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            <BioSection>
              <BioYear>2000</BioYear>
            </BioSection>
          </Heading>
        </Section> }
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('hobbiesTitle')}
          </Heading>

          <List fontSize={20}>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie1')}
            </ListItem>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie2')}
            </ListItem>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie3')}
            </ListItem>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie4')}
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('contactsTitle')}
          </Heading>
        
             
             
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default StackPage;

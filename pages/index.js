import {
    Image,
    Container,
    Box,
    Heading,
    useColorModeValue,
    Button,
    SimpleGrid,
    List,
    ListItem,
    Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {IoLogoGithub, IoLogoInstagram} from 'react-icons/io5'
import GridItem from '../components/grid-item'

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                align="center"
            >
                Hello, I&apos;m a full-stack developer based in Spain!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jaime Cabero Creus
                    </Heading>

                    <p> Software Engineer (Designer / Developer)</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/jaime.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Jaime is a software engineer and a full-stack developer
                    based in La Coruña. He is very passionate about
                    technologie so he decided to learn how to create digital
                    products, following good engineering practices, from
                    planning and designing to the implementation of final
                    functional products. When not online, he enjoys playing
                    sports like paddle or researching in other knowledge areas,
                    mainly in the world of finance and investiments.
                </Paragraph>
                <Box align="center" my={5}>
                    <NextLink href="/works">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme={useColorModeValue('yellow','teal')}
                            textColor={useColorModeValue('white', 'black')}
                            /*
                            textColor={useColorModeValue('white', 'black')}
                            */
                            
                        >
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Santiago de Compostela, Spain.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Completed the Computer Engineering Degree at University of
                    La Coruña.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Completing the Master&apos;s Degree in Computer Engineering at
                    the University of La Coruña. Also working at Odeene
                    Engineering.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ❤
                </Heading>
                <Paragraph>
                    Music, Writing, Traveling, Sports, Movies, Finances,
                    Gastronomy
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading
                    as="h3"  variant="section-title"
                >
                    Around the web
                </Heading>
                <List>
                    <ListItem>
                        <NextLink href="https://github.com/CanDveloper" target="_blank" >
                            <Button variant="ghost" colorScheme={useColorModeValue('teal','teal')} leftIcon={<Icon as={IoLogoGithub}/>}>
                                @CanDveloper
                            </Button>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href="https://github.com/CanDveloper" target="_blank" >
                            <Button variant="ghost" colorScheme={useColorModeValue('teal','teal')} leftIcon={<Icon as={IoLogoInstagram}/>}>
                                @CanDveloper
                            </Button>
                        </NextLink>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}

export default Page

import next from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    alig-items: center;
    height: 50px;
    line-height: 25px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
        transform-duration: 5s;
    }
`

const Logo = () => {
    const blackRabbitVector = `/black_rabbit_vector${useColorModeValue(
        '',
        '-dark'
    )}.svg`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image
                        src={blackRabbitVector}
                        width={27}
                        height={27}
                        alt="logo"
                    />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Jaime Cabero Creus
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
export default Logo

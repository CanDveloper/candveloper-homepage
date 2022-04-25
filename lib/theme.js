import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#EAE6F0', '#202023')(props)
        }
    })

    /** Colores posibles:
     * #E9EAEC - Azul hielo
     * #B7CFDC - Azul mas oscuro
     * #C3CEDA - Azul grisaceo
     * #D9E4EC - Gray blue
     * #ECE3F0 - violetilla
     * #EAE6F0 - violetilla hielo
     * #EFE7D3 - Normal de siempre
     * #B1D8B7 - Verde claro
     * #87ACA3 - Verde azulado
     * #BFD7ED - Baby Blue
     * #D4F1F4 - azul hielo baby
     * #DEE2EC - mystic blue
     * #EAE7FA - Purple Haze
     * #CBC7FC - priwinkle
     * #EAE6F0 - Lilac
     * #A1A9FE - Lila oscuro
     * #b5abe3 - Lila muy bonito
     * #CADEDF - Verde clarito
     * 
     * **/
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 4,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Poppins'"
}

const colors = {
    grassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme

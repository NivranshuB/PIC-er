import { extendTheme } from "@chakra-ui/react";

const Button = {
    baseStyle: {
        borderRadius: '8',
        // hide the blue focused border when clicking
        _focus: {
            boxShadow: 'none',
        }
    },
    variants: {
        solid: {
            bg: 'accent',
            color: 'white',
        },
        borderless: {
            color: 'accent',
            _hover: {
                background: 'accent',
                color: 'white',
            },
        },
        borderlessWhite: {
            color: 'white',
            _hover: {
                background: 'accent',
            },
            
        }
    }
}

const theme = extendTheme({
    styles: {
        global: {
            body: {
                // global background colour and text colour
                bg: 'background',
                color: 'white',
            }
        }
    },
    colors: {
        background: '#1B1B1B',
        lighterBackground: '#333333',
        accent: '#FF6B6B',
    },
    components: {
        Button,
    }
});

export default theme;
import { extendTheme } from "@chakra-ui/react";

const Button = {
    baseStyle: {
        borderRadius: '8',
        // hide the blue focused border when clicking
        _focus: {
            boxShadow: 'none',
        },
        _active: {
            bg: 'accent',
        },
    },
    variants: {
        solid: {
            bg: 'accent',
            color: 'white',
            width: '120px',
            _hover: {
                bg: 'white',
                color: 'accent',
            },
            _active: {
                bg: 'accent',
            }
        },
        grey: {
            bg: 'lighterBackground',
            width: '120px',
            _hover: {
                bg: 'white',
                color: 'accent',
            },
        },
        borderless: {
            color: 'accent',
            _hover: {
                bg: 'accent',
                color: 'white',
            },
            _active: {
                bg: 'white',
                color: 'accent',
            }
        },
        borderlessWhite: {
            color: 'white',
            _hover: {
                bg: 'accent',
            },
            _active: {
                bg: 'white',
                color: 'accent',
            }
        }
    }
}

const Input = {
    baseStyle: {
        field: {
            bg: 'background',
            color: 'white',
            _focus: {
                border: '1px',
                borderColor: 'accent',
            }
        },
    },
    defaultProps: {
        variant: '',
    }
}

const CloseButton = {
    baseStyle: {
        bg: 'accent',
        _focus: {
            boxShadow: 'none',
        },
        _hover: {
            bg: 'white',
            color: 'accent',
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
        Input,
        CloseButton,
    }
});

export default theme;
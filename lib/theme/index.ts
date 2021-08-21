import { extendTheme } from '@chakra-ui/react';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button';
import { Textarea } from './Textarea';

export const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, serif',
  },
  components: {
    Button,
    Input,
    Select,
    Textarea,
  },
});

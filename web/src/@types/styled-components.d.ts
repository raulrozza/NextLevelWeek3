import 'styled-components';
import defaultColors from '../config/defaultColors';
import defaultTypography from '../config/defaultTypography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof defaultColors;
    typography: typeof defaultTypography;
  }
}

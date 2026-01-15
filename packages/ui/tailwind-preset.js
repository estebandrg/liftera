const { colorTokens } = require('./tokens/colors.ts');

const createColorScale = (colorScale) => {
  return Object.entries(colorScale).reduce((acc, [key, value]) => {
    acc[key] = `rgb(${value} / <alpha-value>)`;
    return acc;
  }, {});
};

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: createColorScale(colorTokens.primary),
        secondary: createColorScale(colorTokens.secondary),
        success: createColorScale(colorTokens.success),
        error: createColorScale(colorTokens.error),
        warning: createColorScale(colorTokens.warning),
        info: createColorScale(colorTokens.info),
        gray: createColorScale(colorTokens.gray),
        
        background: {
          DEFAULT: 'rgb(var(--color-background-0) / <alpha-value>)',
          secondary: 'rgb(var(--color-background-50) / <alpha-value>)',
          tertiary: 'rgb(var(--color-background-100) / <alpha-value>)',
          inverse: 'rgb(var(--color-background-950) / <alpha-value>)',
        },
        foreground: {
          DEFAULT: 'rgb(var(--color-typography-900) / <alpha-value>)',
          secondary: 'rgb(var(--color-typography-700) / <alpha-value>)',
          tertiary: 'rgb(var(--color-typography-500) / <alpha-value>)',
          inverse: 'rgb(var(--color-typography-0) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--color-outline-200) / <alpha-value>)',
          focus: 'rgb(var(--color-indicator-primary) / <alpha-value>)',
        },
      },
    },
  },
};

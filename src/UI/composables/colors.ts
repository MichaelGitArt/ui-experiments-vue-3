import { computed, Ref } from 'vue';

type ColorValue = string | undefined | null;

export const useColor = (colors: {
  background?: Ref<ColorValue>;
  text?: Ref<ColorValue>;
}) => {
  const colorClasses = computed(() => {
    const classes: string[] = [];
    if (colors.background) {
      classes.push(`bg-${colors.background}`);
    }

    if (colors.text) {
      classes.push(`text-${colors.text}`);
    }

    return classes;
  });

  return {
    colorClasses,
  };
};

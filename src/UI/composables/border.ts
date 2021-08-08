// Utilities
import { computed } from 'vue';
import { propsFactory } from '../util';

// Types
export interface BorderProps {
  border: boolean;
}

export const makeBorderProps = propsFactory({
  border: {
    type: Boolean,
    default: false,
  },
});

export const useBorder = (props: BorderProps, name: string) => {
  const borderClasses = computed(() => {
    const classes: string[] = [];

    if (props.border) {
      classes.push(`${name}--border`);
    }

    return classes;
  });

  return {
    borderClasses,
  };
};

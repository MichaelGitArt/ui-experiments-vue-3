// Utilities
import { computed } from 'vue';
import { propsFactory } from '@UI/util';

const predefinedSizes = ['small', 'default', 'large'];

export interface SizeProp {
  size?: string | number;
}

export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'default',
  },
});

export const useSize = (props: SizeProp, name: string) => {
  const sizeClasses = computed(() => {
    return predefinedSizes.includes(props.size as string)
      ? `${name}--size-${props.size}`
      : null;
  });

  return {
    sizeClasses,
  };
};

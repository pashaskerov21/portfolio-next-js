import * as React from 'react';

const NextImage = (props: any) => {
  const { priority, ...rest } = props; // priority-i çıxarırıq
  return React.createElement('img', rest);
};

export default NextImage;

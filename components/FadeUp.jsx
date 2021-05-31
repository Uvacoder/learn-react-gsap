import * as React from 'react';
import { Tween } from 'react-gsap';

export default function FadeUp({ children, stagger }) {
  return (
    <Tween
      from={{ y: '50px', opacity: 0 }}
      to={{ y: 0, opacity: 1, visibility: 'visible' }}
      duration={1}
      ease='power2.out'
      stagger={stagger}
    >
      {InvisibleChildren(children)}
    </Tween>
  );
}

export const InvisibleChildren = (children) =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: `invisible ${child.props.className ?? ''}`,
    })
  );

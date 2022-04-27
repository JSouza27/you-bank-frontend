import React, { useCallback, useContext } from 'react';
import { motion } from 'framer-motion';
import { NavContext } from '../../../../contexts/MenuContext';
import Button from './style';

const HambugerButton = () => {
  const { isOpenMenu, toggleMenu } = useContext(NavContext);
  const transition = { duration: 0.33 };
  const color = 'hsl(0, 0%, 100%)';

  const Path = useCallback((props: any) => (
    <motion.path
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
  ), []);

  return (
    <Button
      type="button"
      onClick={() => toggleMenu()}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpenMenu ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: color },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: color },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke={color}
          animate={isOpenMenu ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpenMenu ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: color },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: color },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
};

export default HambugerButton;

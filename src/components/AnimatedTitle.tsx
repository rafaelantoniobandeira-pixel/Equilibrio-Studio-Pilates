/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.01, // ultra-precise cinematic stagger
    },
  },
};

const letterVariants = {
  hidden: {
    y: '100%',
    rotateZ: 6,
    scale: 0.82,
    opacity: 0,
  },
  visible: {
    y: '0%',
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1], // premium custom decelerating curve
    },
  },
};

export default function AnimatedTitle({ children, className = '', as: Component = 'h2' }: AnimatedTitleProps) {
  // Recursive engine to process text and sub-elements safely
  const renderChildren = (node: ReactNode): ReactNode => {
    if (typeof node === 'string') {
      const words = node.split(' ');
      return words.map((word, wordIndex) => {
        if (word === '') return null;
        
        const chars = Array.from(word);
        
        return (
          <React.Fragment key={wordIndex}>
            <span 
              className="inline-block whitespace-nowrap overflow-hidden pb-[0.22em] mb-[-0.22em] pt-[0.1em] mt-[-0.1em] pr-[0.08em] mr-[-0.08em] align-bottom"
              style={{ lineBreak: 'anywhere' }}
            >
              {chars.map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterVariants}
                  className="inline-block origin-bottom-left will-change-transform"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </React.Fragment>
        );
      });
    }

    if (React.isValidElement(node)) {
      // If the node has children, process recursively
      const childrenWithAnimation = renderChildren(node.props.children);
      
      // Clone element preserving its classes, styles, and other props
      return React.cloneElement(node, {
        ...node.props,
        key: node.key || undefined,
        children: childrenWithAnimation,
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => <React.Fragment key={index}>{renderChildren(child)}</React.Fragment>);
    }

    return node;
  };

  return (
    <Component className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        variants={containerVariants}
        className="inline-block w-full"
      >
        {renderChildren(children)}
      </motion.span>
    </Component>
  );
}

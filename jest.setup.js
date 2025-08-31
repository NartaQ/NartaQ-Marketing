import '@testing-library/jest-dom'

// Mock React
const React = require('react')

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileHover, whileTap, animate, transition, style, ...props }) => (
      React.createElement('div', { ...props, style: typeof style === 'object' ? style : {} }, children)
    ),
    button: ({ children, whileHover, whileTap, animate, transition, style, ...props }) => (
      React.createElement('button', { ...props, style: typeof style === 'object' ? style : {} }, children)
    ),
  },
  AnimatePresence: ({ children }) => children,
  useMotionValue: () => ({ 
    set: jest.fn(), 
    get: jest.fn().mockReturnValue(0),
    on: jest.fn(),
    destroy: jest.fn() 
  }),
  useTransform: () => ({ 
    set: jest.fn(), 
    get: jest.fn().mockReturnValue(0),
    on: jest.fn(),
    destroy: jest.fn() 
  }),
  useSpring: () => ({ 
    set: jest.fn(), 
    get: jest.fn().mockReturnValue(0),
    on: jest.fn(),
    destroy: jest.fn() 
  }),
  useMotionTemplate: () => 'rgba(169, 139, 93, 0.3)',
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
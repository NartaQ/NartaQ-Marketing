import '@testing-library/jest-dom'

// Mock React
const React = require('react')

// Mock analytics
jest.mock('@/lib/analytics/unified-tracker', () => ({
  trackFormStart: jest.fn().mockResolvedValue(undefined),
  trackFormComplete: jest.fn().mockResolvedValue(undefined),
  trackFormError: jest.fn().mockResolvedValue(undefined),
}))

// Mock email queue service
jest.mock('@/lib/email-queue-service', () => ({
  queueWelcomeEmail: jest.fn().mockResolvedValue(undefined),
  queueFounderConfirmation: jest.fn().mockResolvedValue(undefined),
  queueInvestorConfirmation: jest.fn().mockResolvedValue(undefined),
  queueCareerConfirmation: jest.fn().mockResolvedValue(undefined),
  processEmailQueue: jest.fn().mockResolvedValue({ processed: 0, sent: 0, failed: 0 }),
  getQueueStats: jest.fn().mockResolvedValue({ pending: 0, sent: 0, failed: 0, total: 0 }),
}))

// Mock email template loader
jest.mock('@/lib/email-template-loader')

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
/**
 * Mock email template loader for testing
 */
export const emailTemplateLoader = {
  renderNewsletterWelcome: jest.fn((data: { name: string }) => {
    return `<html><body>Welcome ${data.name}!</body></html>`
  }),
  
  renderFounderConfirmation: jest.fn((data: { founderName: string; companyName: string }) => {
    return `<html><body>Application received for ${data.companyName}, ${data.founderName}</body></html>`
  }),
  
  renderInvestorConfirmation: jest.fn((data: { investorName: string; investorType: string }) => {
    return `<html><body>Welcome investor ${data.investorName} (${data.investorType})</body></html>`
  }),
  
  renderCareerConfirmation: jest.fn((data: { applicantName: string; position: string }) => {
    return `<html><body>Application received for ${data.position}, ${data.applicantName}</body></html>`
  }),
  
  clearCache: jest.fn(),
}

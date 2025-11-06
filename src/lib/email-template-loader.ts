import { readFileSync } from 'fs'
import { join } from 'path'
import Handlebars from 'handlebars'

/**
 * Email template loader that reads compiled HTML templates and renders them with dynamic variables
 */
class EmailTemplateLoader {
  private templateCache: Map<string, HandlebarsTemplateDelegate> = new Map()
  private readonly templatesDir: string

  constructor() {
    this.templatesDir = join(process.cwd(), 'src/lib/email-templates-compiled')
  }

  /**
   * Load and compile a template (with caching)
   */
  private loadTemplate(templateName: string): HandlebarsTemplateDelegate {
    // Check cache first
    if (this.templateCache.has(templateName)) {
      return this.templateCache.get(templateName)!
    }

    // Read and compile template
    const templatePath = join(this.templatesDir, `${templateName}.html`)
    try {
      const templateContent = readFileSync(templatePath, 'utf-8')
      const compiled = Handlebars.compile(templateContent)
      this.templateCache.set(templateName, compiled)
      return compiled
    } catch (error) {
      throw new Error(
        `Failed to load email template "${templateName}": ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  /**
   * Clear the template cache (useful for development/testing)
   */
  clearCache(): void {
    this.templateCache.clear()
  }

  /**
   * Render newsletter welcome email
   */
  renderNewsletterWelcome(data: { name: string }): string {
    const template = this.loadTemplate('NewsletterWelcome')
    return template(data)
  }

  /**
   * Render founder application confirmation email
   */
  renderFounderConfirmation(data: { founderName: string; companyName: string }): string {
    const template = this.loadTemplate('FounderConfirmation')
    return template(data)
  }

  /**
   * Render investor application confirmation email
   */
  renderInvestorConfirmation(data: { investorName: string; investorType: string }): string {
    const template = this.loadTemplate('InvestorConfirmation')
    return template({
      investorName: data.investorName,
      investorType: data.investorType || 'investor',
    })
  }

  /**
   * Render career application confirmation email
   */
  renderCareerConfirmation(data: { applicantName: string; position: string }): string {
    const template = this.loadTemplate('CareerConfirmation')
    return template(data)
  }

  /**
   * Render SPV partner application confirmation email
   */
  renderSPVPartnerConfirmation(data: { partnerName: string; companyName: string }): string {
    const template = this.loadTemplate('SPVPartnerConfirmation')
    return template(data)
  }
}

// Export singleton instance
export const emailTemplateLoader = new EmailTemplateLoader()

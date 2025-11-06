#!/usr/bin/env tsx
/* eslint-disable no-console */
/**
 * Email Template Build Script
 * 
 * Converts React Email templates into static HTML files for production use.
 * This approach allows us to:
 * - Use React components for email development (better DX)
 * - Ship zero React code in production (smaller bundle, faster emails)
 * - Leverage React Email's spam/accessibility checking during development
 * - Generate optimized, email-client-compatible HTML
 * 
 * Usage:
 *   npm run build:emails          # Build once
 *   npm run build:emails -- -w    # Watch mode for development
 */

import { render } from '@react-email/render'
import chokidar from 'chokidar'
import * as fs from 'fs'
import { Stats } from 'node:fs'
import * as path from 'path'
import * as React from 'react'

const projectRoot = process.cwd()
const templatesDir = path.join(projectRoot, 'src/emails')
const outDir = path.join(projectRoot, 'src/lib/email-templates-compiled')

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

// Check for watch mode flag
const isWatchMode = process.argv.includes('-w') || process.argv.includes('--watch')

// Get all .tsx template files (excluding components directory)
const getTemplateFiles = () => {
  return fs
    .readdirSync(templatesDir)
    .filter((file) => file.endsWith('.tsx') && !file.startsWith('components'))
}

console.log('\x1b[36m%s\x1b[0m', '📧 Building email templates...\n')

buildTemplates(getTemplateFiles()).then(() => {
  if (isWatchMode) {
    console.log('\x1b[32m%s\x1b[0m', '\n👀 Watching for changes...\n')
  } else {
    console.log('\x1b[32m%s\x1b[0m', '\n✅ Email templates built successfully!\n')
  }
})

// Watch for changes in development
if (isWatchMode) {
  chokidar
    .watch(templatesDir, {
      ignoreInitial: true,
      ignored: /(^|[\/\\])\../, // Ignore dot files
    })
    .on('change', (filePath) => {
      if (filePath.endsWith('.tsx')) {
        const file = path.basename(filePath)
        console.log(`\n🔄 File changed: ${file}`)
        
        // If component changed, rebuild all templates
        if (filePath.includes('components')) {
          console.log('   Component file changed, rebuilding all templates...')
          buildTemplates(getTemplateFiles())
        } else {
          buildTemplates([file])
        }
      }
    })
    .on('add', (filePath) => {
      if (filePath.endsWith('.tsx') && !filePath.includes('components')) {
        const file = path.basename(filePath)
        console.log(`\n➕ New template added: ${file}`)
        buildTemplates([file])
      }
    })
    .on('unlink', (filePath) => {
      if (filePath.endsWith('.tsx') && !filePath.includes('components')) {
        const file = path.basename(filePath)
        const outputFileName = `${file.slice(0, -4)}.html`
        const outputPath = path.join(outDir, outputFileName)
        
        console.log(`\n🗑️  Template deleted: ${file}`)
        if (fs.existsSync(outputPath)) {
          fs.unlinkSync(outputPath)
          console.log(`   Deleted compiled file: ${outputFileName}`)
        }
      }
    })
}

async function buildTemplates(files: string[]) {
  await Promise.all(
    files.map(async (file) => {
      const inputPath = path.join(templatesDir, file)
      const outputFileName = `${file.slice(0, -4)}.html`
      const outputPath = path.join(outDir, outputFileName)

      try {
        // Clear module cache for hot reloading
        delete require.cache[require.resolve(inputPath)]

        // Import the component
        const mod = require(inputPath)
        const Component = mod.default

        if (typeof Component === 'function') {
          // Render to HTML
          const html = await render(React.createElement(Component, {}))

          // Write to file
          fs.writeFileSync(outputPath, html, 'utf-8')
          
          console.log(`   ✅ ${file} → ${outputFileName}`)
        } else {
          console.error(`   ❌ ${file}: No default export found`)
          console.error(`      Available exports:`, Object.keys(mod))
        }
      } catch (err) {
        console.error(`   ❌ Failed to process ${file}:`, err)
      }
    })
  )
}

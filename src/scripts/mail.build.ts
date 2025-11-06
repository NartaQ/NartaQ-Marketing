/* eslint-disable no-console */
/**
 * This is a build script that converts React Email templates into a static html(handlebars) files.
 * Why not use React Email in production?
 * React email uses React.js(duh!). But shipping a whole chunky React package and it's dependencies for just rendering email seems to be a bloat. That's why you can see that we don't ship React in prod and react & react-dom are dev packages in this project.
 * React Email drastically helps us to create component & shared design system based emails. Also, it checks our email templates for spam, accessibility and compatibility with different email clients.
 * But once it has been created, we don't need React at all. The better solution is to just convert your react email templates once completed into static html files.
 */
import { render } from '@react-email/render';
import chokidar from 'chokidar';
import * as fs from 'fs';
import { Stats } from 'node:fs';
import * as path from 'path';
import * as React from 'react';

// Use process.cwd() and assume we're running from the API directory
const projectRootDir = process.cwd();
const templatesDir = path.join(projectRootDir, 'src/shared/mail/templates');
const outDir = path.join(projectRootDir, 'src/shared/mail/templates');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let isWatchMode = false;

if (process.argv.length > 1) {
  // Watch Mode: -w | --watch
  const watchParamIndex = process.argv.findIndex(
    (a) => a === '-w' || a === '--watch',
  );
  if (watchParamIndex !== -1) {
    isWatchMode = true;
  }
}

const templates = fs
  .readdirSync(templatesDir)
  .filter((file) => file.endsWith('.tsx'));

console.log(
  '\x1b[32m%s\x1b[0m',
  `📨 Creating static html files for email templates.`,
);
build(templates).then(() => {
  if (isWatchMode) {
    console.log(
      '\x1b[32m%s\x1b[0m',
      `\nWatching for email template changes...`,
    );
  }
});

if (isWatchMode) {
  chokidar
    .watch(templatesDir, {
      ignoreInitial: true,
      ignored: /(^|[\/\\])\../, // Ignore dot files
    })
    .on('change', (filePath) => {
      if (filePath.endsWith('.tsx')) {
        const file = path.basename(filePath);
        console.log(`\nFile changed: ${file}`);
        build([file]);
      }
    })
    .on('add', (filePath) => {
      if (filePath.endsWith('.tsx')) {
        const file = path.basename(filePath);
        console.log(`\nNew file added: ${file}`);
        build([file]);
      }
    })
    .on('unlink', (filePath) => {
      if (filePath.endsWith('.tsx')) {
        const file = path.basename(filePath);
        const outputFileName = `${file.slice(0, -'.tsx'.length)}.hbs`;
        const fileOutputPath = path.join(outDir, outputFileName);
        console.log(`\nFile deleted: ${file}`);
        if (fs.existsSync(fileOutputPath)) {
          fs.unlinkSync(fileOutputPath);
          console.log(`Deleted compiled file: ${outputFileName}`);
        }
      }
    });
}

async function build(files: string[]) {
  await Promise.all(
    files.map(async (file) => {
      const fileInputPath = path.join(templatesDir, file);
      const outputFileName = `${file.slice(0, -'.tsx'.length)}.hbs`;
      const fileOutputPath = path.join(outDir, outputFileName);

      try {
        // Clear module cache
        delete require.cache[require.resolve(fileInputPath)];

        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const mod = require(fileInputPath);
        const Component =
          mod.default ||
          mod.EmailVerification ||
          mod.ResetPassword ||
          mod.SignInMagicLink;

        if (typeof Component === 'function') {
          const html = await render(React.createElement(Component));

          // Ensure directory exists
          const outputDir = path.dirname(fileOutputPath);
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          fs.writeFileSync(fileOutputPath, html);
          console.info(
            `✅ ${file} -> ${outDir.replace(projectRootDir, '.')}/${outputFileName}`,
          );
        } else {
          console.error(`❌ ${file}: No valid React component found`);
          console.error(`Available exports:`, Object.keys(mod));
        }
      } catch (err) {
        console.error(`❌ Failed to process ${file}:`, err);
      }
    }),
  );
}

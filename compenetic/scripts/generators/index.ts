#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import chalk from 'chalk';
import { Command } from 'commander';
import { loadConfig, processOptions } from './modules/config';
import { updateLocaleFiles, updateLocaleTypeFile } from './modules/locales';
import { generateComponentFiles, updateIndexFile, updateAppFile } from './modules/files';

const program = new Command();

program
  .name('skillgrid')
  .version('1.1.0')
  .description('Advanced component generator with configurable options');

const generate = program.command('generate').alias('g').description('Generate files');

// Команда создания компонента
generate
  .command('component <name>')
  .alias('c')
  .description('Generate new component')
  .option('--i18n', 'Generate i18n file', undefined)
  .option('--hook', 'Generate hook file', undefined)
  .option('--stories', 'Generate stories file', undefined)
  .option('--index', 'Generate index file', undefined)
  .option('--no-stories', 'Skip stories generation')
  .option('--no-hook', 'Skip hook generation')
  .option('--no-i18n', 'Skip i18n generation')
  .action(async (name, options) => {
    console.log(chalk.cyan('\n📦 Generating component'), chalk.bold(name));

    // Загружаем конфигурацию и обрабатываем опции
    const config = loadConfig();
    const componentOptions = processOptions(options, config);
    console.log(chalk.gray('Configuration:'), componentOptions);

    try {
      // Генерируем файлы компонента
      console.log('\n📄 Creating component files:');
      const filesResult = await generateComponentFiles(name, config, componentOptions);
      if (!filesResult.success) {
        console.log(filesResult.error);
        process.exit(1);
      }

      // Обновляем проектные файлы
      console.log('\n🔄 Updating project files:');

      // Обновляем индексный файл
      if (componentOptions.withIndex) {
        const indexResult = await updateIndexFile(name, config);
        if (!indexResult.success) {
          console.log(indexResult.error);
        }
      }

      // Обновляем файлы локализации
      if (componentOptions.withI18n) {
        const localeResult = await updateLocaleFiles(name);
        if (!localeResult.success) {
          console.log(localeResult.error);
        }

        const typeResult = await updateLocaleTypeFile(name);
        if (!typeResult.success) {
          console.log(typeResult.error);
        }
      }

      // Обновляем App.tsx
      const appResult = await updateAppFile(name, config);
      if (!appResult.success) {
        console.log(appResult.error);
      }

      console.log(chalk.green(`\n✅ Component ${chalk.bold(name)} successfully created!`));
    } catch (error) {
      console.log(chalk.red(`\n❌ Error: ${error.message}`));
      process.exit(1);
    }
  });

program.parse(process.argv);

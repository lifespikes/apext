#!/usr/bin/env node

import colors from '@colors/colors/safe'
import { findApiDir, findPagesDir, traverseDir } from './helpers'
import { Command } from 'commander'

const program = new Command()

program
  .name('apext')
  .description(
    'A simple CLI tool to output all your Next.js API routes in your console.'
  )
  .version('0.0.2')

program
  .command('list')
  .description(
    `🎯 ${colors.green('List all API endpoints in your Next.js project.')}`
  )
  .action(async () => {
    try {
      const pagesPath = await findPagesDir()
      const apiPath = await findApiDir(pagesPath)

      if (!apiPath) throw new Error('Could not find API directory')

      await traverseDir(apiPath)
    } catch (error) {
      console.log(error)
    }
  })

program.parse()

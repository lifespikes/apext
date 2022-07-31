#!/usr/bin/env node

import yargs from 'yargs'
import colors from '@colors/colors/safe'
import { hideBin } from 'yargs/helpers'
import { findApiDir, findPagesDir, traverseDir } from './helpers'

yargs(hideBin(process.argv))
  .scriptName('apext')
  .command(
    'list',
    `🎯 ${colors.green('List all API endpoints in your Next.js project.')}`,
    () => {},
    async (argv) => {
      const pagesPath = await findPagesDir()
      const apiPath = await findApiDir(pagesPath)

      if (!apiPath) throw new Error('Could not find API directory')

      await traverseDir(apiPath)
    }
  )
  .demandCommand(1)
  .strict()
  .parse()

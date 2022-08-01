#!/usr/bin/env node

import { Command } from 'commander'
import { listAction, listDesc } from './commands'

const program = new Command()

program
  .name('apext')
  .description(
    'A simple CLI tool to output all your Next.js API routes in your console.'
  )
  .version('0.0.2')

// COMMANDS

// LIST COMMAND - OPTIONS: --path
const list = program.command('list').aliases(['ls, lst']).description(listDesc)
list.option('--path <path>', 'Path to look routes in. eg: --path=auth')
list.action(listAction)

program.parse()

#!/usr/bin/env node

import { Command } from 'commander'
import { listAction, listDesc, createAction, createDesc } from './commands'

const program = new Command()

program
  .name('apext')
  .description('A simple CLI tool to manage and organize Next.js API routes.')
  .version('0.2.0')

// COMMANDS

// LIST COMMAND - OPTIONS: --path
const list = program.command('list').aliases(['ls, lst']).description(listDesc)
list.option('--path <path>', 'Path to look routes in. eg: --path=auth')
list.action(listAction)

// CREATE COMMAND - OPTIONS: --name --path
const create = program.command('create').description(createDesc)
create.argument('<name>', 'Name of the route to create.')
create.option('--path <path>', 'Path to create route in. eg: --path=auth')
create.option('--ts', 'If you want a Typescript file.')
create.action(createAction)

program.parse()

#!/usr/bin/env node

import { Command } from 'commander'
import { listAction, listDesc } from './commands'
import { createAction } from './commands/create'

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

// CREATE COMMAND - OPTIONS: --name --path
const create = program.command('create').description('Create a new API route.')
create.option('--name <name>', 'Name to create route in. eg: --name=login')
create.option('--path <path>', 'Path to create route in. eg: --path=auth')
create.option('--ts', 'If you want a Typescript file.')
create.action(createAction)

program.parse()

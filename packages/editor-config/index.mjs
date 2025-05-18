#!/usr/bin/env node
import childProcess from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { exit } from 'node:process'
import { fileURLToPath } from 'node:url'

import pkg from './package.json' with { type: 'json' }

const fileName = '.editorconfig'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const source = path.join(__dirname, fileName)

let gitRoot

console.info(`[${pkg.name}] Running...`)

try {
  gitRoot = childProcess
    .execSync('git rev-parse --show-toplevel')
    .toString()
    .trim()
} catch {
  console.error(`\u001B[0;31m[${pkg.name}] Could not get root path\u001B[0m`)
  exit()
}

const destination = path.join(gitRoot, fileName)

if (source === destination) {
  exit()
}

if (fs.existsSync(destination)) {
  fs.unlinkSync(destination)

  console.warn(
    `\u001B[0;33m[${pkg.name}] Deleted existing ${fileName}\u001B[0m`,
  )
}

const data = fs.readFileSync(source)

fs.writeFileSync(destination, data, { mode: 0o444 })

console.info(`\u001B[0;32m[${pkg.name}] Created ${fileName}\u001B[0m`)

console.info(`\r`)

#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import process, { exit } from 'node:process'

import pkg from './package.json' with { type: 'json' }

const fileName = '.editorconfig'
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const source = path.join(__dirname, fileName)
const currentPath = process.cwd()

console.info(`[${pkg.name}] Running...`)

const destination = path.join(currentPath, fileName)

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

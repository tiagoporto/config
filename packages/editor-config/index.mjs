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

const data = fs.readFileSync(source)

try {
  const fd = fs.openSync(destination, fs.constants.O_CREAT | fs.constants.O_EXCL | fs.constants.O_RDWR, 0o600)
  fs.writeFileSync(fd, data)
  fs.closeSync(fd)

  console.info(`\u001B[0;32m[${pkg.name}] Created ${fileName}\u001B[0m`)
} catch {
  fs.writeFileSync(destination, data)

  console.warn(
    `\u001B[0;33m[${pkg.name}] Overwrite existing ${fileName}\u001B[0m`,
  )
}
console.info(`\r`)

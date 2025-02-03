import childProcess from 'child_process'
import fs from 'fs'
import { exit } from 'node:process'
import path from 'path'
import { fileURLToPath } from 'url'

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name: packageName } = JSON.parse(jsonData)
const fileName = '.editorconfig'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const source = path.join(__dirname, fileName)

let gitRoot

try {
  gitRoot = childProcess
    .execSync('git rev-parse --show-toplevel')
    .toString()
    .trim()
} catch {
  console.error(`\x1b[0;31m${packageName}: Could not get root path\x1b[0m`)
  exit()
}

const dest = path.join(gitRoot, fileName)

if (source === dest) {
  exit()
}

if (fs.existsSync(dest)) {
  fs.unlinkSync(dest)

  console.warn(`\x1b[0;33m${packageName}: Deleted existing ${fileName}\x1b[0m`)
}

const data = fs.readFileSync(source)

fs.writeFileSync(dest, data, { mode: 0o444 })

console.info(`\x1b[0;32m${packageName}: Created ${fileName}\x1b[0m`)

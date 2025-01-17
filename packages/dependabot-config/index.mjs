import child_process from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name: packageName } = JSON.parse(jsonData)
const fileName = 'dependabot.yml'
let sourceFileName = 'dependabot.yml'
let gitRoot

try {
  gitRoot = child_process
    .execSync('git rev-parse --show-toplevel')
    .toString()
    .trim()
} catch {
  console.error(`\x1b[0;31m${packageName}: Could not get root path\x1b[0m`)
  process.exit(0)
}
// check if uses conventional commits
const json = JSON.parse(
  fs.readFileSync(path.join(gitRoot, 'package.json'), 'utf8'),
)
if (
  json.dependencies?.['@commitlint/config-conventional'] ||
  json.devDependencies?.['@commitlint/config-conventional']
) {
  sourceFileName = 'dependabot-conventional.yml'
}

const source = path.join(__dirname, sourceFileName)
const dest = path.join(gitRoot, '.github', fileName)

if (source === dest) {
  process.exit(0)
}

if (fs.existsSync(dest)) {
  fs.unlinkSync(dest)

  console.warn(
    `\x1b[0;33m${packageName}: Deleted existing .github/${fileName}\x1b[0m`,
  )
}

const data = fs.readFileSync(source)
fs.writeFileSync(dest, data, { mode: 0o444 })

console.info(`\x1b[0;32m${packageName}: Created .github/${fileName}\x1b[0m`)

import childProcess from 'child_process'
import fs from 'fs'
import { exit } from 'node:process'
import path from 'path'
import { fileURLToPath } from 'url'

import { saveFile } from './saveFile.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name: packageName } = JSON.parse(jsonData)
const fileName = 'dependabot.yml'
let isUsingConventionalCommits = false
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

// check if uses conventional commits
const installedPackages = JSON.parse(
  fs.readFileSync(path.join(gitRoot, 'package.json'), 'utf8'),
)

if (
  installedPackages.dependencies?.['@commitlint/config-conventional'] ||
  installedPackages.devDependencies?.['@commitlint/config-conventional']
) {
  isUsingConventionalCommits = true
}

const dependabotFileName = isUsingConventionalCommits
  ? 'dependabot-conventional.yml'
  : 'dependabot.yml'
const dependabotSource = path.join(__dirname, dependabotFileName)
const dependabotDest = path.join(gitRoot, '.github', fileName)

saveFile({
  dest: dependabotDest,
  source: dependabotSource,
  fileName: `.github/${dependabotFileName}`,
})

if (isUsingConventionalCommits) {
  const semanticFileName = 'semantic.yml'
  const semanticSource = path.join(__dirname, semanticFileName)
  const semanticDest = path.join(gitRoot, '.github', semanticFileName)

  saveFile({
    dest: semanticDest,
    source: semanticSource,
    fileName: `.github/${semanticFileName}`,
  })
}

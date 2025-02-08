import childProcess from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { exit } from 'node:process'
import { fileURLToPath } from 'node:url'

import { saveFile } from './save-file.mjs'

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
  console.error(`\u001B[0;31m${packageName}: Could not get root path\u001B[0m`)
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
const dependabotDestination = path.join(gitRoot, '.github', fileName)

saveFile({
  dest: dependabotDestination,
  source: dependabotSource,
  fileName: `.github/${dependabotFileName}`,
})

if (isUsingConventionalCommits) {
  const semanticFileName = 'semantic.yml'
  const semanticSource = path.join(__dirname, semanticFileName)
  const semanticDestination = path.join(gitRoot, '.github', semanticFileName)

  saveFile({
    dest: semanticDestination,
    source: semanticSource,
    fileName: `.github/${semanticFileName}`,
  })
}

#!/usr/bin/env node

import childProcess from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { exit } from 'node:process'
import { fileURLToPath } from 'node:url'

import pkg from './package.json' with { type: 'json' }
import { saveFile } from './save-file.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fileName = 'dependabot.yml'
let isUsingConventionalCommits = false
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
const dependabotSource = path.join(__dirname, 'assets', dependabotFileName)
const githubDestinationFolder = path.join(gitRoot, '.github')
const dependabotDestination = path.join(githubDestinationFolder, fileName)

saveFile({
  githubDestinationFolder,
  dest: dependabotDestination,
  source: dependabotSource,
  fileName: `.github/${dependabotFileName}`,
})

console.info(`\r`)

#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import pkg from './package.json' with { type: 'json' }
import { saveFile } from './save-file.mjs'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const currentPath = process.cwd()
const fileName = 'dependabot.yml'
let isUsingConventionalCommits = false

console.info(`[${pkg.name}] Running...`)

// check if uses conventional commits
const installedPackages = JSON.parse(
  fs.readFileSync(path.join(currentPath, 'package.json'), 'utf8'),
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
const githubDestinationFolder = path.join(currentPath, '.github')
const dependabotDestination = path.join(githubDestinationFolder, fileName)

saveFile({
  githubDestinationFolder,
  dest: dependabotDestination,
  source: dependabotSource,
  fileName: `.github/${dependabotFileName}`,
})

console.info(`\r`)

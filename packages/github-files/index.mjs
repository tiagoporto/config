#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import pkg from './package.json' with { type: 'json' }
import { saveFile } from './save-file.mjs'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const currentPath = process.cwd()
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

const githubDestinationFolder = path.join(currentPath, '.github')

const codeOwnersFileName = 'CODEOWNERS'
const codeOwnersSource = path.join(__dirname, 'assets', codeOwnersFileName)
const codeOwnersDestination = path.join(
  githubDestinationFolder,
  codeOwnersFileName,
)

saveFile({
  githubDestinationFolder,
  dest: codeOwnersDestination,
  source: codeOwnersSource,
  fileName: `.github/${codeOwnersFileName}`,
})

if (isUsingConventionalCommits) {
  const semanticFileName = 'semantic.yml'
  const semanticSource = path.join(__dirname, 'assets', semanticFileName)
  const semanticDestination = path.join(
    githubDestinationFolder,
    semanticFileName,
  )

  saveFile({
    githubDestinationFolder,
    dest: semanticDestination,
    source: semanticSource,
    fileName: `.github/${semanticFileName}`,
  })
}

console.info(`\r`)

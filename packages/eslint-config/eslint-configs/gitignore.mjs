import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import process from 'node:process'

const currentPath = process.cwd()
const gitignorePath = path.resolve(currentPath, '.gitignore')

/** @type {import('eslint').Linter.Config[]} */
export const gitignoreConfig = [
  {
    name: 'tp/.gitignore',
    ignores: includeIgnoreFile(gitignorePath).ignores,
  },
]

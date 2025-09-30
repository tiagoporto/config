import fs from 'node:fs'

import pkg from './package.json' with { type: 'json' }

export const saveFile = ({
  dest,
  source,
  fileName,
  githubDestinationFolder,
}) => {
  if (!fs.existsSync(githubDestinationFolder)) {
    fs.mkdirSync(githubDestinationFolder)
  }

  if (fs.existsSync(dest)) {
    fs.unlinkSync(dest)

    console.warn(
      `\u001B[0;33m[${pkg.name}] Deleted existing ${fileName}\u001B[0m`,
    )
  }

  const data = fs.readFileSync(source)
  fs.writeFileSync(dest, data, { mode: 0o444 })
  console.info(`\u001B[0;32m[${pkg.name}] Created ${fileName}\u001B[0m`)
}

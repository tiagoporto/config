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
  const data = fs.readFileSync(source)

  try {
    const fd = fs.openSync(dest, fs.constants.O_CREAT | fs.constants.O_EXCL | fs.constants.O_RDWR, 0o600)
    fs.writeFileSync(fd, data)
    fs.closeSync(fd)

    console.info(`\u001B[0;32m[${pkg.name}] Created ${fileName}\u001B[0m`)
  } catch {
    fs.writeFileSync(dest, data)

    console.warn(
      `\u001B[0;33m[${pkg.name}] Overwrite existing ${fileName}\u001B[0m`,
    )
  }
}

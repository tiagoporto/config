import fs from 'node:fs'

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name: packageName } = JSON.parse(jsonData)

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
      `\u001B[0;33m${packageName}: Deleted existing ${fileName}\u001B[0m`,
    )
  }

  const data = fs.readFileSync(source)
  fs.writeFileSync(dest, data, { mode: 0o444 })
  console.info(`\u001B[0;32m${packageName}: Created ${fileName}\u001B[0m`)
}

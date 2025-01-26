import fs from 'fs'
const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name: packageName } = JSON.parse(jsonData)

export const saveFile = ({ dest, source, fileName }) => {
  if (source !== dest) {
    if (fs.existsSync(dest)) {
      fs.unlinkSync(dest)

      console.warn(
        `\x1b[0;33m${packageName}: Deleted existing ${fileName}\x1b[0m`,
      )
    }

    const data = fs.readFileSync(source)
    fs.writeFileSync(dest, data, { mode: 0o444 })
    console.info(`\x1b[0;32m${packageName}: Created ${fileName}\x1b[0m`)
  }
}

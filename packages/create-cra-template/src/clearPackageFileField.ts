import fs from 'fs-extra'
import jsonfile from 'jsonfile'
import path from 'path'
import signale from 'signale'

export default async function clearPackageFileField(
  pkgDir: string = process.cwd()
) {
  const packageJson = await jsonfile.readFile(path.join(pkgDir, 'package.json'))

  if (!packageJson?.files) return
  const { files } = packageJson

  const filterList = ['template', 'template.json']

  // Return if nothing to clear
  if (!files.some((f: string) => filterList.includes(f))) return

  await jsonfile.writeFile(path.join(pkgDir, 'package.json'), {
    ...packageJson,
    files: files.filter((f: string) => !filterList.includes(f))
  })

  signale.success('Cleared package.json files field')
}

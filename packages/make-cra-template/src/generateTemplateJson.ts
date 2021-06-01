import fs from 'fs-extra'
import jsonfile from 'jsonfile'
import path from 'path'
import signale from 'signale'

export default async function generateTemplateJson(
  outputDir: string = path.join(process.cwd())
) {
  // Get package.json file path
  const packageFilePath = path.join(process.cwd(), 'package.json')

  // Check file exist
  try {
    await fs.access(packageFilePath, fs.constants.F_OK)
  } catch {
    return signale.error('Cannot find package.json file in the current folder.')
  }

  // Read Package.json and delete keys from black list
  const packageJson = await jsonfile.readFile(packageFilePath)

  const {
    name,
    version,
    private: p,
    scripts,
    dependencies,
    devDependencies,
    ...rest
  } = packageJson
  delete dependencies['react']
  delete dependencies['react-dom']
  delete dependencies['react-scripts']
  delete dependencies['make-cra-template']
  delete devDependencies['make-cra-template']

  const templateJson = {
    dependencies,
    devDependencies,
    ...rest
  }

  await fs.ensureDir(outputDir || path.join(process.cwd(), 'build-template'))

  await jsonfile.writeFile(
    path.join(outputDir, 'template.json'),
    templateJson,
    { spaces: 2 }
  )

  signale.success('Generated: template.json')
}

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
    files,
    private: p,
    scripts,
    dependencies,
    devDependencies,
    ...rest
  } = packageJson
  // Remove unused fileds
  if (dependencies) {
    delete dependencies['react']
    delete dependencies['react-dom']
    delete dependencies['react-scripts']
    delete dependencies['create-cra-template']
  }
  if (devDependencies) {
    delete devDependencies['create-cra-template']
  }

  const templateJson = {
    package: {
      dependencies,
      devDependencies,
      ...rest
    }
  }

  await fs.ensureDir(outputDir || path.join(process.cwd(), 'build-template'))

  // Write template.json
  await jsonfile.writeFile(
    path.join(outputDir, 'template.json'),
    templateJson,
    { spaces: 2 }
  )

  signale.success('Generated: template.json')

  // Modify pacakge.json files
  await jsonfile
    .writeFile(
      packageFilePath,
      {
        ...(await jsonfile.readFile(packageFilePath)),
        files: [
          ...new Set(
            [packageJson.files]
              .flat()
              .concat(['template.json', 'template'])
              .filter(item => item)
          )
        ]
      },
      { spaces: 2 }
    )
    .catch(err => {
      console.error(err)
    })

  signale.star('Modified: package.json files field')
}

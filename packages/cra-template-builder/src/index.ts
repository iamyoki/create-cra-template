/* eslint-disable import/no-extraneous-dependencies */
import { writeFile } from 'jsonfile'
import path from 'path'
import signale from 'signale'
import packageJson from '../../template-app/package.json'

const TEMPLATE_FILE_PATH = path.join(__dirname, './template.json')

async function mergePackageIntoTemplate() {
  const {
    'react-dom': rd,
    react,
    'react-scripts': rs,
    ...dependenciesFromPackage
  } = packageJson.dependencies

  const { devDependencies } = packageJson

  // template.json conf
  const template = {
    package: {
      dependencies: dependenciesFromPackage,
      devDependencies,
      eslintConfig: {
        extends: ['react-app', 'react-app/jest']
      }
    }
  }

  await writeFile(TEMPLATE_FILE_PATH, template).catch(signale.error)
  signale.success(' template.json generated')
}

mergePackageIntoTemplate()

import { prompt } from 'inquirer'
import pkgDir from 'pkg-dir'
import clearTemplateFiles from './clearTemplateFiles'
import generateTemplateFiles from './generateTemplateFiles'
import generateTemplateJson from './generateTemplateJson'
import { Argv } from './types'

export async function usage(argv: Argv) {
  const { clear } = argv

  const answer = await prompt({
    type: 'confirm',
    name: 'continue',
    message: clear
      ? 'Continue to clear previous exports before generate template from current project?'
      : 'Continue to generate template from current project?'
  })

  if (!answer.continue) return

  const rootDir = await pkgDir()

  if (clear) await clearTemplateFiles(rootDir)

  await generateTemplateJson(rootDir)
  await generateTemplateFiles(rootDir)
}

import fs from 'fs-extra'
import globby from 'globby'
import path from 'path'
import signale from 'signale'

export default async function generateTemplateFiles(
  outputDir: string = path.join(process.cwd(), 'build-template')
) {
  await fs.ensureDir(path.join(outputDir, 'template'))

  const inputDir = process.cwd()

  for await (const p of globby.stream(
    [
      '*',
      '!package-lock.json',
      '!yarn.lock',
      `!${path.basename(outputDir)}`
    ],
    {
      onlyFiles: false,
      dot: true,
      deep: 1,
      gitignore: true
    }
  )) {
    await fs.copy(
      path.join(process.cwd(), p.toString()),
      path.resolve(outputDir, 'template', p.toString()),
      {
        overwrite: true,
        recursive: true
      }
    )
    signale.success(`Generated: template/${path.basename(p.toString())}`)
  }
}

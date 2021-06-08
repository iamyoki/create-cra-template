import fs from 'fs-extra'
import globby from 'globby'
import path from 'path'
import signale from 'signale'

export default async function generateTemplateFiles(
  outputDir: string = path.join(process.cwd())
) {
  await fs.ensureDir(path.join(outputDir, 'template'))

  const inputDir = process.cwd()

  for await (const p of globby.stream(
    [
      '*',
      '!package-lock.json',
      '!package.json',
      '!yarn.lock',
      '!template.json',
      '!template'
    ],
    {
      onlyFiles: false,
      dot: true,
      deep: 1,
      gitignore: true
    }
  )) {
    const isGitignore = path.basename(p.toString()) === '.gitignore'

    await fs.copy(
      path.join(outputDir, p.toString()),
      path.resolve(
        outputDir,
        'template',
        isGitignore ? 'gitignore' : p.toString()
      ),
      {
        overwrite: true,
        recursive: true
      }
    )
    signale.success(
      `Generated: template/${
        isGitignore ? 'gitignore' : path.basename(p.toString())
      }`
    )
  }
}

import fs from 'fs-extra'
import path from 'path'
import signale from 'signale'

export default async function clearTemplateFiles(
  targetDir: string = process.cwd()
) {
  // Remove template.json
  try {
    await fs.rm(path.join(targetDir, 'template.json'))
    signale.success('🗑 Remove elder template.json')
  } catch {}

  // Remove template direcotry
  try {
    const fileCounts = (await fs.readdir(path.join(targetDir, 'template')))
      .length
    await fs.rm(path.join(targetDir, 'template'), { recursive: true })
    signale.success(`🗑 Remove elder template/ with ${fileCounts} files in`)
  } catch {}
}

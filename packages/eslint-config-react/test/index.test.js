import { test } from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import fs from 'node:fs'
import url from 'node:url'
import { ESLint } from 'eslint'
import config from '../lib/index.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const eslint = new ESLint({ overrideConfigFile: true, baseConfig: config })
const fixtureDir = path.join(__dirname, 'fixtures')

function read(rel) {
  return fs.readFileSync(path.join(fixtureDir, rel), 'utf8')
}

async function lint(rel) {
  const filePath = path.join(fixtureDir, rel)
  const [result] = await eslint.lintText(read(rel), { filePath })
  return result.messages
}

function ruleIds(messages) {
  return messages.map((m) => m.ruleId)
}

test('valid/clean.jsx produces no errors', async () => {
  const messages = await lint('valid/clean.jsx')
  const errors = messages.filter((m) => m.severity === 2)
  assert.deepEqual(errors, [], `unexpected errors: ${JSON.stringify(messages, null, 2)}`)
})

test('invalid/missing-key.jsx triggers @eslint-react/no-missing-key', async () => {
  const messages = await lint('invalid/missing-key.jsx')
  assert.ok(
    ruleIds(messages).includes('@eslint-react/no-missing-key'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/hooks-violation.jsx triggers react-hooks/rules-of-hooks', async () => {
  const messages = await lint('invalid/hooks-violation.jsx')
  assert.ok(
    ruleIds(messages).includes('react-hooks/rules-of-hooks'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/missing-alt.jsx triggers jsx-a11y/alt-text', async () => {
  const messages = await lint('invalid/missing-alt.jsx')
  assert.ok(
    ruleIds(messages).includes('jsx-a11y/alt-text'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

const { test } = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const fs = require('node:fs')
const { ESLint } = require('eslint')
const config = require('../lib/index.js')

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

test('valid/Clean.vue produces no errors', async () => {
  const messages = await lint('valid/Clean.vue')
  const errors = messages.filter((m) => m.severity === 2)
  assert.deepEqual(errors, [], `unexpected errors: ${JSON.stringify(messages, null, 2)}`)
})

test('valid/util.ts produces no errors', async () => {
  const messages = await lint('valid/util.ts')
  const errors = messages.filter((m) => m.severity === 2)
  assert.deepEqual(errors, [], `unexpected errors: ${JSON.stringify(messages, null, 2)}`)
})

test('invalid/AnyInScript.vue triggers @typescript-eslint/no-explicit-any', async () => {
  const messages = await lint('invalid/AnyInScript.vue')
  assert.ok(
    ruleIds(messages).includes('@typescript-eslint/no-explicit-any'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/MissingKey.vue triggers vue/require-v-for-key', async () => {
  const messages = await lint('invalid/MissingKey.vue')
  assert.ok(
    ruleIds(messages).includes('vue/require-v-for-key'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/OptionsApi.vue triggers vue/component-api-style', async () => {
  const messages = await lint('invalid/OptionsApi.vue')
  assert.ok(
    ruleIds(messages).includes('vue/component-api-style'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/explicit-any.ts triggers @typescript-eslint/no-explicit-any', async () => {
  const messages = await lint('invalid/explicit-any.ts')
  assert.ok(
    ruleIds(messages).includes('@typescript-eslint/no-explicit-any'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})


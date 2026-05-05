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

test('valid/script.js produces no errors', async () => {
  const messages = await lint('valid/script.js')
  const errors = messages.filter((m) => m.severity === 2)
  assert.deepEqual(errors, [], `unexpected errors: ${JSON.stringify(messages, null, 2)}`)
})

test('invalid/MissingKey.vue triggers vue/require-v-for-key', async () => {
  const messages = await lint('invalid/MissingKey.vue')
  assert.ok(
    ruleIds(messages).includes('vue/require-v-for-key'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/UnusedComponent.vue triggers vue/no-unused-components', async () => {
  const messages = await lint('invalid/UnusedComponent.vue')
  assert.ok(
    ruleIds(messages).includes('vue/no-unused-components'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/TooManyAttrs.vue triggers vue/max-attributes-per-line', async () => {
  const messages = await lint('invalid/TooManyAttrs.vue')
  assert.ok(
    ruleIds(messages).includes('vue/max-attributes-per-line'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})

test('invalid/bad-indent.js triggers indent', async () => {
  const messages = await lint('invalid/bad-indent.js')
  assert.ok(
    ruleIds(messages).includes('indent'),
    `got: ${ruleIds(messages).join(', ')}`,
  )
})


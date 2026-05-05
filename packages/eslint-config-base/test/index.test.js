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

test('valid/clean.js produces no errors', async () => {
  const messages = await lint('valid/clean.js')
  const errors = messages.filter((m) => m.severity === 2)
  assert.deepEqual(errors, [], `unexpected errors: ${JSON.stringify(messages, null, 2)}`)
})

test('invalid/bad-indent.js triggers indent', async () => {
  const messages = await lint('invalid/bad-indent.js')
  assert.ok(ruleIds(messages).includes('indent'), `got: ${ruleIds(messages).join(', ')}`)
})

test('invalid/bad-quotes.js triggers quotes', async () => {
  const messages = await lint('invalid/bad-quotes.js')
  assert.ok(ruleIds(messages).includes('quotes'))
})

test('invalid/extra-semi.js triggers semi', async () => {
  const messages = await lint('invalid/extra-semi.js')
  assert.ok(ruleIds(messages).includes('semi'))
})

test('invalid/bad-fn-paren.js triggers space-before-function-paren', async () => {
  const messages = await lint('invalid/bad-fn-paren.js')
  assert.ok(ruleIds(messages).includes('space-before-function-paren'))
})

test('invalid/unused-var.js triggers no-unused-vars', async () => {
  const messages = await lint('invalid/unused-var.js')
  assert.ok(ruleIds(messages).includes('no-unused-vars'))
})

test('invalid/undef-var.js triggers no-undef', async () => {
  const messages = await lint('invalid/undef-var.js')
  assert.ok(ruleIds(messages).includes('no-undef'))
})

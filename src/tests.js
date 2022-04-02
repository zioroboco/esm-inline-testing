import { test } from "uvu"
import * as assert from "uvu/assert"

const modules = await Promise.all([import("./bee.js")])

for (const m of modules) {
  await m.test(test, assert).then(t => t.run())
}

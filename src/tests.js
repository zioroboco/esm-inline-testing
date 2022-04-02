const modules = await Promise.all([import("./bee.js")])

for (const m of modules) {
  await m.test().then(t => t.run())
}

export const bee = "🐝"

export async function test() {
  const uvu = await import("uvu")
  const assert = await import("uvu/assert")

  uvu.test(`bee`, () => {
    assert.equal(bee, "🐝")
  })

  return uvu.test
}

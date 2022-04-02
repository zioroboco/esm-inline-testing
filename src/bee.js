export const bee = "🐝"

/**
 * @param {typeof import("uvu").test} t
 * @param {typeof import("uvu/assert")} assert
 */
export async function test(t, assert) {
  t(`bee`, () => {
    assert.equal(bee, "🐝")
  })

  return t
}

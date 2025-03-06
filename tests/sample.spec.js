const {test,expect} = require('@playwright/test')

test.skip("My First Test", async function({page}){
    expect(12).toBe(12)
})

test("My Second Test", async function({page}) {
    expect(100).toBe(101)
})

test("My Third Test", async function({page}) {
    expect("Gunjit Pannu").toContain("Gunjit")
})

test("My Fourth Test", async function({page}) {
    expect(false).toBeFalsy()
})

test("My Fifth Test", async function({page}) {
    expect("Gunjit Pannu".includes("Pannu")).toBeTruthy()
})

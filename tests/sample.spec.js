const{test, expect}= require('@playwright/test')
// below functions
// test- declare the test
// expect - add assertion in test

test('My First Test', async function({page}){
    //page- fixture
    //isolated page instance for automating each page
    expect(12).toBe(12);
});

test.skip('My Second Test', async function({page}){
    //skip this test only
    expect(12).toBe(121);
});

test('My Third Test', async function({page}){
    expect(202).toBe(202);
    expect(true).toBeTruthy();
});

test.only('My Fourth Test', async function({page}){
    //only to run this test only
    expect("Geeta").toContain('Geet');
    expect(false).toBeFalsy();
});
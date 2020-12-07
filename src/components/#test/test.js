// const getSecret = (secret) => {
//     return {
//       get: () => secret
//     };
//   };
  
//   test('Closure for object privacy.', assert => {
//     const msg = '.get() should have access to the closure.';
//     const expected = 1;
//     const obj = getSecret(1);
  
//     const actual = obj.get();
  
//     try {
//       assert.ok(secret, 'This throws an error.');
//     } catch (e) {
//       assert.ok(true, `The secret var is only available
//         to privileged methods.`);
//     }
  
//     assert.equal(actual, expected, msg);
//     assert.end();
//   });


  // Secret - creates closures with secret messages.
// https://gist.github.com/ericelliott/f6a87bc41de31562d0f9
// https://jsbin.com/hitusu/edit?html,js,output

// secret(msg: String) => getSecret() => msg: String
const secret = (msg) => () => msg;

test('secret', assert => {
  const msg = 'secret() should return a function that returns the passed secret.';

  const theSecret = 'Closures are easy.';
  const mySecret = secret(theSecret);

  const actual = mySecret();
  const expected = theSecret;

  assert.equal(actual, expected, msg);
  assert.end();
});
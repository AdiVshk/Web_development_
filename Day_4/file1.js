console.log('aditya !!!');

function code() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hi there after 2s');
    }, 2000);
  });
}

async function ExecutecodeAfte2s() {
  try {
    let ans = await code();
    console.log(ans);
  } catch (error) {
    console.log('Error getting 2s');
  }
}

ExecutecodeAfte2s();

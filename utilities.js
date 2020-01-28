// Use with `await` within an async function to simulate a sleep call
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  sleep
};

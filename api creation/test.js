// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('POST /user/repos', {
    name: 'Hello-World',
    description: 'This is your first repo!',
    homepage: 'https://github.com',
    'private': false,
    is_template: true
  })


  console.log("Papa");
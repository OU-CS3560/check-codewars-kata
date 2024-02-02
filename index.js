const core = require('@actions/core');
const github = require('@actions/github');
const httpm = require('@actions/http-client');
const toml = require('js-toml');

try {
  // `who-to-greet` input defined in action metadata file
  const kataId = core.getInput('kata-id', { required: true });

  console.log(`Checking ${kataId}!`);

  // Read the username from kata.toml.
  const workspaceDirPath = process.env.GITHUB_WORKSPACE;
  const metadata = toml.load(path.join(workspaceDirPath, 'kata.toml'));
  console.log(metadata);

  // Query Codewars API for list of completed Katas of the user.
  const http = httpm.HttpClient();
  const data = await http.getJson(`https://www.codewars.com/api/v1/users/${username}/code-challenges/completed`);

  // Search through and try to check other pages (if exist).

  // Show the output.

  core.setOutput("is-completed", true);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

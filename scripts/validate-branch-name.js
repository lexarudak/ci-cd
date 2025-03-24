const branchName = process.env.BRANCH_NAME || process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF || '';

console.log('Raw branch name:', branchName);

const branchNameRegex = /^feature\/.+/;

if (!branchNameRegex.test(branchName)) {
  console.error('Branch name must start with "feature/"');
  console.error('Current branch name:', branchName);
  process.exit(1);
}

// scripts/validate-branch-name.js
const branchName = process.env.BRANCH_NAME || '';

console.log('Validating branch name:', branchName);

const branchNameRegex = /^feature\/.+/;

if (!branchNameRegex.test(branchName)) {
  console.error('Branch name must start with "feature/"');
  console.error('Current branch name:', branchName);
  process.exit(1);
}

console.log('Branch name validation passed');

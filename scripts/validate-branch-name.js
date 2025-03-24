const branchName = process.env.BRANCH_NAME || '';

const branchNameRegex = /^feature\/.+/;

if (!branchNameRegex.test(branchName)) {
  console.error('Branch name must start with "feature/"');
  process.exit(1);
}

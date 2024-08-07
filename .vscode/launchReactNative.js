const path = require('path');
const {runCli} = require('react-native-community/cli');

const workspaceRoot = path.resolve(__dirname, '..');
const projectRoot = workspaceRoot;

runCli([workspaceRoot, 'start', '--projectRoot', projectRoot]);

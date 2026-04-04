const path = require('path');
import fs from 'fs';
import yaml from 'js-yaml';

function getAppConfig() {
  const yamlPath = path.resolve(__dirname, '../../env/env.yml')
  let yamlConfig = {};
  try {
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    yamlConfig = yaml.load(fileContents);
  } catch (e) {
    console.error("Could not load YAML config:", e);
  }
  return yamlConfig
}


export default ({ config }) => {
  console.log(getAppConfig())
  return {
    ...config,
    extra: {
      appConfig: process.env.API_URL,
    },
  };
};
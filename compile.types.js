const { compileFromFile } = require('json-schema-to-typescript');
const fs = require('fs');

/**
 * cleanup the generated typescript files
 * @param {string[]} source definitions
 */
function cleanupDTs(source) {
  const lines = source.split('\n');
  const output = [];
  for (const line of lines) {
    // if (line.includes('[k: string]: unknown;')) continue;
    output.push(line);
  }
  return output.join('\n');
}
async function compileFile(itemType) {
  const startTime = Date.now();
  const jsonPath = `./stac-spec/${itemType}-spec/json-schema`;
  const sourceFile = await compileFromFile(`${jsonPath}/${itemType}.json`, { cwd: jsonPath });
  const output = cleanupDTs(sourceFile);
  await fs.promises.writeFile(`./types/${itemType}.d.ts`, output);
  console.log(`./types/${itemType}.d.ts`, Date.now() - startTime, 'ms');
}

async function main() {
  await Promise.all([compileFile('catalog'), compileFile('collection'), compileFile('item')]);
}

main().catch(console.error);

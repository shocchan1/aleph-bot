/**
 * Membaca seluruh command dari folder commands secara rekursif
 * @param {string} folderPath
 * @returns {Collection<string, Command>}
 */

const fs = require('fs');
const path = require('path');
const client = require('../client.js');
const { Collection } = require('discord.js');

function loadCommands(commandsPath) {
    const commands = new Collection();
        
    function walk(currentPath) {
    const files = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const item of files) {
        const paths = path.join(currentPath, item.name);

        if (item.isDirectory()) {
            walk(paths);
            continue;
            }

        if (path.extname(item.name) !== '.js') continue;

        try {
            const absolutePath = path.resolve(paths);
            console.log(absolutePath);
            const command = require(absolutePath);

            if ('data' in command && 'execute' in command) {
                commands.set(command.data.name, command);
            } else {
                console.warn('[CMD HANDLER] Some files didn\'t have \'data\' or \'execute\' property.');
            }
        } catch (error) {
            console.log('[CMD HANDLER] Failed to load commands.');
            console.error(error);
            }
        }
    }

    walk(commandsPath);

    return commands;
}

module.exports = { loadCommands };

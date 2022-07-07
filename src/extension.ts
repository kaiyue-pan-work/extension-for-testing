'use strict';

import * as vscode from 'vscode';

import { DepNodeProvider } from './sampleExtension';

export function activate(context: vscode.ExtensionContext) {
	const sampleExtensionProvider = new DepNodeProvider();
	vscode.window.registerTreeDataProvider('sampleExtension', sampleExtensionProvider);
	vscode.commands.registerCommand('sampleExtension.saveWorkspaceAs', () => {
		// Using a command from Theia's plugin-vscode-commands-contribution
		vscode.commands.executeCommand('workbench.action.saveWorkspaceAs');
	});
}
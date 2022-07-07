import * as vscode from 'vscode';

export class DepNodeProvider implements vscode.TreeDataProvider<Dependency> {
	getTreeItem(element: Dependency): vscode.TreeItem {
		return element;
	}

	getChildren(element?: Dependency): Thenable<Dependency[]> {
		return Promise.resolve([]);
	}
}

export class Dependency extends vscode.TreeItem {

}

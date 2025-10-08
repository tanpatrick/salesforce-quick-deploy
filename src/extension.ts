import * as vscode from "vscode";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("salesforceQuickDeploy.deployFile", async () => {
    await deployCurrentFile();
  });

  context.subscriptions.push(disposable);
}

async function deployCurrentFile(): Promise<void> {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showErrorMessage("No active editor found. Please open a file to deploy.");
    return;
  }

  const document = editor.document;

  // Save the file before deploying
  if (document.isDirty) {
    const saved = await document.save();
    if (!saved) {
      vscode.window.showErrorMessage("Failed to save file before deployment.");
      return;
    }
  }

  const filePath = document.uri.fsPath;
  const folderPath = filePath.substring(0, filePath.lastIndexOf("/"));
  const folderName = folderPath.split("/").pop() || "folder";

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: `Salesforce Quick Deploy`,
      cancellable: false,
    },
    async (progress) => {
      try {
        // const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
        const spinnerFrames = [".", "..", "...", "....", "....."];

        let frameIndex = 0;
        const progressInterval = setInterval(() => {
          progress.report({ message: `Deploying ${folderName} ${spinnerFrames[frameIndex]} ` });
          frameIndex = (frameIndex + 1) % spinnerFrames.length;
        }, 100);

        const command = `sf project deploy start -d "${folderPath}"`;
        const { stdout, stderr } = await execAsync(command);

        clearInterval(progressInterval);

        if (stderr && !stderr.includes("Warning")) {
          console.warn("Deployment warnings:", stderr);
        }

        console.log("Deployment output:", stdout);
        vscode.window.showInformationMessage(`✓ Successfully deployed ${folderName} folder`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error("Deployment error:", errorMessage);
        vscode.window.showErrorMessage(`Deployment failed: ${errorMessage}`, "Show Output").then((selection) => {
          if (selection === "Show Output") {
            vscode.commands.executeCommand("workbench.action.output.toggleOutput");
          }
        });
      }
    }
  );
}

export function deactivate() {}

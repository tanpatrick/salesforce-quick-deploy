# Salesforce Quick Deploy 🚀
### The Salesforce Developer's Best Friend

> Because right-clicking, scrolling through a mile-long menu, and hunting for "SFDX: Deploy This Source to Org" is a *fantastic* use of your time.

## What's This?

Tired of the deployment ceremony? You know the drill:

1. Save file
2. Right-click file
3. Scroll through endless context menu options
4. Finally spot "SFDX: Deploy This Source to Org"
5. Click it
6. Wait
7. Realise you right-clicked the wrong file
8. Start over
9. Question your career choices

**Salesforce Quick Deploy** gives you a shiny rocket button in your editor toolbar. One click. That's it. Your Salesforce deployment is already running whilst you're still deciding what to have for lunch.

## Features

- **One-Click Deploy**: See that rocket 🚀 in your editor toolbar? Click it. Done.
- **Auto-Save**: Forgot to save? We got you.
- **Progress Tracking**: Know what's happening with real-time notifications
- **Smart Error Handling**: When things go wrong (and they will, it's Salesforce), we'll tell you why
- **Command Palette**: For the keyboard warriors: `Salesforce Quick Deploy: Deploy Current File`

## Installation

1. Download from VSCode Marketplace (coming soon™)
2. Or install from VSIX:

   ```bash
   code --install-extension salesforce-quick-deploy-0.0.1.vsix
   ```

## Prerequisites

- Salesforce CLI (`sf`) installed and configured
- A Salesforce project (obviously)
- An org you're authorised to deploy to
- Coffee ☕ (optional but recommended)

## Usage

### The Easy Way

1. Open any file in your Salesforce project
2. Click the rocket 🚀 button in the editor toolbar
3. Watch the magic happen

### The Keyboard Way

1. Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Type "Salesforce Quick Deploy: Deploy Current File"
3. Press Enter
4. Feel superior to mouse users

## How It Works

```
You Click Rocket → We Save File → We Run `sf project deploy start` →
You Get Notification → You Feel Productive → You Deploy Again
```

It's literally just running `sf project deploy start -d "<your-file>"`. But with style. And error handling. And progress bars.

## Why This Exists

Because I was tired of:

- Right-clicking files
- Navigating through context menus
- Accidentally deploying the wrong file
- Living in the past

Now I just click a rocket and feel like a developer from the future.

## Requirements

- VSCode ^1.60.0
- Salesforce CLI
- A Salesforce project
- Basic motor skills for clicking buttons

## Known Issues

- May cause excessive productivity
- Side effects include feeling smug about your deployment workflow
- Your coworkers might ask "how did you deploy so fast?"

## License

MIT - Because sharing is caring

---

**Pro Tip**: If your deployment fails, it's probably not this extension's fault. It's probably Salesforce's. Or your code's. But definitely not ours.

*Happy Deploying! 🚀*

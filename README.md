# Foxpit

Foxpit is a desktop app that runs Claude Code, Codex, OpenCode and Antigravity as one team with shared memory.

- **One team, any agent per seat.** A lead agent plans and hands parts of the task to teammates; each seat can run a different agent and model.
- **Shared memory.** Decisions, files and open threads are kept in `.foxpit/memory` as plain markdown in your repo, so a new session starts knowing what the others did.
- **Usage limits.** When an agent hits its limit, it waits and resumes on its own at the reset while the rest of the team keeps working.
- **Visible work.** Real terminals side by side, and a 3D office where every project is a room and you can see who is working, stuck or waiting for approval.
- **Your own accounts.** Agents run with your own subscriptions or API keys; your code stays on your machine.

Website: **[foxpit.dev](https://foxpit.dev/?utm_source=github&utm_medium=readme&utm_campaign=releases)** · Setup guide: [foxpit.dev/getting-started](https://foxpit.dev/getting-started.html?utm_source=github&utm_medium=readme&utm_campaign=releases)

## Download

Get the latest version from **[Releases](https://github.com/lordon1a/foxpit-releases/releases/latest)**:

- **Windows 10/11 (x64):** `Foxpit-Setup-x.y.z.exe` (installer) or `Foxpit-x.y.z-portable.exe` (no install)
- **macOS (Apple Silicon):** `Foxpit-x.y.z-arm64.dmg`
- **Linux (x64):** `Foxpit-x.y.z.AppImage`

Foxpit updates itself from this page. It needs a Foxpit account; the trial needs no card.

### First launch

- **Windows** may show "Windows protected your PC" because the app is not code-signed yet. Click **More info → Run anyway**.
- **macOS:** drag Foxpit into Applications and open it. When macOS says it can't verify the app, click Done, then go to System Settings → Privacy & Security and click **Open Anyway**. If it says Foxpit "is damaged", run `xattr -cr /Applications/Foxpit.app` in Terminal and open it again.
- **Linux:** `chmod +x Foxpit-*.AppImage`, then run it.

## Feedback

This repository hosts release files. Report bugs and ideas in [Issues](https://github.com/lordon1a/foxpit-releases/issues) or from the app (Settings → Report a bug).

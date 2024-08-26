# nottyboi.me

*Welcome to the nottyboi repository!* 🌈

*nottyboi*: is a decentralized social media platform. This is dedicated to ONLY gay men who are over 18+ 🌈 it will be providing a safe and engaging space to connect and share. Nottyboi is a [React Native](https://reactnative.dev/) application written in *TypeScript* 📘 It builds on the [@atproto](https://atproto.com/) TypeScript packages like [@atproto/api](https://www.npmjs.com/package/@atproto/api). There is also a small amount of [Go](https://go.dev/) language source code in ./bskyweb/, for a web service that returns the React Native Web application ⚛️

- **Web: [nottyboi.me](https://bsky.app)** 🌐
- **iOS: [App Store](https://apps.apple.com/us/app/bluesky-social/id6444370199)** -- *Coming Soon* 📱
- **Android: [Play Store](https://play.google.com/store/apps/details?id=xyz.blueskyweb.app)** -- *Coming Soon* 📱

- 🌐 *Decentralized Networking*: Connect with users across multiple servers.
- 🔒 *Privacy-Focused*: You control your data.
- 📰 *Custom Feeds*: Tailor your social media experience.
- 🌍 *Federated Services*: Expand your network without restrictions.
- 🛠️ *Open Source*: Contribute and customize your experience.
- 🌈 *Inclusive Community*: A safe space for gay men over 18+.
- 💅 *Prettier*: Code formatter
- 🧹 *Eslint*: Code linting tool
- 🗺️ *Sitemap & robots.txt*: With next-sitemap
- 🤖 *GitHub actions*: Lint your code on PR

## Technologies & Workspace setup ##

- **Install Deps, Update everything** 📥

  ```bash
  sudo apt update -y
  sudo apt install -y git zlib1g-dev libreadline-dev libssl-dev libcurl4-openssl-dev curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libffi-dev unzip wget procps file
  sudo apt full-upgrade -y
  ```

- **Git:** 🐙
  - Configure Git globally so you don't forget it later:

  ```bash
  git config --global user.name "Jerry Lockard"
  git config --global user.email "jerry@lockard.me"
  ```

- **Install NVM (18)** 🌟
  - Make sure you run "nvm use 18"

  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
  nvm install 18
  nvm use 18
  nvm -v && node -v && npm -v
  ```

- **ANDROID_HOME (Emulator & SDK):** 📱
  - Download and extract [Android Studio](https://developer.android.com/studio):

  ```bash
  sudo wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2024.1.1.11/android-studio-2024.1.1.11-linux.tar.gz
  sudo tar -xvf android-studio-2024.1.1.11-linux.tar.gz -C /opt/
  sudo rm android-studio-2024.1.1.11-linux.tar.gz
  ```

  - Configure Android SDK in Android Studio (Tools > Android SDK).
  - Ensure SDK Platforms and SDK Tools are installed & in your working PATH:

  ```bash
  echo 'export ANDROID_HOME=$HOME/Android/Sdk' >> ~/.bashrc
  echo 'export PATH=$PATH:$ANDROID_HOME/emulator' >> ~/.bashrc
  echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.bashrc
  echo 'export PATH=$PATH:$ANDROID_HOME/tools' >> ~/.bashrc
  echo 'export PATH=$PATH:$ANDROID_HOME/tools/bin' >> ~/.bashrc
  echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin' >> ~/.bashrc
  source ~/.bashrc
  ```

- **JAVA_HOME** [Zulu 17](https://developer.android.com/studio): ☕
  - Check if there is a "/usr/lib/jvm" directory, if not make one then cd into it.
  - Download Zulu 17, Unzip the file & rename it zulu followed by clean up, export & source.

  ```bash
  sudo mkdir -p /usr/lib/jvm && cd /usr/lib/jvm
  sudo wget https://cdn.azul.com/zulu/bin/zulu17.50.19-ca-jdk17.0.11-linux_x64.zip
  sudo unzip zulu17.50.19-ca-jdk17.0.11-linux_x64.zip
  sudo mv zulu17.50.19-ca-jdk17.0.11-linux_x64 zulu
  sudo rm zulu17.50.19-ca-jdk17.0.11-linux_x64.zip
  echo 'export JAVA_HOME=/usr/lib/jvm/zulu' >> ~/.bashrc
  echo 'export PATH=$PATH:$JAVA_HOME/bin' >> ~/.bashrc
  source ~/.bashrc
  ```

- **['Go'](https://go.dev/)** 🐹
  - Move to the /usr/local/ directory
  - Download and extract it
  - Install Go if you want to use the Go Server
  - Add it to your $PATH & 'source ~/.bashrc'
  - Check the Go version
  - Cleanup & Remove tar file.

  ```bash
  cd /usr/local/
  sudo wget https://dl.google.com/go/go1.22.5.linux-amd64.tar.gz
  sudo tar -xvf go1.22.5.linux-amd64.tar.gz
  echo 'export PATH=/usr/local/go/bin:$PATH' >> ~/.bashrc
  source ~/.bashrc
  go version
  sudo rm go1.22.5.linux-amd64.tar.gz
  ```

- **[HomeBrew](https://docs.brew.sh/Homebrew-on-Linux)** 🍺
  - This will install HomeBrew at '/home/linuxbrew/.linuxbrew'

  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
  brew install gcc && brew install pnpm jq && brew install pnpm
  ```

- **Yarn:** 🧶
  - Install Yarn using brew OR npm:

  ```bash
  brew install yarn
  yarn --version
  ```

  ```bash
  npm install -g yarn
  yarn --version
  ```

- **Ruby (rbenv) & Cocoapods (macOS Specific):** 💎
  - If using Apple Silicon, install LLVM and FFI:

  ```bash
  arch -arm64 brew install llvm
  sudo gem install ffi
  ```

  - Manage Ruby with `rbenv`:

  ```bash
  brew install rbenv
  rbenv install 2.7.6 && rbenv global 2.7.6
  echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
  source ~/.bashrc
  ```

  - Check if Cocoapods is installed ... Yes? ... delete it then run 'bundler install' it'll install a new one.

  ```bash
  brew info cocoapods && brew remove cocoapods && bundler install
  ```

## Start Building ##

1. **Clone [nottyboi](https://github.com/Lexington-KY-40507/nottyboi.git)**: 🚀

  ```bash
  git clone git@github.com:Lexington-KY-40507/nottyboi.git
  cd nottyboi
  yarn add --network-timeout 300000
  ```

2. **Copy `google-services.json.example` to `google-services.json` *or* provide your own `google-services.json` from ['Firebase'](https://firebase.google.com/)**: 📝

3. **Run `npx expo prebuild` for changes in `app.json` or native `package.json` deps**: 🏗️

  ```bash
  npx expo prebuild
  ```

4. **Run `yarn intl:build` for changes in `./src/locale/{locale}/messages.po`**: 🌍

   ```bash
   yarn intl:build
   ```

5. **Clone [@atproto](https://github.com/Lexington-KY-40507/atproto.git)**: 📦

   ```bash
   git clone git@github.com:Lexington-KY-40507/atproto.git
   cd atproto
   pnpm i
   pnpm build
   ```

6. **Start the dev servers**: 🚀

- Start [Docker Desktop](https://www.docker.com/products/docker-desktop/) app on macOS.
- Launch *PostgreSQL database* on **port 5432**.

   ```bash
   cd packages/dev-env
   pnpm start
   ```

7. **Run the dev app**: 🚀

- **iOS:**
- Ensure Xcode is installed & the Xcode settings are Configured.

  ```bash
  yarn ios
  ```

- **Android:**

  ```bash
  yarn android --device
  ```

- **Web:**

  ```bash
  yarn web
  ```

## Start Go Server 🚀 ##

  ```bash
  cd nottyboi
  yarn add --network-timeout 300000
  yarn build-web
  cd bskyweb/
  go mod tidy
  go build -v -tags timetzdata -o bskyweb ./cmd/bskyweb
  ./bskyweb serve --appview-host=https://public.api.bsky.app
  ```

- You should now be able to access the application at [http://localhost:8100/](http://localhost:8100/). 🌐

## Various Notes ##

- Debugging instructions, developer menu access, E2E testing, and polyfills are detailed in the original document.
- Manage Sentry sourcemaps for OTA updates and debug with Hermes.

#### Adding Sentry

- Adding Sentry is optional.
- Fill `SENTRY_AUTH_TOKEN` in `.env` for Bluesky team.
- Create token on Sentry dashboard.

## 📁 Project Structure

```bash
A:\nottyboi.me
│
├── README.md                      # Main README for the nottyboi.me project.
│
├── nottyboi                       # Fork of the Bluesky social media platform, renamed to Nottyboi.
│   ├── README.md                  # Documentation for the Nottyboi project.
│   ├── package.json               # Dependencies and scripts for the Nottyboi project.
│   ├── src                        # Source files for the Nottyboi web app.
│   │   ├── index.html             # Main entry point for the Nottyboi web app.
│   │   └── ...                    # Other HTML, CSS, JS/TS files.
│   ├── public                     # Public assets like images, fonts, etc.
│   │   └── ...                    # Public files accessible to the web.
│   └── ...                        # Additional files and directories as needed.
│
├── atproto                        # Project for the Atproto API and related services.
│   ├── README.md                  # Documentation for the Atproto project.
│   ├── package.json               # Dependencies and scripts for the Atproto project.
│   ├── src                        # Source files for the Atproto API.
│   │   └── ...                    # API implementation files (JS/TS, etc.).
│   ├── public                     # Public assets for the API (if needed).
│   │   └── ...                    # Public files related to the API.
│   ├── server.js                  # Server configuration for running the API.
│   └── ...                        # Additional files and directories as needed.
│
├── nottyboi-collective            # Directory for GitHub Pages related to the Nottyboi Collective.
│   ├── README.md                  # Documentation for the GitHub Pages site.
│   ├── index.html                 # Main entry point for the GitHub Pages site.
│   ├── CNAME                      # Custom domain configuration (e.g., nottyboi.me).
│   ├── assets                     # Static assets like images, CSS, and fonts.
│   │   └── ...                    # Files for styling and media.
│   └── ...                        # Additional files and directories as needed.
│
├── nottyboi-oauth                 # Directory for OAuth-related files and configurations.
│   ├── README.md                  # Documentation for OAuth setup.
│   ├── client-metadata.json       # OAuth client metadata JSON file.
│   ├── src                        # Source files for OAuth functionality.
│   │   ├── index.html             # Entry point for OAuth processes (e.g., redirects).
│   │   └── app.ts                 # Main TypeScript file for OAuth implementation.
│   ├── public                     # Public assets for the OAuth module (if needed).
│   │   └── ...                    # Files accessible during OAuth flows.
│   └── ...                        # Additional files and directories as needed.
│
└── ...                            # Additional projects or files as needed.
```

## 🤝 Contribution

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes, and commit them.
4. Push your changes to the forked repository.
5. Create a pull request.

## Forking guidelines

You have our blessing 🪄✨ to fork this application! However, it's very important to be clear to users when you're giving them a fork.

Please be sure to:

- Change all branding in the repository and UI to clearly differentiate from Nottyboi.
- Change any support links (feedback, email, terms of service, etc) to your own systems.
- Replace any analytics or error-collection systems with your own so we don't get super confused.

## ❤️ Support

If you liked the project, I would appreciate it if you leave a star. 🌟😊

## Shoutout

A huge thank you to the [Bluesky Social](https://blueskyweb.xyz) platform team for their incredible work on the AT Protocol, which has made projects like Nottyboi possible. 🙌
